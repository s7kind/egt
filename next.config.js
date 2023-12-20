const redirects = require('./redirects.js');
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  redirects,
  reactStrictMode: false,
  trailingSlash: true,
  reactStrictMode: true,
  i18n,
};

module.exports = nextConfig;
