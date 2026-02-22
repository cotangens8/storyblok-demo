import { getStoryblokApi } from "@/lib/storyblok";
import StoryblokStory from "@storyblok/react/story";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div className="min-h-screen bg-white">
      <StoryblokStory story={data.story} />
    </div>
  );
}

async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, { 
    version: "draft",
    cv: Date.now() // Forces a fresh fetch so you see changes instantly
  });
}