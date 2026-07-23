import Reveal from "@/components/Reveal";

function PlaceholderImageIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <rect x="2" y="2" width="44" height="44" rx="8" fill="currentColor" fillOpacity="0.08" />
      <circle cx="17" cy="17" r="4" fill="currentColor" fillOpacity="0.35" />
      <path
        d="M6 34 18 22l7 7 6-6 11 11"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div aria-label={`評価 ${count} / 5`} className="flex gap-0.5 text-primary">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="h-4 w-4"
          fill={i < count ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.1 1 5.9L10 14.8l-5.2 2.8 1-5.9-4.3-4.1 5.9-.7L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

const testimonials = [
  {
    name: "A.Yさん(32歳/会社員)",
    rating: 5,
    quote:
      "続けやすくて、気づいたら3ヶ月経っていました。無理な我慢をしている感覚がなく、自分のペースで置き換えられています。",
  },
  {
    name: "M.Kさん(28歳/営業職)",
    rating: 4,
    quote:
      "味のバリエーションがあって飽きずに続けられました。忙しい朝でもシェイカーで作るだけなので助かっています。",
  },
  {
    name: "R.Sさん(41歳/主婦)",
    rating: 5,
    quote:
      "洗い物が少なくて続けやすいです。気持ちが軽くなった気がして、毎日の習慣にしています。",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-surface-alt">
      <div className="mx-auto max-w-6xl px-5 py-[6rem] sm:px-8 sm:py-[9rem]">
        <h2 className="text-center text-2xl font-extrabold text-ink sm:text-3xl">
          お客様の声
        </h2>
        <p className="mt-2 text-center text-sm text-ink-soft">
          Slimoaを試した方々の感想をご紹介します
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120} className="h-full">
            <div
              className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm shadow-secondary/10 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="grid grid-cols-2 gap-2">
                <div
                  className="rounded-xl p-3 text-center"
                  style={{
                    background: "linear-gradient(135deg, #FFE5E0, #FFF5F0)",
                  }}
                >
                  <PlaceholderImageIcon className="mx-auto h-10 w-10 text-primary-dark" />
                  <p className="mt-1 text-[11px] font-bold text-ink-soft">
                    BEFORE(イメージ)
                  </p>
                </div>
                <div
                  className="rounded-xl p-3 text-center"
                  style={{
                    background: "linear-gradient(135deg, #FFE5E0, #FFF5F0)",
                  }}
                >
                  <PlaceholderImageIcon className="mx-auto h-10 w-10 text-primary-dark" />
                  <p className="mt-1 text-[11px] font-bold text-ink-soft">
                    AFTER(イメージ)
                  </p>
                </div>
              </div>

              <Stars count={t.rating} />

              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                「{t.quote}」
              </p>

              <p className="mt-4 text-xs font-bold text-ink">{t.name}</p>
            </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-ink-soft">
          ※画像はすべてイメージ(プレースホルダー)のダミーです。掲載の体験談は演出用の架空のものであり、効果・効能を保証するものではありません。個人の感想です。
        </p>
      </div>
    </section>
  );
}
