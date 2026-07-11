/**
 * The signature visual motif of this portfolio: every project/panel is framed
 * like a monitored, deployed system — a terminal/window chrome with a live
 * status readout, echoing the dashboards and services this work actually ships.
 */
export default function WindowChrome({ label, status = "deployed" }) {
  const statusColor =
    status === "deployed" ? "bg-mint" : status === "academic" ? "bg-amber" : "bg-cyan";

  return (
    <div className="flex items-center justify-between px-4 py-2.5 border-b border-glass-border/60">
      <div className="flex items-center gap-1.5">
        <span className="dot bg-rose/70" />
        <span className="dot bg-amber/70" />
        <span className="dot bg-mint/70" />
      </div>
      <div className="font-mono text-[11px] text-ink-muted tracking-wide truncate max-w-[60%]">
        {label}
      </div>
      <div className="flex items-center gap-1.5">
        <span className={`w-1.5 h-1.5 rounded-full ${statusColor}`} />
      </div>
    </div>
  );
}
