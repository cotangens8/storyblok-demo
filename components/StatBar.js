import { storyblokEditable } from "@storyblok/react/rsc";

export default function StatBar({ blok }) {
  return (
    <section {...storyblokEditable(blok)}>
      <div>
        <strong>{blok.label}</strong>
        {blok.value ? <span> {blok.value}</span> : null}
      </div>
    </section>
  );
}