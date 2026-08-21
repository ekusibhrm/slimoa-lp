import Image from "next/image";

export default function LifestylePhoto() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="relative overflow-hidden rounded-[2rem] shadow-lg shadow-primary/10">
          <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
            <Image
              src="/images/smoothie-lifestyle.jpg"
              alt="いちごのスムージー"
              fill
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          </div>
          <p className="absolute bottom-6 left-6 right-6 text-lg font-extrabold leading-snug text-white sm:bottom-8 sm:left-8 sm:text-2xl">
            忙しい朝にも、そっと寄り添う習慣を。
          </p>
        </div>
      </div>
    </section>
  );
}
