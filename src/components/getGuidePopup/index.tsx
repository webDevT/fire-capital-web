import type { Component } from 'solid-js';
import { createSignal, Show, Switch, Match } from 'solid-js';

import { Validation } from '@utils';
import { API_URL } from '@env';

import closeIconUrl from '@svg/close.svg?url';

import './style.scss';

const ErrorMessage = Validation.ErrorMessage;
const isNotEmpty = Validation.isNotEmpty;
const isEmail = Validation.isEmail;

const key = 'fire_capital_guide_requested';

function getGuideRequestStatus(key: string): boolean | null {
  const value = localStorage.getItem(key);
  return value === null ? false : JSON.parse(value);
}

const getGuidePopup: Component = () => {
  const [isGetGuidePopupOpen, setIsGetGuidePopupOpen] = createSignal<boolean>(!getGuideRequestStatus(key));
  const closeGetGuidePopup = () => {
    setIsGetGuidePopupOpen(false);
  };

  const [isLoading, setIsLoading] = createSignal<boolean>(false);

  const [isSubmitSuccess, setIsSubmitSuccess] = createSignal<boolean>(false);

  const [submitError, setSubmitError] = createSignal<string>(null);
  const { validate, formSubmit, errors } = Validation.useForm({
    errorClass: 'error-input',
  });
  const submit = async (form) => {
    try {
      const response = await fetch(`${API_URL}/web-api/guide`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setIsSubmitSuccess(true);
        localStorage.setItem(key, JSON.stringify(true));
        // eslint-disable-next-line no-magic-numbers
        setTimeout(() => setIsGetGuidePopupOpen(false), 3000);
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
    <>
      <Show when={isGetGuidePopupOpen()} keyed>
        <div class="get-free">
          <img src={closeIconUrl} alt="close" class="get-free__close" onClick={closeGetGuidePopup} />
          <div class="get-free__wrapper">
            <div class="container">
              <Switch fallback={<span>Loading...</span>}>
                <Match when={!isSubmitSuccess()} keyed>
                  <div class="form-title-wrapper">
                    <div class="text-24">Get a free complete investment guide</div>
                    <form class="footer__form" use:formSubmit={submit}>
                      <input type="text" class="footer__input" name="email" use:validate={[isNotEmpty, isEmail]} />
                      <button type="submit" class="submit-button" disabled={isLoading()}>
                        Get
                      </button>
                      {(errors.email || submitError()) && <ErrorMessage error={submitError() || errors.email} />}
                    </form>
                  </div>
                  <div class="get-free__text">*Subscribe to the feed</div>
                </Match>
                <Match when={isSubmitSuccess()} keyed>
                  <div class="form-title-wrapper">
                    <div class="text-24">Successfully requested</div>
                  </div>
                </Match>
              </Switch>
            </div>
          </div>
        </div>
      </Show>
    </>
  );
};

export default getGuidePopup;
