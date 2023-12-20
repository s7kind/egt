import { useTranslation } from 'next-i18next';
import styles from './Header.module.scss';

const Header = () => {
  const { t } = useTranslation('header');
  return <div className={styles.header}>Header</div>;
};

export default Header;
