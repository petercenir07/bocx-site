function PrimaryButton({ href, children, variant = "solid", className = "" }) {
  const styles =
    variant === "ghost"
      ? "border border-white/12 bg-white/5 text-white hover:border-cyan/40 hover:bg-cyan/10"
      : "border border-cyan/40 bg-cyan/15 text-white shadow-[0_0_30px_rgba(89,216,255,0.14)] hover:border-cyan hover:bg-cyan/20";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.02em] transition duration-300 ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

export default PrimaryButton;
