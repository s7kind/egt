import { useTranslation } from 'next-i18next';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { Buttons, Modal } from '@UI';

import * as Yup from 'yup';

import cn from 'classnames';
import styles from './Expense.module.scss';

const Expense = () => {
  const { t } = useTranslation(`common`);
  const [modalVisible, setModalVisible] = useState({ status: 'success', visible: false });
  const [isLoad, setIsLoad] = useState(false);
  const restUrl = '';

  const phoneRegExp =
    /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;

  const initialValues = {
    fullName: '',
    phone: '',
    type: '',
    callType: '',
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required(t('form.required')),
    phone: Yup.string().required(t('form.required')).matches(phoneRegExp, t('form.phoneValid')),
    type: Yup.string().required(t('form.required')),
    callType: Yup.string().required(t('form.required')),
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
    <>
      <section className={styles.expense}>
        <div className={cn('wrapper', [styles.expenseWrapper])}>
          <h3 className={styles.expenseTitle}>{t('expense.title')}</h3>
          <p className={styles.expenseCaption}>{t('expense.caption')}</p>

          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ errors, touched }) => {
              const isReady = Object.keys(errors).length === 0;

              return (
                <Form className={styles.form}>
                  <div className={styles.formGroup}>
                    <div className={styles.formElem}>
                      <Field
                        type="text"
                        name="fullName"
                        className={cn(
                          styles.formElemInput,
                          errors.fullName && touched.fullName ? styles.formElemInputError : '',
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
                          errors.type && touched.type ? styles.formElemSelectError : '',
                        )}
                        // value={''}
                      >
                        <option value={''} disabled>
                          {t('form.type')}
                        </option>
                        <option value="Smart Glass">Smart Glass</option>
                        <option value="Heat Glass">Heat Glass</option>
                        <option value="Print Glass">Print Glass</option>
                        <option value="Laser Glass">Laser Glass</option>
                      </Field>
                    </div>
                  </div>
                  <div className={styles.formGroupCallType}>
                    <div className={styles.formRadioGroup} role="group" aria-labelledby="callType">
                      <label className={styles.formRadio}>
                        <Field
                          className={styles.formRadioField}
                          type="radio"
                          name="callType"
                          value={t('form.call')}
                        />
                        <p className={styles.formRadioFieldText}>{t('form.call')}</p>
                      </label>
                      <label className={styles.formRadio}>
                        <Field
                          className={styles.formRadioField}
                          type="radio"
                          name="callType"
                          value={t('form.telegram')}
                        />
                        <p className={styles.formRadioFieldText}>{t('form.telegram')}</p>
                      </label>
                      <label className={styles.formRadio}>
                        <Field
                          className={styles.formRadioField}
                          type="radio"
                          name="callType"
                          value={t('form.viber')}
                        />
                        <p className={styles.formRadioFieldText}>{t('form.viber')}</p>
                      </label>
                      {errors.callType && touched.callType ? (
                        <p className={styles.formRadioError}>{t('form.callTypeError')}</p>
                      ) : null}
                    </div>

                    <Buttons
                      className={styles.formBtn}
                      type="submit"
                      load={isLoad}
                      disabled={!isReady}
                    >
                      {t('form.submit')}
                    </Buttons>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </section>
      <Modal
        onHide={() => setModalVisible({ ...modalVisible, visible: false })}
        visible={modalVisible['visible']}
        status={modalVisible['status']}
      />
    </>
  );
};

export default Expense;
