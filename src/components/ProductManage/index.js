import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import styles from './ProductManage.module.scss';
import cn from 'classnames';

const ProductManage = ({ translation }) => {
  const { t } = useTranslation(`${translation}`);
  const list = t('manage.list', { returnObjects: true });

  return (
    <section className={styles.manage}>
      <div className={cn('wrapper', [styles.manageWrapper])}>
        <h3 className={styles.manageTitle}>{t('manage.title')}</h3>
        <div className={styles.manageList}>
          <div className={styles.manageListGroup}>
            {list.slice(3, 6).map(({ title, text, type }, index) => {
              if (type === 'text') {
                return (
                  <div className={styles.manageItem} key={index}>
                    <h5 className={styles.manageItemTitle}>{title}</h5>
                    <p className={styles.manageItemText}>{text}</p>
                  </div>
                );
              }
            })}
          </div>
          <Image
            className={styles.manageImage}
            src={t('manage.image')}
            alt="Система управління"
            width={800}
            height={1200}
          />
          <div className={styles.manageListGroup}>
            {list.slice(3, 6).map(({ title, text, type }, index) => {
              if (type === 'text') {
                return (
                  <div className={styles.manageItem} key={index}>
                    <h5 className={styles.manageItemTitle}>{title}</h5>
                    <p className={styles.manageItemText}>{text}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductManage;
