import type { Component } from 'solid-js';
import { createMemo, createSignal, Show } from 'solid-js';
import { A, useLocation } from '@solidjs/router';
import { routesPath } from '@routesPath';
import { config } from '@config';
import { content } from '../content';

import logoUrl from '@svg/logo.svg?url';
import whiteLogoUrl from '@svg/logo_white.svg?url';

import './style.scss';

const text = content.header;

const pagesWithWhiteHeader = [routesPath.about.path, routesPath.insights.path, routesPath.contact.path];
const isWhiteScheme = (location: string = '/'): boolean =>
  pagesWithWhiteHeader.some((path) => path.toLowerCase() === location.toLowerCase());

const Header: Component = () => {
  const location = useLocation();
  const [isWhiteColorScheme, setIsWhiteColorScheme] = createSignal<boolean>(isWhiteScheme(location.pathname));
  const [isMobileMenuActive, setIsMobileMenuActive] = createSignal<boolean>(false);

  createMemo(() => setIsWhiteColorScheme(isWhiteScheme(location.pathname)));

  return (
    <>
      <header classList={{ header: true, white_scheme: isWhiteColorScheme() }}>
        <div class="container">
          <div class="header__left" classList={{ isActive: isMobileMenuActive() }}>
            <A href={routesPath.main.path} class="header__logo">
              <img src={isWhiteColorScheme() && !isMobileMenuActive() ? logoUrl : whiteLogoUrl} alt="logo" />
            </A>

            <nav class="menu" onClick={() => setIsMobileMenuActive(false)}>
              <Show when={config.about.pageIsActive} keyed>
                <A href={routesPath.about.path} activeClass="active">
                  {routesPath.about.name}
                </A>
              </Show>
              <Show when={config.portfolio.pageIsActive} keyed>
                <A href={routesPath.portfolio.path} activeClass="active">
                  {routesPath.portfolio.name}
                </A>
              </Show>
              <Show when={config.insights.pageIsActive} keyed>
                <A href={routesPath.insights.path} activeClass="active">
                  {routesPath.insights.name}
                </A>
              </Show>
              <Show when={config.contact.pageIsActive} keyed>
                <A href={routesPath.contact.path} activeClass="active">
                  {routesPath.contact.name}
                </A>
              </Show>
            </nav>
            <div class="menu__btn" onClick={() => setTimeout(() => setIsMobileMenuActive(!isMobileMenuActive()), 100)}>
              <div class="menu__row"></div>
              <div class="menu__row"></div>
              <div class="menu__row"></div>
            </div>
          </div>

          <div class="header__right">
            <A class="lets-talk" href={routesPath.contact.path}>
              {text.letsTalk}
            </A>
            <Show when={config.investorPortal.moduleIsActive} keyed>
              <a href="#">{text.investorPortal}</a>
            </Show>
            <Show when={config.investWithUs.moduleIsActive} keyed>
              <A class="button button--transparent" href={routesPath.contact.path}>
                {text.investWithUs}
              </A>
            </Show>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
