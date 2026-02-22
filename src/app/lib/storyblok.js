import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Page from "../components/Page";
import Hero from "../components/Hero";
import StatBar from "../components/StatBar";

export const getStoryblokApi = storyblokInit({
  accessToken: "WjQ4FrPTpNcVxJo4iM7rUgtt",
  use: [apiPlugin],
  components: {
    page: Page,
    hero: Hero,
    stat_bar: StatBar,
  },
});