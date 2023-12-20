import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import cn from 'classnames';
import styles from './Errors.module.scss';

export const ErrorHandling = ({ error, reset }) => {
  const { t } = useTranslation('notFound');

  return (
    <>
      <Head>
        <title>{t('pageTitle')}</title>
        <meta name="description" content={t('pageDescription')} />
      </Head>
      <section className={styles.error}>
        <div className={cn('wrapper', styles['error__wrapper'])}>
          <h2 className={styles['error__headline']}>Something went wrong!</h2>
        </div>
        <button className={styles.error__button} onClick={() => reset()}>
          Try again
        </button>
      </section>
    </>
  );
};
