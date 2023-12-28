import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { IconFaq, CollapseExpand } from '@UI';

import cn from 'classnames';
import styles from './Faq.module.scss';

const FaqElement = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.faqItem}>
      <div className={cn(styles.faqItemTop, { [styles.active]: isOpen })} onClick={toggleOpen}>
        <IconFaq className={styles.faqItemIcon} />
        <p>{question}</p>
      </div>
      <CollapseExpand isOpen={isOpen}>
        <div className={styles.faqItemContent} dangerouslySetInnerHTML={{ __html: answer }} />
      </CollapseExpand>
    </div>
  );
};

const Faq = ({ translation }) => {
  const { t } = useTranslation(`${translation}`);
  const itemsArray = t('faq.list', { returnObjects: true });

  return (
    <section className={styles.faq}>
      <div className={cn('wrapper', styles.faqWrapper)}>
        <div className={styles.faqContent}>
          <h3 className={styles.faqTitle}>{t('faq.title')}</h3>
          <div className={styles.faqList}>
            {itemsArray.map(({ question, answer }) => (
              <FaqElement key={question} question={question} answer={answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
