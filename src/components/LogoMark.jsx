import bocxMark from "../assets/images/bocx-mark.png";

function LogoMark() {
  return (
    <span className="inline-flex items-center gap-3 sm:gap-4">
      <span className="inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/6 p-2 shadow-[0_0_30px_rgba(89,216,255,0.12)] sm:h-13 sm:w-13">
        <img
          src={bocxMark}
          alt="BOCX logo mark"
          className="h-full w-full object-contain"
        />
      </span>
      <span className="hidden min-w-0 flex-col leading-none sm:flex">
        <span className="text-sm font-semibold tracking-[0.06em] text-white lg:text-[0.95rem]">
          BlackOps
        </span>
        <span className="mt-1 text-[0.68rem] uppercase tracking-[0.18em] text-slate-400 lg:text-[0.72rem]">
          Cybersecurity Consortium Inc.
        </span>
      </span>
    </span>
  );
}

export default LogoMark;
