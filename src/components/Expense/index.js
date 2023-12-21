import { useTranslation } from 'next-i18next';

import styles from './Expense.module.scss';
import cn from 'classnames';

const Expense = ({ translation }) => {
  const { t } = useTranslation(`${translation}`);

  return (
    <section className={styles.expense}>
      <div className={cn('wrapper', [styles.expenseWrapper])}>
        <h3 className={styles.expenseTitle}>{t('expense.title')}</h3>
        <p className={styles.expenseCaption}>{t('expense.caption')}</p>

      </div>
    </section>
  );
};

export default Expense;
