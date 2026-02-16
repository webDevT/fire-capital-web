import type { Component } from 'solid-js';
import { content } from '../../content';
import { For } from 'solid-js';

import peopleImgUrl from '@icon/about_philosophy/people.svg?url';
import profitImgUrl from '@icon/about_philosophy/profits.svg?url';
import purposeImgUrl from '@icon/about_philosophy/purpose.svg?url';

import './style.scss';

const text = content.philosophy;

function getIconUrl(iconName: string) {
  switch (iconName) {
    case 'people':
      return peopleImgUrl;
    case 'profit':
      return profitImgUrl;
    case 'purpose':
      return purposeImgUrl;
    default:
      return '';
  }
}

const Philosophy: Component = () => {
  return (
    <>
      <section class="widget-philosophy">
        <div class="container">
          <h2 class="h2 section-title">{text.title}</h2>
          <div class="row">
            <For each={text.content}>
              {(item) => (
                <div class="col-md-4">
                  <div class="philosophy__item">
                    <div class="philosophy__icon-wrapper">
                      <img class="philosophy__icon" src={getIconUrl(item.icon)} alt={item.title} />
                    </div>

                    <h4 class="title-32">{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>
      </section>
    </>
  );
};

export default Philosophy;
