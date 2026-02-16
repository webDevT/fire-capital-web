import type { Component } from 'solid-js';
import { A } from '@solidjs/router';
import { createSignal, For, Show } from 'solid-js';
import { config } from '@config';
import { routesPath } from '@routesPath';
import { content } from '../content';
import { socialMedia } from '@const/socialMedia';

import { Validation } from '@utils';
import { API_URL } from '@env';

import logoUrl from '@svg/logo.svg?url';
import FacebookIcon from '@icon/social/facebook.svg?component-solid';
import TwitterIcon from '@icon/social/twitter.svg?component-solid';
import LinkedinIcon from '@icon/social/linkedin.svg?component-solid';
import YoutubeIcon from '@icon/social/youtube.svg?component-solid';
import InstagramIcon from '@icon/social/instagram.svg?component-solid';
import TikTokIcon from '@icon/social/tikTok.svg?component-solid';

import './style.scss';

const ErrorMessage = Validation.ErrorMessage;
const isNotEmpty = Validation.isNotEmpty;
const isEmail = Validation.isEmail;

const text = content.footer;

function getSocialMediaIcon(icon: string) {
  switch (icon) {
    case 'facebook':
      return <FacebookIcon />;
    case 'twitter':
      return <TwitterIcon />;
    case 'linkedin':
      return <LinkedinIcon />;
    case 'youtube':
      return <YoutubeIcon />;
    case 'instagram':
      return <InstagramIcon />;
    case 'tikTok':
      return <TikTokIcon />;
    default:
      return '';
  }
}

const Footer: Component = () => {
  const [isSubmitSuccess, setIsSubmitSuccess] = createSignal<boolean>(false);
  const [isLoading, setIsLoading] = createSignal<boolean>(false);

  const [submitError, setSubmitError] = createSignal<string>(null);
  const { validate, formSubmit, errors } = Validation.useForm({
    errorClass: 'error-input',
  });
  const submit = async (form) => {
    console.log({ form });
    try {
      const response = await fetch(`${API_URL}/web-api/subscribe`, {
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
    <>
      <footer class="footer">
        <div class="container">
          <div>
            <A href={routesPath.main.path} class="footer__logo">
              <img src={logoUrl} alt="fire capital logo" />
            </A>

            <div class="footer__content">
              <div class="footer__col">
                <div class="footer__col-header">
                  <h3 class="h3">{text.subscribe.title}</h3>
                  <p class="footer__description">{text.subscribe.description}</p>
                </div>

                <Show when={!isSubmitSuccess()} keyed>
                  <form class="footer__form" use:formSubmit={submit}>
                    <input
                      type="text"
                      classList={{
                        footer__input: true,
                        'error-input': !!errors.email,
                      }}
                      name="email"
                      use:validate={[isNotEmpty, isEmail]}
                    />
                    <button type="submit" class="submit-button" disabled={!!errors.email || isLoading()}>
                      {text.subscribe.action}
                    </button>
                  </form>
                </Show>
              </div>
              <div class="footer__col">
                <nav class="footer__menu">
                  <Show when={config.about.pageIsActive} keyed>
                    <A class="footer__menu-link" href={routesPath.about.path}>
                      {routesPath.about.name}
                    </A>
                  </Show>
                  <Show when={config.portfolio.pageIsActive} keyed>
                    <A class="footer__menu-link" href={routesPath.portfolio.path}>
                      {routesPath.portfolio.name}
                    </A>
                  </Show>
                  <Show when={config.insights.pageIsActive} keyed>
                    <A class="footer__menu-link" href={routesPath.insights.path}>
                      {routesPath.insights.name}
                    </A>
                  </Show>
                  <Show when={config.contact.pageIsActive} keyed>
                    <A class="footer__menu-link" href={routesPath.contact.path}>
                      {routesPath.contact.name}
                    </A>
                  </Show>
                </nav>

                <ul class="footer__social">
                  <For each={Object.keys(socialMedia)}>
                    {(key) => (
                      <li>
                        <a
                          href={socialMedia[key]}
                          class="footer__social-link"
                          aria-label={`Read more about us in ${key}`}
                          target="_blank"
                        >
                          {getSocialMediaIcon(key)}
                        </a>
                      </li>
                    )}
                  </For>
                </ul>
              </div>
            </div>
          </div>
          <div></div>

          <div class="footer__bottom">
            <div>
              <Show when={config.privacy.moduleIsActive} keyed>
                <A class="footer__bottom-link" href={routesPath.privacy.path}>
                  {routesPath.privacy.name}
                </A>
              </Show>
              <Show when={config.terms.moduleIsActive} keyed>
                <A class="footer__bottom-link" href={routesPath.terms.path}>
                  {routesPath.terms.name}
                </A>
              </Show>
            </div>
            <div>{text.tradeMark}</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
