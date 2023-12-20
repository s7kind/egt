import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image';
import cn from 'classnames';
import styles from './Errors.module.scss';

export const NotFound = ({ pageName }) => {
  const { t } = useTranslation(pageName);

  return (
    <>
      <Head>
        <title>{t('pageTitle')}</title>
        <meta name="description" content={t('pageDescription')} />
      </Head>
      <section className={styles.error}>
        <div className={cn('wrapper', styles['error__wrapper'])}>
          <Image src={'/imagesNext/common/404.svg'} width={210} height={82} alt="404" />
          <h2 className={styles['error__headline']}>{t('Page not found')}</h2>
        </div>
        <picture>
          <Image
            className={styles['error__image']}
            src={'/imagesNext/pages/funnel/contact__bg@2x.png'}
            width={913}
            height={833}
            alt="404"
          />
        </picture>
      </section>
    </>
  );
};
