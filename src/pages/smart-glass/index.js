import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

import ProductHero from '@/components/ProductHero';
import ProductTabs from '@/components/ProductTabs';
import ProjectsSection from '@/components/ProjectsSection';
import Benefits from '@/components/Benefits';
import Expense from '@/components/Expense';

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
      <Expense translation="smartGlass" />
    </>
  );
};

export default SmartGlass;
