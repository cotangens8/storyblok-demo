import { storyblokEditable } from "@storyblok/react/rsc";

const Hero = ({ blok }) => (
  <section 
    {...storyblokEditable(blok)} 
    className="pt-32 pb-20 px-6 md:px-12 border-b border-groth-black bg-groth-white"
  >
    <div className="flex flex-col gap-8">
      <h1 className="text-[12vw] font-medium tracking-tightest leading-[0.85] uppercase break-words">
        {blok.headline}
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-t border-groth-black pt-8">
        <p className="max-w-xl text-xl md:text-2xl font-light leading-snug">
          {blok.subheadline}
        </p>
        <span className="font-mono text-sm uppercase tracking-tighter opacity-50">
          Index // Case_Studies
        </span>
      </div>
    </div>
  </section>
);

export default Hero;