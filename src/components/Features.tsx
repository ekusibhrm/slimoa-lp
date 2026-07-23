import Reveal from "@/components/Reveal";

function FlameIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2c1 3-3 4-3 8a3 3 0 0 0 6 0c1 1 2 2.5 2 4.5a5 5 0 0 1-10 0C7 10 12 8 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M5 19C3 12 8 4 20 4c1 10-6 16-15 15Z"
        fill="currentColor"
        fillOpacity="0.9"
      />
      <path
        d="M6 18c4-5 8-8 13-12"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.15" />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 7v5l3.5 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TruckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="7" width="12" height="9" rx="1.5" fill="currentColor" />
      <path
        d="M14 10h4l3 3v3h-7v-6Z"
        fill="currentColor"
        fillOpacity="0.55"
      />
      <circle cx="7" cy="18" r="1.8" fill="white" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="17.5" cy="18" r="1.8" fill="white" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

const features = [
  {
    icon: FlameIcon,
    title: "1食あたり約175kcalが目安",
    body: "置き換える1食の目安カロリーを設計。無理な制限ではなく、続けやすさを大切にしました。",
  },
  {
    icon: LeafIcon,
    title: "21種のビタミン・ミネラル配合",
    body: "忙しい日の食事バランスが気になる方向けに、栄養素を配合しました。",
  },
  {
    icon: ClockIcon,
    title: "シェイカー1つで、たった1分",
    body: "水や豆乳と混ぜるだけ。洗い物も少なく、朝の忙しい時間でも続けやすい設計です。",
  },
  {
    icon: TruckIcon,
    title: "定期便は送料無料",
    body: "定期便コースなら毎回送料無料。回数縛りなし、いつでも休止・解約が可能です。",
  },
];

export default function Features() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-[6rem] sm:px-8 sm:py-[9rem]">
        <h2 className="text-center text-2xl font-extrabold text-ink sm:text-3xl">
          Slimoaが選ばれる理由
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-primary-soft p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft text-primary transition-transform duration-200 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-bold leading-snug text-ink">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
