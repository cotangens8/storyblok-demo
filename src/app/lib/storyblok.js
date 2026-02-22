import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Page from "@/components/Page";
import Hero from "@/components/Hero";

export const getStoryblokApi = storyblokInit({
  accessToken: "WjQ4FrPTpNcVxJo4iM7rUgtt",
  use: [apiPlugin],
  components: {
    page: Page,
    hero: Hero,
    // Add other blocks here
  },
});