"use client";

import { useState } from "react";

const faqs = [
  {
    q: "1日にどのくらい飲めばいいですか?",
    a: "1日1食を目安に、水や豆乳などお好きな飲み物とシェイクしてお召し上がりください。無理のない範囲で続けることをおすすめします。",
  },
  {
    q: "いつでも解約・休止できますか?",
    a: "回数縛りはありません。次回お届け予定日の7日前までにマイページよりご連絡いただければ、いつでも休止・解約が可能です。",
  },
  {
    q: "味が合わなかった場合は変更できますか?",
    a: "複数のフレーバーをご用意予定です。お届けサイクルの変更と合わせて、次回以降のフレーバー変更が可能です。",
  },
  {
    q: "妊娠中や授乳中でも試せますか?",
    a: "妊娠・授乳中の方や通院中の方、疾患をお持ちの方は、事前にかかりつけの医師にご相談の上でお試しください。",
  },
  {
    q: "支払い方法を教えてください。",
    a: "クレジットカード決済、代金引換に対応予定です。",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-surface-alt">
      <div className="mx-auto max-w-3xl px-5 py-[6rem] sm:px-8 sm:py-[9rem]">
        <h2 className="text-center text-2xl font-extrabold text-ink sm:text-3xl">
          よくあるご質問
        </h2>

        <div className="mt-8 divide-y divide-primary-soft rounded-2xl border border-primary-soft">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                >
                  <span className="flex items-start gap-3 font-bold text-ink">
                    <span className="text-primary">Q</span>
                    <span>{item.q}</span>
                  </span>
                  <span
                    className={`shrink-0 text-xl text-primary transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="flex items-start gap-3 px-5 pb-5 text-sm leading-relaxed text-ink-soft sm:px-6">
                      <span className="font-bold text-secondary-dark">A</span>
                      <span>{item.a}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
