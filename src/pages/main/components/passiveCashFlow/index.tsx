import type { Component } from 'solid-js';
import { For } from 'solid-js';
import { A } from '@solidjs/router';
import { routesPath } from '@routesPath';
import { content } from '../../content';

import cashFlowIconUrl0 from '@icon/cash-flow/icon0.svg?url';
import cashFlowIconUrl1 from '@icon/cash-flow/icon1.svg?url';
import cashFlowIconUrl2 from '@icon/cash-flow/icon2.svg?url';
import portfolioBgUrl from '@img/images.webp?url';

import './style.scss';

function getIcon(index: number) {
  switch (index) {
    case 0:
      return cashFlowIconUrl0;
    case 1:
      return cashFlowIconUrl1;
    case 2:
      return cashFlowIconUrl2;
    default:
      return '';
  }
}

const text = content.passiveCashFlow;

const PassiveCashFlow: Component = () => {
  return (
    <>
      <section class="widget-passive-cash-flow">
        <div class="container">
          <h2 class="h2 section-title ">{text.title}</h2>

          <div class="row">
            <div class="col-md-7">
              <div>
                <For each={text.content}>
                  {({ title, description }, index) => (
                    <div class="cash-flow-item">
                      <div class="cash-flow-item__icon">
                        <img src={getIcon(index())} alt={title} />
                      </div>
                      <div class="cash-flow-item__content">
                        <h3 class="h3">{title}</h3>
                        <p class="cash-flow-item__text">{description}</p>
                      </div>
                    </div>
                  )}
                </For>
              </div>
            </div>
            <div class="col-md-5">
              <img src={portfolioBgUrl} alt="" class="img-fluid cash-flow__img" />
            </div>
            <div class="col-md-12">
              <div class="button-wrapper">
                <A class="button button--transparent-blue" href={routesPath.portfolio.path}>
                  {text.action}
                </A>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PassiveCashFlow;
