import type { Component } from 'solid-js';
import { createSignal, Match, onMount, Show, Switch } from 'solid-js';
import Webinars from './components/webinars';
import Podcasts from './components/podcasts';
import Blogs from './components/blogs';
import { content } from '../content';
import { config } from '@config';

import './style.scss';
import fetchYoutubeVideos, { YoutubeVideoType } from './service/youtube.service';
import { PODCAST_PLAYLIST_ID, VIDEO_COUNT, WEBINAR_PLAYLIST_ID } from '@env';

const text = content.insights;

type InsightsProps = {
  isMainPage?: boolean;
};

const Insights: Component<InsightsProps> = (props) => {
  const [activeTab, setActiveTab] = createSignal(text.webinars.type);

  const [webinars, setWebinars] = createSignal<Array<YoutubeVideoType>>([]);
  const [webinarsLoading, setWebinarsLoading] = createSignal<boolean>(true);
  const [moreWebinarsAvailable, setMoreWebinarsAvailable] = createSignal<boolean>(false);

  const [podcasts, setPodcasts] = createSignal<Array<YoutubeVideoType>>([]);
  const [podcastsLoading, setPodcastsLoading] = createSignal<boolean>(true);
  const [morePodcastsAvailable, setMorePodcastsAvailable] = createSignal<boolean>(false);

  const [blogs, setBlogs] = createSignal<Array<YoutubeVideoType>>([]);
  const [blogsLoading, setBlogsLoading] = createSignal<boolean>(true);
  const [moreBlogsAvailable, setMoreBlogsAvailable] = createSignal<boolean>(false);

  const fetchWebinars = async (maxResults: number): Promise<void> => {
    if (!config.webinars.moduleIsActive) return;
    const webinars = await fetchYoutubeVideos(WEBINAR_PLAYLIST_ID, maxResults);
    setWebinars(webinars.items);
    setMoreWebinarsAvailable(webinars.totalResults > maxResults);
    setWebinarsLoading(false);
  };

  const fetchPodcasts = async (maxResults: number): Promise<void> => {
    if (!config.podcasts.moduleIsActive) return;
    const podcasts = await fetchYoutubeVideos(PODCAST_PLAYLIST_ID, maxResults);
    setPodcasts(podcasts.items);
    setMorePodcastsAvailable(podcasts.totalResults > maxResults);
    setPodcastsLoading(false);
  };

  const fetchBlogs = async (maxResults: number): Promise<void> => {
    if (!config.blogs.moduleIsActive) return;
    const blogs = await fetchYoutubeVideos(null, maxResults);
    setBlogs(blogs.items);
    setMoreBlogsAvailable(blogs.totalResults > maxResults);
    setBlogsLoading(false);
  };

  onMount(async () => {
    // eslint-disable-next-line no-magic-numbers
    const maxResults = props.isMainPage ? VIDEO_COUNT : 6;
    await Promise.all([fetchWebinars(maxResults), fetchBlogs(maxResults), fetchPodcasts(maxResults)]);
  });

  return (
    <>
      <section class="widget-insights">
        <div class="container">
          <h2 class="h2 section-title widget-title">{text.title}</h2>
          <div class="tabs">
            <Show when={config.webinars.moduleIsActive} keyed>
              <div
                classList={{ tab: true, active: activeTab() === text.webinars.type }}
                onClick={() => setActiveTab(text.webinars.type)}
              >
                {text.webinars.title}
              </div>
            </Show>
            <Show when={config.podcasts.moduleIsActive} keyed>
              <div
                classList={{ tab: true, active: activeTab() === text.podcasts.type }}
                onClick={() => setActiveTab(text.podcasts.type)}
              >
                {text.podcasts.title}
              </div>
            </Show>
            <Show when={config.blogs.moduleIsActive} keyed>
              <div
                classList={{ tab: true, active: activeTab() === text.blogs.type }}
                onClick={() => setActiveTab(text.blogs.type)}
              >
                {text.blogs.title}
              </div>
            </Show>
          </div>
          <div>
            <Switch>
              <Match when={activeTab() === text.webinars.type} keyed>
                <Webinars
                  videos={webinars}
                  loading={webinarsLoading}
                  moreItemsAvailable={moreWebinarsAvailable}
                  isMainPage={props?.isMainPage || false}
                />
              </Match>
              <Match when={activeTab() === text.podcasts.type} keyed>
                <Podcasts
                  videos={podcasts}
                  loading={podcastsLoading}
                  moreItemsAvailable={morePodcastsAvailable}
                  isMainPage={props?.isMainPage || false}
                />
              </Match>
              <Match when={activeTab() === text.blogs.type} keyed>
                <Blogs
                  videos={blogs}
                  loading={blogsLoading}
                  moreItemsAvailable={moreBlogsAvailable}
                  isMainPage={props?.isMainPage || false}
                />
              </Match>
            </Switch>
          </div>
        </div>
      </section>
    </>
  );
};

export default Insights;
