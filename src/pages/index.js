import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getServerSideProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale, ['header', 'footer', 'common', 'home']);
  return {
    props: {
      ...translations,
    },
  };
};

const Home = () => {
  const { t } = useTranslation('home');

  return (
    <>
      <Head>
        <title>{t('metaTitle')}</title>
        <meta name="description" content={t('metaDescription')} />
      </Head>
      <main></main>
    </>
  );
};

export default Home;
