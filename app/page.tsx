import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  WalletCards,
  Target,
  BookOpen,
  Users,
  PlayCircle,
} from "lucide-react";

import LogoImage from "../components/Logo.png";

const features = [
  {
    title: "Cho‘ntak puli",
    icon: WalletCards,
    description: "Virtual balans va tushunarli tranzaksiyalar.",
  },
  {
    title: "Jamg‘arma",
    icon: Target,
    description: "Maqsad qo‘ying, progressni kuzating.",
  },
  {
    title: "Ta’lim",
    icon: BookOpen,
    description: "Interactive mini-darslar va quizlar.",
  },
  {
    title: "Oila",
    icon: Users,
    description: "Ota-ona va farzand bitta ekotizimda.",
  },
];

const steps = [
  ["01", "Vazifa", "Bajariladigan ish va mukofot belgilanadi."],
  ["02", "Mukofot", "Tasdiqlangan vazifa virtual balansni oshiradi."],
  ["03", "Jamg‘arma", "Farzand maqsad uchun pul ajratadi."],
  ["04", "Ta’lim", "Mini-dars va quizlar XP hamda coin beradi."],
];

const lessons = [
  "Ehtiyoj va xohish",
  "Jamg‘arma nima?",
  "Byudjet",
  "Aqlli xarid",
  "Pul xavfsizligi",
  "Investitsiya asoslari",
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-white">
      {/* HEADER */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
        <Link href="/" className="flex items-center">
          <Image
            src={LogoImage}
            alt="PULSI"
            width={150}
            height={50}
            priority
            className="h-auto w-[130px] object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-gray-600 md:flex">
          <a
            href="#how"
            className="transition hover:text-[#17a673]"
          >
            Qanday ishlaydi
          </a>

          <a
            href="#features"
            className="transition hover:text-[#17a673]"
          >
            Imkoniyatlar
          </a>

          <a
            href="#premium"
            className="transition hover:text-[#17a673]"
          >
            Premium
          </a>

          <a
            href="#learn"
            className="transition hover:text-[#17a673]"
          >
            Ta’lim
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="rounded-xl px-4 py-2.5 text-sm font-semibold text-[#0b2b22] transition hover:bg-[#eaf8f2]"
          >
            Kirish
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-[#17a673] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/10 transition hover:bg-[#128b61]"
          >
            Boshlash
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="grid-bg relative">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 pt-16 lg:grid-cols-2 lg:pb-32 lg:pt-24">
          {/* LEFT */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ccebdd] bg-white px-3 py-1.5 text-xs font-bold text-[#128b61] shadow-sm">
              <Sparkles size={14} />
              Oila uchun aqlli moliyaviy odatlar
            </div>

            <h1 className="max-w-3xl text-5xl font-black tracking-tight text-[#0b2b22] md:text-6xl">
              Pulni boshqarishni{" "}
              <span className="text-[#17a673]">yoshligidan</span> o‘rgan.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              PULSI — ota-ona va farzand uchun vazifalar, cho‘ntak puli,
              jamg‘arma va moliyaviy ta’limni bitta joyga jamlaydi.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/register"
                className="flex items-center gap-2 rounded-xl bg-[#0b2b22] px-5 py-3.5 font-semibold text-white transition hover:bg-[#123f32]"
              >
                Boshlash
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/login?role=child"
                className="rounded-xl border border-[#cfe4da] bg-white px-5 py-3.5 font-semibold text-[#0b2b22] transition hover:bg-[#eaf8f2]"
              >
                Farzand sifatida kirish
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-5 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2
                  size={16}
                  className="text-[#17a673]"
                />
                3 tilda
              </span>

              <span className="flex items-center gap-1.5">
                <ShieldCheck
                  size={16}
                  className="text-[#17a673]"
                />
                Oila nazorati
              </span>
            </div>
          </div>

          {/* HERO DASHBOARD CARD */}
          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-emerald-200/30 blur-3xl" />

            <div className="relative rounded-[30px] border border-white/80 bg-white p-5 shadow-2xl shadow-emerald-950/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">
                    Salom, Ali 👋
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#0b2b22]">
                    Bugungi moliyaviy holat
                  </p>
                </div>

                <div className="rounded-full bg-[#eaf8f2] px-3 py-1 text-xs font-bold text-[#17a673]">
                  Level 12
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-[#0b2b22] p-5 text-white">
                <p className="text-xs text-white/60">
                  Balans
                </p>

                <p className="mt-1 text-3xl font-extrabold">
                  150 000{" "}
                  <span className="text-base font-semibold">
                    UZS
                  </span>
                </p>

                <div className="mt-4 h-1.5 rounded-full bg-white/10">
                  <div className="h-1.5 w-[68%] rounded-full bg-[#42d49c]" />
                </div>

                <div className="mt-2 flex justify-between text-xs text-white/50">
                  <span>Daromad +120 000</span>
                  <span>68%</span>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {/* GOAL */}
                <div className="rounded-2xl border border-gray-100 p-4">
                  <div className="flex justify-between">
                    <p className="text-xs text-gray-500">
                      🎧 Quloqchin
                    </p>

                    <span className="text-xs font-bold text-[#17a673]">
                      60%
                    </span>
                  </div>

                  <p className="mt-2 font-bold text-[#0b2b22]">
                    180 000 / 300 000
                  </p>

                  <div className="mt-3 h-2 rounded-full bg-gray-100">
                    <div className="h-2 w-3/5 rounded-full bg-[#17a673]" />
                  </div>
                </div>

                {/* STREAK */}
                <div className="rounded-2xl border border-gray-100 p-4">
                  <p className="text-xs text-gray-500">
                    🔥 Streak
                  </p>

                  <p className="mt-2 text-2xl font-extrabold text-[#0b2b22]">
                    7 kun
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Ajoyib davom et!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="mx-auto max-w-7xl px-5 py-24"
      >
        <div className="max-w-2xl">
          <p className="font-bold text-[#17a673]">
            Bitta platforma. Ko‘p foyda.
          </p>

          <h2 className="mt-2 text-4xl font-black text-[#0b2b22]">
            Moliyaviy odatlar amaliyotda shakllanadi.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#eaf8f2] text-[#17a673]">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 font-bold text-[#0b2b22]">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how"
        className="bg-[#0b2b22] py-24 text-white"
      >
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="font-bold text-[#69d7aa]">
                Qanday ishlaydi
              </p>

              <h2 className="mt-2 text-4xl font-black">
                O‘rgan. Ishla. Jamg‘ar.
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-white/60">
                Ota-ona vazifa beradi, farzand bajaradi, mukofot
                oladi va o‘z maqsadiga jamg‘aradi. Har bir qadam
                moliyaviy bilim bilan bog‘langan.
              </p>
            </div>

            <div className="space-y-4">
              {steps.map(([number, title, description]) => (
                <div
                  key={number}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="font-mono text-[#69d7aa]">
                    {number}
                  </div>

                  <div>
                    <p className="font-bold">
                      {title}
                    </p>

                    <p className="mt-1 text-sm text-white/55">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEARNING */}
      <section
        id="learn"
        className="mx-auto max-w-7xl px-5 py-24"
      >
        <div className="rounded-[30px] bg-[#eaf8f2] p-8 md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="font-bold text-[#17a673]">
                Moliyaviy bilim
              </p>

              <h2 className="mt-2 text-4xl font-black text-[#0b2b22]">
                Oddiy video emas. Interaktiv o‘rganish.
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Ehtiyoj va xohishdan tortib byudjet, foiz va
                investitsiya asoslarigacha — qisqa tushuntirish,
                real misol, savol va mini quiz.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <PlayCircle className="text-[#17a673]" />

                <span className="font-semibold text-[#0b2b22]">
                  15 ta boshlang‘ich lesson
                </span>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {lessons.map((lesson, index) => (
                <div
                  key={lesson}
                  className="flex items-center gap-3 rounded-xl bg-white p-4"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#0b2b22] text-xs font-bold text-white">
                    {index + 1}
                  </span>

                  <span className="text-sm font-semibold text-[#0b2b22]">
                    {lesson}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM */}
      <section
        id="premium"
        className="mx-auto max-w-7xl px-5 pb-24"
      >
        <div className="rounded-[30px] bg-[#0b2b22] p-8 text-white md:p-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold">
                <Sparkles size={14} />
                PREMIUM
              </div>

              <h2 className="mt-4 text-4xl font-black">
                19 900 UZS / oy
              </h2>

              <p className="mt-2 max-w-xl text-white/55">
                AI yordamchi, kengaytirilgan statistika, family
                reports va premium kurslar.
              </p>
            </div>

            <Link
              href="/login"
              className="rounded-xl bg-[#17a673] px-5 py-3 font-bold transition hover:bg-[#128b61]"
            >
              Premiumni ko‘rish →
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 py-8 text-sm text-gray-500 md:flex-row md:items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={LogoImage}
              alt="PULSI"
              width={120}
              height={40}
              className="h-auto w-[110px] object-contain"
            />
          </Link>

          <span>
            © 2026 PULSI. O‘rgan. Ishla. Jamg‘ar.
          </span>
        </div>
      </footer>
    </div>
  );
}