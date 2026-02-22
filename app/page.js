import { getStoryblokApi } from "./lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

export const revalidate = 0;

export default async function Home() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories/home", {
    version: "draft",
    cv: Date.now(),
  });

  return (
    <main className="min-h-screen bg-white">
      <StoryblokServerComponent story={data.story} />
    </main>
  );
}