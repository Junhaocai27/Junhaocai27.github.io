#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
ruby_version_file="$script_dir/.ruby-version"
bundle_user_home="${TMPDIR:-/tmp}/bundler-home"

mkdir -p "$bundle_user_home"
export BUNDLE_USER_HOME="$bundle_user_home"

if [[ -f "$ruby_version_file" ]]; then
  ruby_version="$(<"$ruby_version_file")"
  ruby_bin_dir="$HOME/.rubies/ruby-$ruby_version/bin"

  if [[ -x "$ruby_bin_dir/bundle" ]]; then
    export PATH="$ruby_bin_dir:$PATH"
  fi
fi

has_reload_port_arg=false
for arg in "$@"; do
  case "$arg" in
    --reload-port|--reload-port=*|--livereload-port|--livereload-port=*)
      has_reload_port_arg=true
      break
      ;;
  esac
done

extra_args=()
if [[ "$has_reload_port_arg" == false ]]; then
  reload_port="${LIVERELOAD_PORT:-35729}"

  if ! ruby -rsocket -e 'port = Integer(ARGV.fetch(0)); server = TCPServer.new("127.0.0.1", port); server.close' "$reload_port" >/dev/null 2>&1; then
    selected_port="$(ruby -rsocket -e '
      start_port = Integer(ARGV.fetch(0))
      selected_port = nil

      (start_port..start_port + 20).each do |candidate|
        begin
          server = TCPServer.new("127.0.0.1", candidate)
          server.close
          selected_port = candidate
          break
        rescue Errno::EADDRINUSE, Errno::EACCES
        end
      end

      abort("Could not find an available LiveReload port between #{start_port} and #{start_port + 20}.") unless selected_port
      puts selected_port
    ' "$reload_port")"
    echo "LiveReload port $reload_port is busy, using $selected_port instead."
    reload_port="$selected_port"
  fi

  extra_args=(--reload-port "$reload_port")
fi

exec bundle exec jekyll liveserve "${extra_args[@]}" "$@"
