import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import page from "../components/page"; 
import hero from "../components/hero";
import statbar from "../components/statbar";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    page: page,
    hero: hero,
    stat_bar: statbar,
  },
});