import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorHandling } from '@components/Errors';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import Layout from '@components/Layout';
import '@/styles/globals/index.scss';
import configs from '@configs';

const App = ({ Component, pageProps: { ...pageProps } }) => {
  const { asPath, locale } = useRouter();
  const alternateMap = { en: 'en', de: 'de', es: 'es' };

  const pathUrl = asPath === '/' ? '/' : asPath;
  const localeUrl = (l) => (l === 'en' ? '' : `/${l}`);

  return (
    <Provider store={store}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`${configs?.DOMAIN}${locale === 'en' ? '' : `/${locale}`}${pathUrl}`}
        />
        <link rel="alternate" hrefLang="x-default" href={`${configs?.DOMAIN}${pathUrl}`} />
        {Object.entries(alternateMap).map(([key, value]) => (
          <link
            key={key}
            rel="alternate"
            hrefLang={value}
            href={`${configs?.DOMAIN}${localeUrl(key)}${asPath}`}
          />
        ))}
      </Head>
      <ErrorBoundary fallback={<ErrorHandling />}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ErrorBoundary>
    </Provider>
  );
};

export default appWithTranslation(App);
