import type { Component } from 'solid-js';
import { createSignal, For } from 'solid-js';
import { content } from '../../content';

import './style.scss';

const text = content.howWeWork;

const HowWeWork: Component = () => {
  const [activeItem, setActiveItem] = createSignal<number>(0);
  return (
    <>
      <section class="widget-how-we-work">
        <div class="container">
          <h2 class="h2 section-title">{text.title}</h2>
          <div class="how-we-work__content">
            <div class="how-we-work__tabs">
              <For each={text.content}>
                {(item, index) => (
                  <div
                    classList={{ 'how-we-work__tab': true, 'title-32': true, active: activeItem() === index() }}
                    onClick={() => setActiveItem(index())}
                  >
                    {item.title}
                  </div>
                )}
              </For>
            </div>
            <div>
              <div class="how-we-work__description">{text.content[activeItem()]?.description}</div>
            </div>
          </div>
        </div>
        <img src="about/how-we-work-bg.webp" alt={text.title} class="how-we-work-bg" />
      </section>
    </>
  );
};

export default HowWeWork;
