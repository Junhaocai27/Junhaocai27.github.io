#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
ruby_version_file="$script_dir/.ruby-version"
bundle_user_home="${TMPDIR:-/tmp}/bundler-home"

mkdir -p "$bundle_user_home"
export BUNDLE_USER_HOME="$bundle_user_home"
unset GEM_HOME GEM_PATH GEM_ROOT RUBY_ROOT RUBY_VERSION RUBY_ENGINE

if [[ -f "$ruby_version_file" ]]; then
  ruby_version="$(<"$ruby_version_file")"

  if command -v rbenv >/dev/null 2>&1; then
    export RBENV_VERSION="$ruby_version"
  else
    ruby_bin_dir="$HOME/.rubies/ruby-$ruby_version/bin"

    if [[ -x "$ruby_bin_dir/bundle" ]]; then
      export PATH="$ruby_bin_dir:$PATH"
    fi
  fi
fi

if command -v rbenv >/dev/null 2>&1; then
  exec rbenv exec bundle exec jekyll serve "$@"
fi

exec bundle exec jekyll serve "$@"
