import { getStoryblokApi } from "./lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

export const revalidate = 0;

export default async function Home() {
  const storyblokApi = getStoryblokApi();
  
  // This fetches ALL stories and just takes the first one. 
  // It's the "lazy" way to guarantee we find your content.
  const { data } = await storyblokApi.get(`cdn/stories/`, { 
    version: "draft",
    cv: Date.now() 
  });

  const story = data.stories?.[0];

  if (!story) {
    return <div className="p-20 font-mono text-[10px] uppercase">Status // Content_Not_Found</div>;
  }

  return (
    <main className="min-h-screen bg-white">
      <StoryblokServerComponent story={story} />
    </main>
  );
}