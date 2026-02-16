import type { Accessor, Component } from 'solid-js';
import { content } from '../../content';

import { createSignal, For, Match, Show, Switch } from 'solid-js';
import type { YoutubeVideoType } from '../service/youtube.service';
import { WEBINAR_PLAYLIST_ID } from '@env';

import playBtnUrl from '@svg/play.svg?url';
import { A } from '@solidjs/router';
import { routesPath } from '@routesPath';

const text = content.insights;

type WebinarsProps = {
  videos: Accessor<Array<YoutubeVideoType>>;
  loading: Accessor<boolean>;
  moreItemsAvailable: Accessor<boolean>;
  isMainPage: boolean;
};

const Webinars: Component<WebinarsProps> = (props) => {
  const [playVideoId, setPlayVideoId] = createSignal<string | null>(null);

  const openMoreItems = () => {
    window.open(`https://www.youtube.com/playlist?list=${WEBINAR_PLAYLIST_ID}`, '_blank');
  };

  return (
    <>
      <div class="widget_webinars">
        <div class="row">
          <For each={props.videos()} fallback={<p>loading...</p>}>
            {(video) => (
              <div class="col-md-6">
                <div class="insight-item">
                  <div class="video-img-wrapper">
                    <img class="video-img" src={video.thumbnail} alt={video.title} />
                    <img class="play-btn" src={playBtnUrl} alt="play-btn" onClick={() => setPlayVideoId(video.id)} />
                  </div>

                  <div class="insight-item__content">
                    <div class="h4">{video.title}</div>
                    <div class="video-info">
                      <span>{video.publishedAt}</span>&nbsp;-&nbsp;<span>{video.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>

        <Show when={props.moreItemsAvailable()} keyed>
          <Switch
            fallback={
              <div class="button-wrapper" onClick={openMoreItems}>
                <div class="button button--transparent-blue">{text.webinars.action}</div>
              </div>
            }
          >
            <Match when={props.isMainPage} keyed>
              <A href={routesPath.insights.path} class="button-wrapper">
                <div class="button button--transparent-blue">{text.webinars.action}</div>
              </A>
            </Match>
          </Switch>
        </Show>
        <Show when={!!playVideoId()} keyed>
          <div class="video-container">
            <div class="overlay" onClick={() => setPlayVideoId(null)}></div>
            <div class="video">
              <iframe
                src={`https://www.youtube.com/embed/${playVideoId()}?autoplay=1`}
                allow="autoplay; encrypted-media"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </Show>
      </div>
    </>
  );
};

export default Webinars;
