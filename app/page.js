import { getStoryblokApi } from "./lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

export const revalidate = 0;

export default async function Home() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories/home", {
    version: "draft",
    cv: Date.now(),
  });

  console.log("STORY CONTENT:", JSON.stringify(data.story.content, null, 2));

  if (!data?.story?.content) {
    return <div style={{padding: 40, fontFamily: 'monospace'}}>No content found in Storyblok story</div>;
  }

  return (
    <main className="min-h-screen bg-white">
      <StoryblokServerComponent blok={data.story.content} />
    </main>
  );
}