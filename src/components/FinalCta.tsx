export default function FinalCta() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-5 py-[6rem] text-center sm:px-8 sm:py-[7.5rem]">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-bold text-primary-dark sm:text-sm">
          初回限定価格は今月末まで・先着300名様
        </span>

        <h2 className="mt-5 text-2xl font-extrabold text-ink sm:text-3xl">
          今日から、心地いいわたしへ。
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
          初回限定¥1,980(税込)・送料無料。回数縛りなく、いつでも休止・解約できます。
        </p>

        <a
          href="#pricing"
          className="mt-7 inline-flex items-center justify-center rounded-full bg-primary px-9 py-4 text-base font-extrabold text-white shadow-lg shadow-primary/30 transition duration-200 hover:scale-[1.03] hover:bg-primary-dark hover:shadow-2xl active:scale-[1.03]"
        >
          初回限定価格で試してみる
        </a>
      </div>
    </section>
  );
}
