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
      </div>
    </section>
  );
};

export default ProductManage;
