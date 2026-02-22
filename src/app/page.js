import { getStoryblokApi } from "./lib/storyblok";
import StoryblokStory from "@storyblok/react/story";

export const revalidate = 0; 

export default async function Home() {
  const { data } = await fetchData();

  // If even the omni-fetcher fails, we show exactly why
  if (!data?.story) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center font-mono text-[10px] uppercase tracking-widest p-10 bg-white text-black">
        <div className="border border-black p-8 max-w-md">
          <p className="font-bold mb-4">CRITICAL: Story Not Found</p>
          <p className="mb-2 italic">Possible reasons:</p>
          <ul className="list-disc list-inside space-y-1 opacity-60 lowercase">
            <li>Slug in Storyblok is not exactly "home"</li>
            <li>Preview Token is incorrect in lib/storyblok.js</li>
            <li>The "Page" content type isn't registered</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <StoryblokStory story={data.story} />
    </main>
  );
}

async function fetchData() {
  const storyblokApi = getStoryblokApi();
  
  // Try to fetch 'home' explicitly first
  try {
    return await storyblokApi.get(`cdn/stories/home`, { 
      version: "draft",
      cv: Date.now() 
    });
  } catch (e) {
    // If that fails, try to fetch the root entry
    return await storyblokApi.get(`cdn/stories/`, { 
      version: "draft",
      cv: Date.now() 
    });
  }
}