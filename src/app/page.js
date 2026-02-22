import { getStoryblokApi } from "./lib/storyblok"; // Look at the dot-slash
import StoryblokStory from "@storyblok/react/story";

export const revalidate = 0;

export default async function Home() {
  try {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get(`cdn/stories/home`, { 
      version: "draft",
      cv: Date.now() 
    });

    return <StoryblokStory story={data.story} />;
  } catch (error) {
    console.error(error);
    return (
      <div className="p-20 font-mono text-[10px] uppercase">
        Connection_Error // {error.message}
      </div>
    );
  }
}