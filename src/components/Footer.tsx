export default function Footer() {
  return (
    <footer className="border-t border-ink/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-sm text-ink">
          Nkangi Disan
        </span>
        <span className="text-xs text-ink-muted">
          &copy; {new Date().getFullYear()} Grittrix Technologies. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
