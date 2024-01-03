import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import ProductHero from '@/components/ProductHero';
import ProductTabs from '@/components/ProductTabs';
import ProjectsSection from '@/components/ProjectsSection';
import Benefits from '@/components/Benefits';
import Expense from '@/components/Expense';
import ProductUsing from '@/components/ProductUsing';
import ProductManage from '@/components/ProductManage';
import ProductTech from '@/components/ProductTech';
import Faq from '@/components/Faq';

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['header', 'footer', 'common', 'laserGlass'])),
      locale,
    },
  };
};

const LaserGlass = ({ locale }) => {
  const { t } = useTranslation('laserGlass');

  return (
    <>
      <Head>
        <title>{t('metaTitle')}</title>
        <meta name="description" content={t('metaDescription')} />
      </Head>
      <ProductHero translation="laserGlass" />
      <ProductUsing translation="laserGlass" />
      <Benefits translation="laserGlass" />
      <Expense />
    </>
  );
};

export default LaserGlass;
