import { getStoryblokApi } from "./lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

export const revalidate = 0;

export default async function Home() {
  const storyblokApi = getStoryblokApi();
  
  try {
    // We try to fetch 'home' directly first since your slug exists
    const { data } = await storyblokApi.get(`cdn/stories/home`, { 
      version: "draft",
      cv: Date.now() 
    });

    if (!data?.story) {
       return (
         <div className="p-20 font-mono text-[10px] uppercase bg-white text-black min-h-screen">
           Status // Story_Data_Undefined <br/>
           Action // Ensure 'home' slug is published in Storyblok
         </div>
       );
    }

    return (
      <main className="min-h-screen bg-white">
        <StoryblokServerComponent story={data.story} />
      </main>
    );
  } catch (error) {
    return (
      <div className="p-20 font-mono text-[10px] uppercase text-red-500 bg-white min-h-screen">
        Error // {error.message} <br/>
        Tip // Check if NEXT_PUBLIC_STORYBLOK_TOKEN is correct in Netlify
      </div>
    );
  }
}