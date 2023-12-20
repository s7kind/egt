import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ProductsPage from '@/scenes/Products';

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['header', 'footer', 'common', 'smartGlass'])),
    },
  };
};

const SmartGlass = () => {
  return <ProductsPage translatePath={'smartGlass'} />;
};

export default SmartGlass;
