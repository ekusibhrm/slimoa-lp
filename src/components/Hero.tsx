import CountUp from "@/components/CountUp";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-white">
      {/* large background silhouette (pouch/bottle motif), single tone, low opacity */}
      <svg
        aria-hidden
        viewBox="0 0 400 620"
        fill="currentColor"
        className="pointer-events-none absolute -right-32 -top-10 h-[120%] w-auto text-primary opacity-[0.08] sm:-right-10"
      >
        <path d="M150 30 Q150 6 174 6 L226 6 Q250 6 250 30 L250 96 Q320 140 320 260 L320 540 Q320 600 260 600 L140 600 Q80 600 80 540 L80 260 Q80 140 150 96 Z" />
      </svg>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-[5.25rem] sm:px-8 sm:py-[7.5rem] lg:grid-cols-[1.2fr_1fr] lg:py-[10.5rem]">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-bold text-primary-dark sm:text-sm">
            初回限定 66%OFF キャンペーン中
          </span>

          <h1 className="mt-5 text-[3rem] font-black leading-[1.15] tracking-tight text-ink sm:text-[3.8rem] lg:text-[4.6rem]">
            がんばらないのに、続けられる。
          </h1>

          <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
            1日1食を置き換えるだけ。忙しい毎日にそっと寄り添う、置き換えダイエット習慣「Slimoa(スリモア)」。まずは初回限定価格でお試しください。
          </p>

          <div className="mt-7 flex flex-wrap items-end gap-3">
            <div>
              <p className="text-xs text-ink-soft">通常価格 ¥5,980(税込)</p>
              <p className="flex items-baseline gap-1 text-primary">
                <span className="text-sm font-bold">初回限定</span>
                <span className="text-4xl font-extrabold">¥1,980</span>
                <span className="text-sm font-bold">(税込)</span>
              </p>
            </div>
          </div>

          <a
            href="#pricing"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-extrabold text-white shadow-lg shadow-primary/30 transition duration-200 hover:scale-[1.03] hover:bg-primary-dark hover:shadow-xl active:scale-[1.03] sm:w-auto"
          >
            初回限定価格で試してみる
          </a>
          <p className="mt-3 text-xs text-ink-soft">
            送料無料・定期便はいつでも休止/解約OK
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="rounded-[2rem] border border-primary-soft bg-white p-6 shadow-xl shadow-primary/10 sm:p-8">
            <div className="flex items-center justify-center">
              <ShakeIcon className="h-32 w-32 animate-[gentle-float_5s_ease-in-out_infinite] text-primary motion-reduce:animate-none" />
            </div>

            <div className="mx-auto mt-6 max-w-[70%] rounded-2xl bg-secondary-soft p-[11px] text-center">
              <p className="text-[21px] font-extrabold text-secondary-dark">
                <CountUp target={86} />
                <span className="text-[13px]">%</span>
              </p>
              <p className="mt-1 text-[10px] font-bold text-ink">
                が「習慣化できた」と回答
              </p>
              <p className="mt-1 text-[8px] text-ink-soft">
                ※自社アンケート(2026年/回答者n=312)個人の感想です
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShakeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M35 18h30l-4 58a6 6 0 0 1-6 6H45a6 6 0 0 1-6-6l-4-58Z"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M33 34h34"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect
        x="30"
        y="10"
        width="40"
        height="10"
        rx="4"
        fill="currentColor"
        fillOpacity="0.25"
      />
      <path
        d="M64 8c2 3-2 4 0 7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
