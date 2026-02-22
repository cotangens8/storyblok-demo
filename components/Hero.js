import { storyblokEditable } from "@storyblok/react/rsc";

export default function Hero({ blok }) {
  return (
    <section {...storyblokEditable(blok)}>
      <h1>{blok.headline}</h1>
      {blok.subheadline ? <p>{blok.subheadline}</p> : null}
    </section>
  );
}