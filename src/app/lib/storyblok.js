import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import page from "../components/page"; // Matches lowercase file
import Hero from "../components/Hero";
import StatBar from "../components/StatBar";

export const getStoryblokApi = storyblokInit({
  accessToken: "WjQ4FrPTpNcVxJo4iM7rUgtt",
  use: [apiPlugin],
  components: {
    page: page, // This maps the Storyblok slug "page" to our component
    hero: Hero,
    stat_bar: StatBar,
  },
});