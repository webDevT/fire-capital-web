import type { Component } from 'solid-js';
import { content } from '../content';

import emailUrl from '@svg/em.svg?url';
import locationUrl from '@svg/loc.svg?url';

import './style.scss';

const text = content.getStarted;

const GetStarted: Component = () => {
  return (
    <>
      <section class="widget-get-started">
        <div class="container">
          <div class="get-started-content">
            <div class="get-started__tect-wrapper">
              <h2 class="text-32">{text.title}</h2>
              <div>{text.description}</div>
            </div>

            <div class="get-started__contact">
              <img src="contact/contact-image.webp" alt="" />
              <address class="get-started__contact-content">
                <a href={`mail:${text.email}`}>
                  <img src={emailUrl} alt="" />
                  {text.email}
                </a>
                <div>
                  <img src={locationUrl} alt="" />
                  {text.address}
                </div>
              </address>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStarted;
