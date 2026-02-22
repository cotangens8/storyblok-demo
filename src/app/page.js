import { getStoryblokApi } from "./lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

export const revalidate = 0;

export default async function Home() {
  const storyblokApi = getStoryblokApi();
  
  let story;
  try {
    // Attempt 1: Fetch the 'home' slug
    const res = await storyblokApi.get(`cdn/stories/home`, { 
      version: "draft",
      cv: Date.now() 
    });
    story = res.data.story;
  } catch (e) {
    // Attempt 2: Fallback to the root folder if 'home' isn't found
    const res = await storyblokApi.get(`cdn/stories`, { 
      version: "draft",
      is_startpage: 1 
    });
    story = res.data.stories[0];
  }

  if (!story) return <div className="p-20 font-mono text-xs uppercase">Error // Story_Not_Found</div>;

  return (
    <div className="min-h-screen bg-white">
      <StoryblokServerComponent story={story} />
    </div>
  );
}