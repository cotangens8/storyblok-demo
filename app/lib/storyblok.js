import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import page from "../components/page"; // One level up to the root components folder
import Hero from "../components/Hero";
import StatBar from "../components/StatBar";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    page: page,
    hero: Hero,
    stat_bar: StatBar,
  },
});