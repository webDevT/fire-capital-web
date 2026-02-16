import type { Component } from 'solid-js';
import { A } from '@solidjs/router';
import { routesPath } from '@routesPath';
import { content } from '../content';

import './style.scss';

const text = content.connectWithUs;

const ConnectWithUs: Component = () => {
  return (
    <>
      <section class="widget-connect-with-us">
        <div class="container">
          <div class="widget-connect-with-us__wrapper">
            <h2 class="h2 section-title ">{text.title}</h2>
            <A class="button" href={routesPath.contact.path}>
              {text.action}
            </A>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConnectWithUs;
