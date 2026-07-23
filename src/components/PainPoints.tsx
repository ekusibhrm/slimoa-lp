import Reveal from "@/components/Reveal";

const painPoints = [
  {
    title: "気づけば体型が気になる…",
    body: "在宅時間が増えて、以前より体が重く感じることが増えた。",
  },
  {
    title: "ダイエットが長続きしない",
    body: "気合を入れて始めても、いつも三日坊主で終わってしまう。",
  },
  {
    title: "自炊や運動の時間が取れない",
    body: "仕事や家事に追われて、自分の食事にまで手が回らない。",
  },
];

export default function PainPoints() {
  return (
    <section className="bg-surface-alt">
      <div className="mx-auto max-w-6xl px-5 py-[6rem] sm:px-8 sm:py-[9rem]">
        <h2 className="text-center text-2xl font-extrabold text-ink sm:text-3xl">
          こんなお悩み、ありませんか?
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {painPoints.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div className="h-full rounded-2xl bg-white p-6 text-center shadow-sm shadow-primary/5 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-4xl">💭</p>
                <h3 className="mt-3 font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-base font-bold text-ink sm:text-lg">
          その毎日、「置き換える」だけで変えられるかもしれません。
        </p>
      </div>
    </section>
  );
}
