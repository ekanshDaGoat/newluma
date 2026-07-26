// Editor/terminal-style window used as a hero visual.
export default function MockWindow({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/10 bg-[#0d0d0d] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-auto font-mono text-xs text-white/40">{title}</span>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}
