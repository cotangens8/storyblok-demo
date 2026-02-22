import { getStoryblokApi } from "./lib/storyblok";
import StoryblokStory from "@storyblok/react/story";

export const revalidate = 0; // Disable caching for the demo

export default async function Home() {
  try {
    const { data } = await fetchData();

    if (!data?.story) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center font-mono text-[10px] uppercase tracking-widest p-20 text-center">
          <p className="text-red-500 mb-4 font-bold">Error: Story Not Found</p>
          <p>Ensure your Storyblok slug is exactly "home"</p>
          <p className="mt-2 opacity-50">Current Path: /</p>
        </div>
      );
    }

    return (
      <main className="min-h-screen bg-white">
        <StoryblokStory story={data.story} />
      </main>
    );
  } catch (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center font-mono text-[10px] uppercase tracking-widest p-20">
        <p className="text-red-500 mb-4 font-bold">Critical Connection Error</p>
        <pre className="bg-gray-100 p-4 lowercase">{error.message}</pre>
        <p className="mt-4 opacity-50 text-center">Check if your Access Token is valid in src/app/lib/storyblok.js</p>
      </div>
    );
  }
}

async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, { 
    version: "draft",
    cv: Date.now() 
  });
}