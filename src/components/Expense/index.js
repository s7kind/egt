import { useTranslation } from 'next-i18next';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

import styles from './Expense.module.scss';
import cn from 'classnames';

const Expense = () => {
  const { t } = useTranslation(`common`);
  const [modalVisible, setModalVisible] = useState({ status: 'success', visible: false });
  const [isLoad, setIsLoad] = useState(false);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const initialValues = {
    name: '',
    phone: '',
    type: '',
    callType: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t('form.required')),
    phone: Yup.string().required(t('form.required')).matches(phoneRegExp, t('form.phoneValid')),
    type: Yup.string().required(t('form.required')),
    callType: Yup.string().required(t('form.required')),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm, setErrors }) => {
    try {
      setIsLoad(true);

      const response = await fetch('/api/forecast', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Server error');
      }

      setModalVisible({ status: 'success', visible: true });
      resetForm();
    } catch (error) {
      console.error('Submission error', error);
      setIsLoad(false);
      setModalVisible({ status: 'error', visible: true });
      setErrors({ submit: 'Failed to submit' });
    }

    setIsLoad(false);
    setSubmitting(false);
  };

  return (
    <section className={styles.expense}>
      <div className={cn('wrapper', [styles.expenseWrapper])}>
        <h3 className={styles.expenseTitle}>{t('expense.title')}</h3>
        <p className={styles.expenseCaption}>{t('expense.caption')}</p>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting, errors, touched, values, setFieldValue }) => {
            return (
              <Form className={styles.form}>
                <div className={styles.formGroup}>
                  <div className={styles.formElem}>
                    <Field
                      type="text"
                      name="name"
                      className={cn(
                        styles.formElemInput,
                        errors.name && touched.name ? styles.formElemInputError : '',
                      )}
                      placeholder={t('form.name')}
                    />
                  </div>
                  <div className={styles.formElem}>
                    <Field
                      type="text"
                      name="phone"
                      className={cn(
                        styles.formElemInput,
                        errors.phone && touched.phone ? styles.formElemInputError : '',
                      )}
                      placeholder={t('form.phone')}
                    />
                  </div>
                  <div className={cn(styles.formElem, styles.formElemArrow)}>
                    <Field
                      as="select"
                      name="type"
                      className={cn(
                        styles.formElemSelect,
                        errors.type && touched.type ? styles.formElemInputError : '',
                      )}
                      placeholder={t('form.type')}
                    >
                      <option value="red">Red</option>
                      <option value="green">Green</option>
                      <option value="blue">Blue</option>
                    </Field>
                  </div>
                </div>
                <div className={styles.formGroupCallType}>
                  <div role="group" aria-labelledby="callType">
                    <label>
                      <Field type="radio" name="callType" value={t('form.call')} />
                      {t('form.call')}
                    </label>
                    <label>
                      <Field type="radio" name="callType" value={t('form.telegram')} />
                      {t('form.telegram')}
                    </label>
                    <label>
                      <Field type="radio" name="callType" value={t('form.viber')} />
                      {t('form.viber')}
                    </label>
                  </div>

                  <button type="submit">{t('form.submit')}</button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </section>
  );
};

export default Expense;
