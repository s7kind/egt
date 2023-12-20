import { useTranslation } from 'next-i18next';
import styles from './Footer.module.scss';

const Footer = () => {
  const { t } = useTranslation('footer');
  return <div className={styles.footer}>Footer</div>;
};
export default Footer;
