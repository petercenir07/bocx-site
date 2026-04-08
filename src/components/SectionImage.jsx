import Reveal from "./Reveal";

function SectionImage({
  src,
  alt,
  eyebrow,
  title,
  className = "",
  imageClassName = "",
}) {
  return (
    <Reveal className={className}>
      <div className="section-shell panel-glow relative overflow-hidden rounded-[2rem] bg-slate-950/60 p-3 backdrop-blur-xl">
        <div className="relative overflow-hidden rounded-[1.55rem] border border-white/8">
          <img src={src} alt={alt} className={`h-full w-full object-cover ${imageClassName}`} />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,12,0.05),rgba(4,7,12,0.58))]" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <span className="inline-flex rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-cyan backdrop-blur-sm">
              {eyebrow}
            </span>
            <p className="mt-3 max-w-sm text-sm font-medium text-slate-100 sm:text-base">
              {title}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default SectionImage;
