import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import styles from './ProductTech.module.scss';
import cn from 'classnames';

const ProductTech = ({ translation }) => {
  const { t } = useTranslation(`${translation}`);
  const list = t('tech.list', { returnObjects: true });

  return (
    <section className={styles.tech}>
      <div className={cn('wrapper', [styles.techWrapper])}>
        <h3 className={styles.techTitle}>{t('tech.title')}</h3>
        <div className={styles.techSection}>
          <div className={styles.techList}>
            <div className={styles.techListWrapper}>
              {list.map(({ text, caption }, index) => (
                <div className={styles.techItem} key={index}>
                  <h4 className={styles.techItemText}>{text}</h4>
                  <p className={styles.techItemCaption}>{caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTech;
