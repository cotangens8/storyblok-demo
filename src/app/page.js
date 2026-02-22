import { getStoryblokApi } from "./lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

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
        {/* We use the Server Component version for the App Router */}
        <StoryblokServerComponent story={data.story} />
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