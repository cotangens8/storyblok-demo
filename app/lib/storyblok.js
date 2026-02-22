// app/lib/storyblok.js
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Page from "../../components/page";
import Hero from "../../components/Hero";
import StatBar from "../../components/StatBar";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    hero: Hero,

    // Add this (matches Storyblok "Data Strip" technical name)
    data_strip: StatBar,

    // Keep this for backward compatibility
    stat_bar: StatBar,
  },
});