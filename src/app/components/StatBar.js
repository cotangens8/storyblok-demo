import { storyblokEditable } from "@storyblok/react/rsc";

const StatBar = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="border-b border-black px-10 py-4 flex justify-between items-center bg-white group hover:bg-black transition-colors duration-300">
    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400 group-hover:text-gray-500">
      Data_Point // {blok.label}
    </span>
    <span className="font-mono text-sm font-bold uppercase group-hover:text-white">
      {blok.value}
    </span>
  </div>
);

export default StatBar;