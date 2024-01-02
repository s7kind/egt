import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import styles from './ProductUsing.module.scss';
import cn from 'classnames';

const ProductUsing = ({ translation }) => {
  const { t } = useTranslation(`${translation}`);
  const list = t('using.list', { returnObjects: true });
  const size = list.length;

  return (
    <section className={styles.using} id='using'>
      <div className={cn('wrapper', [styles.usingWrapper])}>
        <h3 className={styles.usingTitle}>{t('using.title')}</h3>
        <div className={cn(styles.usingList, { [styles.fullFirst]: size === 3 })}>
          {list.map(({ image, title }, index) => (
            <div className={styles.usingItem} key={index}>
              <div className={styles.usingImage}>
                <Image src={image} alt={title} width={1000} height={1000} />
              </div>
              <h5 className={styles.usingItemTitle}>{title}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductUsing;
