const configs = require('./config.json');
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  ...(configs?.LOCAL_DEV && { localePath: './public/locales' }),
};
