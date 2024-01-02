import { useTranslation } from 'next-i18next';
import { Link } from 'react-scroll';

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
              <Link
                key={name}
                activeClass={styles.active}
                to={section}
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
                className={styles.tabsItem}
              >
                {name}
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;
