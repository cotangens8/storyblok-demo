import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
// We use the absolute '@' alias to ensure the builder never gets lost
import page from "@/components/page"; 
import Hero from "@/components/Hero";
import StatBar from "@/components/StatBar";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    page: page,
    hero: Hero,
    stat_bar: StatBar,
  },
});