import Image from 'next/image';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import cn from 'classnames';
import styles from './HomePage.module.scss';

const HomePage = ({ translatePath }) => {
  const { t, i18n } = useTranslation(translatePath);
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>{t('metaTitle')}</title>
        <meta name="description" content={t('metaDescription')} />
      </Head>
      <section className={styles.hero}>
        <div className={cn('wrapper', [styles.heroWrapper])}>........</div>
      </section>
    </>
  );
};

export default HomePage;
