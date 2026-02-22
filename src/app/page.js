import { getStoryblokApi } from "./lib/storyblok";
import StoryblokStory from "@storyblok/react/story";

// This ensures the page is always fresh and doesn't show old cached data
export const revalidate = 0;

export default async function Home() {
  const { data } = await fetchData();

  // Safety check: if Storyblok is down or the slug is wrong, this prevents a crash
  if (!data || !data.story) {
    return (
      <div className="flex min-h-screen items-center justify-center font-mono text-xs uppercase tracking-widest">
        Connection_Error // Check_Storyblok_Slug
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      {/* The StoryblokStory component handles the live visual editing */}
      <StoryblokStory story={data.story} />
    </div>
  );
}

async function fetchData() {
  const storyblokApi = getStoryblokApi();

  // We fetch 'home' because that is the slug in your Storyblok space
  return storyblokApi.get(`cdn/stories/home`, { 
    version: "draft",
    cv: Date.now() // Cache-breaker to see updates instantly after pushing "Save"
  });
}