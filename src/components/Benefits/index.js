import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

import styles from './Benefits.module.scss';
import cn from 'classnames';

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
      when: 'beforeChildren',
      staggerChildren: 0.3,
	  duration: 1,
    },
  },
};

const Benefits = ({ translation }) => {
  const { t } = useTranslation(`${translation}`);
  const benefits = t('benefits.list', { returnObjects: true });

  return (
    <section className={styles.benefits}>
      <div className={cn('wrapper', [styles.benefitsWrapper])}>
        <h2 className={styles.benefitsTitle}>{t('benefits.title')}</h2>
        <div className={styles.benefitsBox}>
          {Array.isArray(benefits) &&
            benefits?.map(({ title, caption }) => (
              <motion.div
                className={styles.benefitsMotion}
                initial="hidden"
                variants={fadeInUpVariants}
                whileInView="visible"
                viewport={{ once: true }}
                key={title}
              >
                <div className={styles.benefitsItem}>
                  <h4>{title}</h4>
                  <p dangerouslySetInnerHTML={{ __html: caption }} />
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
