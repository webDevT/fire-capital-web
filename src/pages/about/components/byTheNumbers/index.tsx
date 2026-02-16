import type { Component } from 'solid-js';
import { For } from 'solid-js';
import { content } from '../../content';

import './style.scss';

const text = content.byTheNumbers;

const ByTheNumbers: Component = () => {
  return (
    <>
      <section class="widget-by-the-numbers">
        <div class="container">
          <div class="row">
            <For each={text.content}>
              {(item) => (
                <div class="col-md-4">
                  <div class="by-the-numbers__item">
                    <div class="by-the-numbers__item-value">{item.value}</div>
                    <div class="by-the-numbers__item-title">{item.title}</div>
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

export default ByTheNumbers;
