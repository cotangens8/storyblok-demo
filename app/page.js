import { getStoryblokApi } from "./lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

export const revalidate = 0;

export default async function Home() {
  const storyblokApi = getStoryblokApi();
  
  try {
    // We fetch by the specific ID shown in your 'Proof of Life' test
    // This ignores slugs entirely and kills the 404
    const { data } = await storyblokApi.get(`cdn/stories/147768341539996`, { 
      version: "draft",
      cv: Date.now() 
    });

    if (!data?.story) {
       return <div className="p-20 font-mono text-[10px] uppercase">Wait // Story_ID_Not_Found</div>;
    }

    return (
      <main className="min-h-screen bg-white">
        <StoryblokServerComponent story={data.story} />
      </main>
    );
  } catch (error) {
    return (
      <div className="p-20 font-mono text-[10px] uppercase text-red-500 bg-white min-h-screen">
        Error // {error.message}
      </div>
    );
  }
}