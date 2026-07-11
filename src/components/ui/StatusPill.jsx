export default function StatusPill({ children }) {
  return (
    <span className="status-pill">
      <span className="pulse" />
      {children}
    </span>
  );
}
