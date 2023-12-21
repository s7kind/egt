import { useTranslation } from 'next-i18next';

import styles from './ProductTabs.module.scss';
import cn from 'classnames';

const ProductTabs = ({ translation }) => {
  const { t } = useTranslation(`${translation}`);
  const tabs = t('tabs', { returnObjects: true });

  return (
    <section className={styles.tabs}>
      <div className={cn('wrapper', [styles.tabsWrapper])}>
        <div className={styles.tabsBox}>
          {Array.isArray(tabs) &&
            tabs?.map(({ name, section }) => (
              <p key={name} className={styles.tabsItem}>
                {name}
              </p>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;
