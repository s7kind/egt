import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HomePage from '@/scenes/HomePage';

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['header', 'footer', 'common', 'home'])),
    },
  };
};

const Home = () => {
  return <HomePage translatePath={'home'} />;
};

export default Home;
