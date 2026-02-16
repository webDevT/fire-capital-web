import { Validation } from '@utils';
import { Component, createSignal } from 'solid-js';

import investorCategoryUrl from '@svg/material-symbols_info.svg?url';

import './style.scss';
import { API_URL } from '@env';

const ErrorMessage = Validation.ErrorMessage;
const isNotEmpty = Validation.isNotEmpty;
const isEmail = Validation.isEmail;

const ContactForm: Component = () => {
  const { validate, formSubmit, errors } = Validation.useForm({
    errorClass: 'error-input',
  });
  const [isLoading, setIsLoading] = createSignal<boolean>(false);

  const [isSubmitSuccess, setIsSubmitSuccess] = createSignal<boolean>(false);

  const [submitError, setSubmitError] = createSignal<string>(null);

  const submit = async (form) => {
    try {
      const response = await fetch(`${API_URL}/web-api/contact-us`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setIsSubmitSuccess(true);
      } else {
        // Handle errors returned by the API.
        const errorData = await response.json();
        setSubmitError(errorData);
      }
    } catch (error) {
      setSubmitError('Something went wrong, please try again later');
    }
    // eslint-disable-next-line no-magic-numbers
    setTimeout(() => setSubmitError(null), 3000);
  };

  return (
    <form class="contact-form" use:formSubmit={submit}>
      <div class="contact-form__row">
        <div class="field-block">
          <label htmlFor="" class="form-label">
            First Name*
          </label>
          <input class="input" name="firstName" type="text" placeholder="" required use:validate={[isNotEmpty]} />
          {errors.firstName && <ErrorMessage error={errors.firstName} />}
        </div>

        <div class="field-block">
          <label htmlFor="" class="form-label">
            Email*
          </label>
          <input class="input" name="email" type="email" placeholder="" required use:validate={[isNotEmpty, isEmail]} />
          {errors.email && <ErrorMessage error={errors.email} />}
        </div>
      </div>

      <div class="contact-form__row">
        <div class="field-block">
          <label htmlFor="" class="form-label">
            Last Name*
          </label>
          <input class="input" name="lastName" type="text" placeholder="" required use:validate={[isNotEmpty]} />
          {errors.lastName && <ErrorMessage error={errors.lastName} />}
        </div>

        <div class="field-block">
          <label htmlFor="" class="form-label">
            Phone*
          </label>
          <input class="input" name="phone" type="text" placeholder="" required use:validate={[isNotEmpty]} />
          {errors.phone && <ErrorMessage error={errors.phone} />}
        </div>
      </div>

      <div class="radio-wrapper">
        <div>
          <label htmlFor="" class="form-label">
            Investor Category*
          </label>
          <a
            href="https://www.sec.gov/education/capitalraising/building-blocks/accredited-investor"
            target="_blank"
            rel="noreferrer"
          >
            <img src={investorCategoryUrl} alt="" />
          </a>
        </div>

        <div class="radio-col">
          <div class="radio-item">
            <input type="radio" id="1" name="1" />
            <label htmlFor="1">Accredited</label>
          </div>

          <div class="radio-item">
            <input type="radio" id="2" name="1" />
            <label htmlFor="2">Non-Accredited</label>
          </div>
        </div>
      </div>

      <div class="contact-form__row contact-form__row--textarea">
        <div class="field-block">
          <label htmlFor="" class="form-label">
            Message
          </label>
          <textarea class="textarea" name="message" type="text" placeholder="" use:validate={[]} />
        </div>
      </div>

      <div class="verify-row">
        <label htmlFor="" class="form-label">
          Please verify your request*
        </label>
        <div class="verify-row__content">
          <div class="capcha"></div>
          <div class="verify-row__text">
            By submitting my information, I confirm that I have read and understood the FIRE Capital{' '}
            <a href="">Privacy Policy</a>
          </div>
        </div>
      </div>

      <div class="form-footer">
        <button type="submit" class="submit-btn button">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
