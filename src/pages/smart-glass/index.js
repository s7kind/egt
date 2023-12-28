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
      ...(await serverSideTranslations(locale, ['header', 'footer', 'common', 'smartGlass'])),
      locale,
    },
  };
};

const SmartGlass = ({ locale }) => {
  const { t } = useTranslation('smartGlass');

  return (
    <>
      <Head>
        <title>{t('metaTitle')}</title>
        <meta name="description" content={t('metaDescription')} />
      </Head>
      <ProductHero translation="smartGlass" />
      <ProductTabs translation="smartGlass" />
      <ProjectsSection />
      <Benefits translation="smartGlass" />
      <Expense />
      <ProductUsing translation="smartGlass" />
      <ProductManage translation="smartGlass" />
      <ProductTech translation="smartGlass" />
      <Expense />
      <Faq translation="smartGlass" />
    </>
  );
};

export default SmartGlass;
