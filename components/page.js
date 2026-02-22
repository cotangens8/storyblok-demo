import { storyblokEditable, StoryblokServerComponent as StoryblokComponent } from "@storyblok/react/rsc";

const Page = ({ blok }) => {
  // Guard: if body is missing, use an empty array so map() doesn't fail
  const contentBody = blok?.body || [];

  return (
    <main {...storyblokEditable(blok)} className="px-4 md:px-10">
      {contentBody.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default Page;