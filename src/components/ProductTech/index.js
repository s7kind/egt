import { useTranslation } from 'next-i18next';
import { useRef, useEffect, useState } from 'react';

import styles from './ProductTech.module.scss';
import cn from 'classnames';

const ProductTech = ({ translation }) => {
  const { t } = useTranslation(`${translation}`);
  const list = t('tech.list', { returnObjects: true });
  const containerRef = useRef(null);
  const [scrollInfo, setScrollInfo] = useState({});

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = (e) => {
      const { scrollLeft, scrollWidth, clientWidth } = e.target;
      const scrollPercentage = (scrollLeft / (scrollWidth - clientWidth + 184)) * 100;
      setScrollInfo({
        scrollPercentage,
      });
    };

    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <section className={styles.tech} id='tech'>
      <div className={cn('wrapper', [styles.techWrapper])}>
        <h3 className={styles.techTitle}>{t('tech.title')}</h3>
        <div className={styles.techSection}>
          <div className={styles.techList} ref={containerRef}>
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
        <div className={styles.techScrollBar}>
          <div
            className={styles.techScrollLine}
            style={{ left: `${scrollInfo.scrollPercentage}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductTech;
