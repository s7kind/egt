import { Nunito_Sans, Roboto } from 'next/font/google';
import { useTranslation } from 'next-i18next';
import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useOutsideClick } from '@hooks';

import styles from './Header.module.scss';
import cn from 'classnames';

const nunito = Nunito_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const Header = () => {
  const { t } = useTranslation('header');

  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useOutsideClick(dropDownRef, () => {
    setIsOpen(false);
  });

  return (
    <header className={cn(nunito.className, styles.header)}>
      <div className={cn('wrapper', [styles.headerWrapper])}>
        <div className={styles.headerContainer}>
          <div className={styles.headerSide}>
            <Link href="/" className={styles.headerLogo}>
              <Image src="/images/logo.svg" alt="logo" width={108} height={65} />
            </Link>
            <nav className={styles.headerNav}>
              <Link href="/shop" className={styles.isActive}>
                {t('nav.shop')}
              </Link>
              <Link href="/smart-glass">{t('nav.smartGlass')}</Link>
              <Link href="/heat-glass">{t('nav.heatGlass')}</Link>
              <Link href="/print-glass">{t('nav.printGlass')}</Link>
              <Link href="/laser-glass">{t('nav.laserGlass')}</Link>
            </nav>
          </div>
          <div className={styles.headerSide}>
            <div className={styles.socials}>
              <a href="https://telegram.com/">
                <Image src="/images/telegram.svg" alt="telegram" width={32} height={32} />
              </a>
              <a href="https://instagram.com/">
                <Image src="/images/instagram.svg" alt="instagram" width={32} height={32} />
              </a>
              <a href="https://facebook.com/">
                <Image src="/images/facebook.svg" alt="facebook" width={32} height={32} />
              </a>
              <a href="tel:063 454 44 55">
                <Image src="/images/call.svg" alt="call" width={32} height={32} />
              </a>
            </div>
            <div className={styles.burgerMenu} ref={dropDownRef}>
              <div className={styles.burger} onClick={toggleMenu}>
                <span>{t('mainMenu.menu')}</span>
                <div className={cn(styles.burgerIcon, { [styles.isOpen]: isOpen })}>
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <div className={cn(roboto.className, styles.burgerNav, { [styles.isOpen]: isOpen })}>
                <div className={styles.burgerNavLinks}>
                  <div className={styles.burgerNavGroup}>
                    <Link href="/projects">{t('mainMenu.projects')}</Link>
                    <Link href="/projects">{t('mainMenu.aboutUs')}</Link>
                    <Link href="/projects">{t('mainMenu.blog')}</Link>
                    <Link href="/projects">{t('mainMenu.contacts')}</Link>
                  </div>
                  <div className={styles.burgerNavGroup}>
                    <Link href="/projects">{t('mainMenu.forPartners')}</Link>
                    <Link href="/projects">{t('mainMenu.production')}</Link>
                  </div>
                  <div className={styles.burgerNavGroup}>
                    <p className={styles.burgerNavTitle}>Контакт</p>
                    <a href="tel:063 454 44 55">063 454 44 55</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
