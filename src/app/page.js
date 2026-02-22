import { getStoryblokApi } from "./lib/storyblok";
import StoryblokStory from "@storyblok/react/story";

export const revalidate = 0;

export default async function Home() {
  try {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get(`cdn/stories/home`, { 
      version: "draft",
      cv: Date.now() 
    });

    return (
      <main className="min-h-screen bg-white">
        <StoryblokStory story={data.story} />
      </main>
    );
  } catch (error) {
    console.error(error);
    return (
      <div className="flex min-h-screen items-center justify-center font-mono text-[10px] uppercase tracking-widest">
        Connection_Error // {error.message}
      </div>
    );
  }
}