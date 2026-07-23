export default function Footer() {
  return (
    <footer className="border-t border-primary-soft bg-white">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <span className="flex items-center gap-2 font-extrabold text-ink">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-extrabold text-white">
              S
            </span>
            Slimoa
          </span>

          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs text-ink-soft">
            <li>プライバシーポリシー</li>
            <li>特定商取引法に基づく表記</li>
            <li>お問い合わせ</li>
          </ul>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-[11px] leading-relaxed text-ink-soft">
          ※このページはポートフォリオ制作のためのデモLPです。Slimoa(スリモア)は実在の商品・ブランドではありません。掲載している商品名・価格・お客様の声・体験談・画像はすべて演出用の架空のダミーであり、実際の効果・効能を保証するものではありません。
        </p>

        <p className="mt-4 text-center text-[11px] text-ink-soft/70">
          &copy; 2026 Slimoa (Demo)
        </p>
      </div>
    </footer>
  );
}
