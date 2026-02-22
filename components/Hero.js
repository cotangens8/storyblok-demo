import { storyblokEditable } from "@storyblok/react/rsc";

const Hero = ({ blok }) => (
  <section
    {...storyblokEditable(blok)}
    className="pt-40 pb-20 px-10 border-b border-black bg-white"
  >
    <h1 className="text-[10vw] font-medium tracking-tight leading-[0.85] uppercase italic">
      {blok.headline}
    </h1>
    <div className="mt-12 flex justify-between items-end border-t border-black pt-8">
      <p className="max-w-xl text-2xl font-light leading-snug">
        {blok.subheadline}
      </p>
      <span className="font-mono text-xs uppercase tracking-widest opacity-40">
        Case_Ref // 01
      </span>
    </div>
  </section>
);

export default Hero;