import { getStoryblokApi } from "./lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

export const revalidate = 0;

export default async function Home() {
  const storyblokApi = getStoryblokApi();
  
  try {
    // Fetching the exact ID from your successful manual test
    const { data } = await storyblokApi.get(`cdn/stories/147768341539996`, { 
      version: "draft",
      cv: Date.now() 
    });

    if (!data?.story) return <div>Content Not Found</div>;

    return (
      <main className="min-h-screen bg-white">
        <StoryblokServerComponent story={data.story} />
      </main>
    );
  } catch (error) {
    return <div className="p-20 font-mono text-red-500">Error: {error.message}</div>;
  }
}