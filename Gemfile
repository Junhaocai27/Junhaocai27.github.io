source "https://rubygems.org"

# 锁定到本地可用、且与 hawkins 兼容的 Jekyll 3.9。
gem "jekyll", "~> 3.9.0"

# --- 针对 Ruby 3.4.1 的修复部分开始 ---

# 1. 修复 "undefined method `tainted?'" 报错
# Liquid 4.0.4 移除了 Ruby 3.2+ 不再支持的 tainted? 调用。
gem "liquid", "= 4.0.4"

# 2. 修复 "cannot load such file -- csv/logger" 报错
# Ruby 3.4+ 不再默认内置这些库
gem "csv"
gem "logger"
gem "webrick"
gem "base64"
gem "bigdecimal"
gem "kramdown-parser-gfm"

# --- 针对 Ruby 3.4.1 的修复部分结束 ---

gem "wdm", "~> 0.1.0" if Gem.win_platform?

group :jekyll_plugins do
  gem "jekyll-sitemap"
  gem "jekyll-gist"
  gem "jekyll-redirect-from"
  gem "hawkins"
end
