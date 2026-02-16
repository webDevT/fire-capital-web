import type { Component } from 'solid-js';
import { content } from '../../content';
import ContactForm from '../contactForm';

import contactImgUrl from '@img/contact.webp?url';

import './style.scss';

const text = content.header;

const Head: Component = () => {
  return (
    <>
      <section class="contact-page-head">
        <div class="container">
          <h2 class="h2 section-title">{text.title}</h2>
          <p class="text-24 contact-sub-title">{text.description}</p>
          <ContactForm />
        </div>

        <div class="contact-page-head__img">
          <img src={contactImgUrl} alt="" />
        </div>
      </section>
    </>
  );
};

export default Head;
