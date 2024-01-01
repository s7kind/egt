import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Formik, Form, Field } from 'formik';
import { Buttons } from '@UI';

import * as Yup from 'yup';

import cn from 'classnames';
import styles from './Footer.module.scss';

const Footer = () => {
  const { t } = useTranslation('footer');
  const { t: tCommon } = useTranslation(`common`);
  const [modalVisible, setModalVisible] = useState({ status: 'success', visible: false });
  const [isLoad, setIsLoad] = useState(false);
  const restUrl = '';

  const phoneRegExp =
    /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;

  const initialValues = {
    phone: '',
  };

  const validationSchema = Yup.object().shape({
    phone: Yup.string()
      .required(tCommon('form.required'))
      .matches(phoneRegExp, tCommon('form.phoneValid')),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm, setErrors }) => {
    try {
      setIsLoad(true);

      const formData = {
        ...values,
        form_id: 21,
      };

      const response = await fetch(restUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setModalVisible({ status: 'error', visible: true });
        throw new Error('Server error');
      }

      setModalVisible({ status: 'success', visible: true });
      resetForm();
    } catch (error) {
      console.error('Submission error', error);
      setModalVisible({ status: 'error', visible: true });
    }

    setIsLoad(false);
    setSubmitting(false);
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={cn('wrapper', [styles.footerTopWrapper])}>
          <Image
            className={styles.footerLogo}
            src="/images/logo-white.svg"
            alt="logo"
            width={108}
            height={65}
          />
          <div className={styles.footerNav}>
            <Link href="/shop">{t('nav.smartGlass')}</Link>
            <Link href="/shop">{t('nav.heatGlass')}</Link>
            <Link href="/shop">{t('nav.printGlass')}</Link>
            <Link href="/shop">{t('nav.laserGlass')}</Link>
            <Link href="/shop">{t('nav.projects')}</Link>
            <Link href="/shop">{t('nav.production')}</Link>
            <Link href="/shop">{t('nav.aboutUs')}</Link>
            <Link href="/shop">{t('nav.blog')}</Link>
            <Link href="/shop">{t('nav.contacts')}</Link>
          </div>
          <button className={styles.footerBtn}>{t('joinUs')}</button>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={cn('wrapper', [styles.footerBottomWrapper])}>
          <div className={styles.footerSocial}>
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
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ errors, touched }) => {
              const isReady = Object.keys(errors).length === 0;

              return (
                <Form className={styles.form}>
                  <div className={styles.formElem}>
                    <Field
                      type="text"
                      name="phone"
                      className={cn(
                        styles.formElemInput,
                        errors.phone && touched.phone ? styles.formElemInputError : '',
                      )}
                      placeholder={t('phoneNumber')}
                    />
                  </div>
                  <Buttons
                    className={styles.formBtn}
                    type="submit"
                    load={isLoad}
                    disabled={!isReady}
                  >
                    {t('callMe')}
                  </Buttons>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default Footer;
