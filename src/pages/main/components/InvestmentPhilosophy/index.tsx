import type { Component } from 'solid-js';
import { content } from '../../content';
import { For } from 'solid-js';

import invPhilosophyUrl0 from '@icon/investment-philosophy/investment-philosophy_0.svg?url';
import invPhilosophyUrl1 from '@icon/investment-philosophy/investment-philosophy_1.svg?url';
import invPhilosophyUrl2 from '@icon/investment-philosophy/investment-philosophy_2.svg?url';

import './style.scss';

const text = content.InvestmentPhilosophy;

function getIcon(index: number) {
  switch (index) {
    case 0:
      return invPhilosophyUrl0;
    case 1:
      return invPhilosophyUrl1;
    case 2:
      return invPhilosophyUrl2;
    default:
      return '';
  }
}

const InvestmentPhilosophy: Component = () => {
  return (
    <>
      <section class="widget-why-choose-us">
        <div class="container">
          <h2 class="h2 section-title ">{text.title}</h2>
          <div class="row">
            <For each={text.content}>
              {({ title, value }, index) => (
                <div class="col-md-4">
                  <div class="investment-philosophy__item">
                    <div class="investment-philosophy__img-wrapper">
                      <img src={getIcon(index())} alt="" />
                    </div>
                    <div>
                      <h3 class="h2">{value}</h3>
                      <div class="investment-philosophy__text">{title}</div>
                    </div>
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

export default InvestmentPhilosophy;
