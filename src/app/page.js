import { getStoryblokApi } from "@/app/lib/storyblok";
import StoryblokStory from "@storyblok/react/story";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  );
}

async function fetchData() {
  const storyblokApi = getStoryblokApi();
  // We add 'cv' to break the cache so you see updates instantly
  return storyblokApi.get(`cdn/stories/home`, { 
    version: "draft",
    cv: Date.now() 
  });
}