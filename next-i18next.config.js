const configs = require('./config.json');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  localePath: './public/locales',
  react: { useSuspense: false },
};
