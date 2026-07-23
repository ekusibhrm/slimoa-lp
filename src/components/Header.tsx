export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-primary-soft bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <span className="flex items-center gap-2 text-lg font-extrabold tracking-wide text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-white">
            S
          </span>
          Slimoa
        </span>

        <a
          href="#pricing"
          className="rounded-full bg-primary px-4 py-2 text-xs font-bold text-white shadow-sm shadow-primary/30 transition duration-200 hover:scale-[1.03] hover:bg-primary-dark hover:shadow-md active:scale-[1.03] sm:text-sm"
        >
          初回限定価格を見る
        </a>
      </div>
    </header>
  );
}
