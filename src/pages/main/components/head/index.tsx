import type { Component } from 'solid-js';
import { A } from '@solidjs/router';

import { routesPath } from '@routesPath';
import { content } from '../../content';

import mainGraphImgUrl from '@img/graphic.svg?url';

import './style.scss';

const text = content.header;

const Head: Component = () => {
  return (
    <>
      <section class="main-page-head">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h2 class="widget-title">
                Achieve <span>F</span>inancial <span>I</span>ndependence Through <span>R</span>eal <span>E</span>state
              </h2>
              <A class="button" href={routesPath.contact.path}>
                {text.action}
              </A>
            </div>

            <div class="col-md-6">
              <img src={mainGraphImgUrl} alt="" class="gaph-image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
