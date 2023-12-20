import Image from 'next/image';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';

import cn from 'classnames';
import styles from './Products.module.scss';

const ProductsPage = ({ translatePath }) => {
  const { t, i18n } = useTranslation(translatePath);
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>{t('metaTitle')}</title>
        <meta name="description" content={t('metaDescription')} />
      </Head>
      <section className={styles.hero}>
        <div className={cn('wrapper', [styles.heroWrapper])}>
          <div className={styles.heroCaption}>
            <h1 className={styles.heroTitle}>Smart Glass</h1>
            <p className={styles.heroSubtitle}>
              Смарт-скло це новий рівень комфорту, приватності та WOW-ефекту для бізнесу
            </p>
            <p className={styles.heroDescription}>
              Smart-glass дозволяє легко регулювати прозорість скла, створювати проекційний екран та
              робити ексклюзивну багатофункціональну поверхню
            </p>
            <Link href={'/'}>Дізнатись подробиці</Link>
          </div>
        </div>
        <div className={styles.heroFigure}>
          <Image
            src="/images/smart-glass/hero-figure.png"
            width={1000}
            height={1000}
            alt="Smart Glass"
          />
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
