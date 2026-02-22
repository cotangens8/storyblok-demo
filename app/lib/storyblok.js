import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Page from "../../components/page";
import Hero from "../../components/hero";
import StatBar from "../../components/statBar";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    hero: Hero,
    stat_bar: StatBar,
  },
});