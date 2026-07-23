function Check({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <circle cx="10" cy="10" r="10" fill="currentColor" fillOpacity="0.15" />
      <path
        d="M6 10.5l2.5 2.5L14 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white">
      <div className="mx-auto max-w-5xl px-5 py-[6rem] sm:px-8 sm:py-[9rem]">
        <h2 className="text-center text-2xl font-extrabold text-ink sm:text-3xl">
          料金プラン
        </h2>
        <p className="mt-2 text-center text-sm text-ink-soft">
          あなたに合った続けやすいプランをお選びください
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* 都度購入 */}
          <div className="rounded-3xl border border-primary-soft bg-white p-7 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
            <p className="text-sm font-bold text-ink-soft">都度購入</p>
            <p className="mt-2 text-3xl font-extrabold text-ink">
              ¥5,980
              <span className="text-sm font-bold text-ink-soft">(税込)</span>
            </p>
            <p className="mt-1 text-xs text-ink-soft">送料別・回数縛りなし</p>

            <ul className="mt-6 space-y-3 text-sm text-ink-soft">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 shrink-0 text-primary" />
                1ヶ月分(30食分)
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 shrink-0 text-primary" />
                お好きなタイミングで購入可能
              </li>
            </ul>

            <button
              type="button"
              className="mt-7 w-full rounded-full border border-primary px-6 py-3 text-sm font-bold text-primary transition duration-200 hover:scale-[1.03] hover:bg-primary-soft hover:shadow-md active:scale-[1.03]"
            >
              都度購入で申し込む
            </button>
          </div>

          {/* 定期便コース */}
          <div className="relative rounded-3xl border-2 border-primary bg-white p-7 shadow-xl shadow-primary/15 transition duration-200 hover:-translate-y-1 hover:shadow-2xl">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 animate-[badge-pulse_2.4s_ease-in-out_infinite] rounded-full bg-primary px-4 py-1 text-xs font-bold text-white motion-reduce:animate-none">
              人気No.1・定期便コース
            </span>

            <p className="mt-2 text-sm font-bold text-ink-soft">
              初回限定価格
            </p>
            <p className="mt-1 flex items-baseline gap-2">
              <span className="text-sm text-ink-soft line-through">
                ¥5,980
              </span>
              <span className="text-3xl font-extrabold text-primary">
                ¥1,980
              </span>
              <span className="text-sm font-bold text-ink-soft">(税込)</span>
            </p>
            <p className="mt-2 text-xs text-ink-soft">
              2回目以降 ¥4,480(税込)/送料無料
            </p>

            <ul className="mt-6 space-y-3 text-sm text-ink-soft">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 shrink-0 text-primary" />
                毎回送料無料
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 shrink-0 text-primary" />
                回数縛りなし・いつでも休止/解約OK
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 shrink-0 text-primary" />
                お届けサイクルを自由に変更可能
              </li>
            </ul>

            <button
              type="button"
              className="mt-7 w-full rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-white shadow-md shadow-primary/30 transition duration-200 hover:scale-[1.03] hover:bg-primary-dark hover:shadow-xl active:scale-[1.03]"
            >
              初回限定価格で試してみる
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
