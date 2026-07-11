import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-rose mb-3">404</p>
      <h1 className="font-display text-3xl font-semibold text-ink mb-4">
        This route doesn't resolve.
      </h1>
      <p className="text-ink-muted mb-8">The page you're looking for isn't deployed here.</p>
      <Link
        to="/"
        className="rounded-full bg-gradient-to-r from-violet to-cyan px-6 py-3 font-medium text-void"
      >
        Back home
      </Link>
    </div>
  );
}
