function GlassCard({ className = "", children }) {
  return (
    <div
      className={`rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

export default GlassCard;
