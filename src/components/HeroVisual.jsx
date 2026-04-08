import { motion } from "framer-motion";
import { Activity, ShieldCheck, Waypoints } from "lucide-react";

const particles = [
  { left: "8%", top: "18%", size: 6, duration: 5.2, delay: 0.2 },
  { left: "19%", top: "68%", size: 4, duration: 7.4, delay: 1.1 },
  { left: "36%", top: "32%", size: 5, duration: 6.1, delay: 0.4 },
  { left: "52%", top: "14%", size: 5, duration: 7.1, delay: 0.8 },
  { left: "58%", top: "52%", size: 7, duration: 5.7, delay: 1.4 },
  { left: "74%", top: "28%", size: 6, duration: 6.6, delay: 0.6 },
  { left: "86%", top: "64%", size: 4, duration: 7.8, delay: 1.9 },
  { left: "68%", top: "80%", size: 5, duration: 6.3, delay: 1.3 },
];

const miniCards = [
  {
    title: "Threat Surface",
    value: "Controlled",
    icon: ShieldCheck,
    position: "left-2 top-10 sm:left-6",
  },
  {
    title: "Mission Sync",
    value: "Aligned",
    icon: Waypoints,
    position: "right-2 top-1/4 sm:right-6",
  },
  {
    title: "Ops Tempo",
    value: "Ready",
    icon: Activity,
    position: "bottom-6 left-1/2 -translate-x-1/2",
  },
];

function HeroVisual({ image }) {
  return (
    <div className="relative mx-auto aspect-[1.05/1] w-full max-w-[42rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(89,216,255,0.16),transparent_35%),linear-gradient(180deg,rgba(17,24,35,0.9),rgba(8,12,18,0.96))] p-6 shadow-[0_40px_140px_rgba(0,0,0,0.45)]">
      <img
        src={image}
        alt="Abstract cybersecurity interface"
        className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-screen"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,12,0.12),rgba(4,7,12,0.72))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(circle_at_center,black,transparent_90%)]" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[19rem] w-[19rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8"
      />

      {particles.map((particle) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className="absolute rounded-full bg-cyan shadow-[0_0_22px_rgba(89,216,255,0.8)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.35], scale: [1, 1.18, 1] }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="absolute inset-6 rounded-[1.6rem] border border-white/8">
        <div className="absolute left-[11%] top-[18%] h-12 w-12 rounded-full border border-cyan/30 bg-cyan/10 shadow-[0_0_36px_rgba(89,216,255,0.24)]" />
        <div className="absolute right-[16%] top-[29%] h-4 w-24 rounded-full bg-gradient-to-r from-cyan/0 via-cyan/55 to-cyan/0 blur-[1px]" />
        <div className="absolute bottom-[20%] left-[20%] h-px w-36 bg-gradient-to-r from-transparent via-cyan/80 to-transparent" />
        <div className="absolute bottom-[22%] right-[18%] h-20 w-20 rounded-full border border-cyan/20" />
      </div>

      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(89,216,255,0.18),rgba(89,216,255,0.02)_52%,transparent_72%)]" />

      <div className="relative flex h-full items-center justify-center">
        <div className="grid h-[18rem] w-[18rem] place-items-center rounded-full border border-cyan/25 bg-[radial-gradient(circle,rgba(89,216,255,0.18),rgba(89,216,255,0.05)_48%,rgba(255,255,255,0.03)_72%)] backdrop-blur-md">
          <div className="grid h-[10rem] w-[10rem] place-items-center rounded-[1.8rem] border border-white/12 bg-white/5 shadow-[0_0_40px_rgba(89,216,255,0.14)]">
            <ShieldCheck className="h-16 w-16 text-cyan" strokeWidth={1.35} />
          </div>
        </div>
      </div>

      {miniCards.map(({ icon: Icon, title, value, position }, index) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.15, duration: 0.55 }}
          className={`absolute ${position} rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 backdrop-blur-md`}
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/10">
              <Icon className="h-5 w-5 text-cyan" strokeWidth={1.6} />
            </span>
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-slate-400">
                {title}
              </p>
              <p className="mt-1 text-sm font-semibold text-white">{value}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default HeroVisual;
