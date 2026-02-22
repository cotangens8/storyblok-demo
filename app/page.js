import { getStoryblokApi } from "./lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

export const revalidate = 0;

export default async function Home() {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get("cdn/stories/home", {
    version: "draft",
    cv: Date.now(),
  });

  if (!data?.story?.content) return <div>No content found in Storyblok story</div>;

  return <StoryblokServerComponent blok={data.story.content} />;
}