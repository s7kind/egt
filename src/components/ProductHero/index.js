import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

import styles from './ProductHero.module.scss';
import cn from 'classnames';

const bounceInAnimation = (delay = 0) => ({
  initial: {
    opacity: 0,
    scale: 1,
  },
  animate: {
    scale: [1, 1],
    opacity: [0, 1],
    transition: {
      delay,
      duration: 1.5,
      ease: 'easeInOut',
      times: [0, 1],
    },
  },
});

const ProductHero = ({ translation }) => {
  const { t } = useTranslation(`${translation}`);

  return (
    <section className={styles.hero}>
      <div className={cn('wrapper', [styles.heroWrapper])}>
        <div className={styles.heroCaption}>
          <motion.div
            initial="initial"
            variants={bounceInAnimation()}
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h1 className={styles.heroTitle}>{t('hero.title')}</h1>
          </motion.div>
          <motion.div
            initial="initial"
            variants={bounceInAnimation(0.3)}
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p className={styles.heroSubtitle}>{t('hero.subTitle')}</p>
          </motion.div>
          <motion.div
            initial="initial"
            variants={bounceInAnimation(0.3)}
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p className={styles.heroDescription}>{t('hero.description')}</p>
            <div className={styles.heroAction}>
              <Link
                href={t('hero.button.link')}
                className={cn('button__underline', [styles.heroLink])}
              >
                {t('hero.button.text')}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <div className={styles.heroFigure}>
        <Image src={t('hero.figure')} width={1000} height={1000} alt={t('hero.title')} />
      </div>
    </section>
  );
};

export default ProductHero;
