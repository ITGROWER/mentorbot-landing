import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Rocket, Users, Terminal, Sparkles, ShieldCheck, Download, BookOpen, Share2, Star, HeartHandshake, MessageSquare } from "lucide-react";

// Default export for canvas preview
export default function MentorBotLanding() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Top gradient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-200px] h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/30 via-sky-400/20 to-purple-500/30 blur-3xl"/>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="#" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-sky-400"/>
            <span className="font-semibold tracking-tight">MentorBot</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#features" className="text-sm text-gray-300 hover:text-white">Фичи</a>
            <a href="#install" className="text-sm text-gray-300 hover:text-white">Установка</a>
            <a href="#demo" className="text-sm text-gray-300 hover:text-white">Демо</a>
            <a href="#community" className="text-sm text-gray-300 hover:text-white">Сообщество</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/ITGROWER/mentorbot"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-800 bg-gray-900 px-3 py-2 text-sm hover:border-gray-700"
            >
              <Github className="h-4 w-4"/> <span>GitHub</span>
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden inline-flex items-center rounded-xl border border-gray-800 bg-gray-900 p-2"
              aria-label="menu"
            >
              <span className="i-lucide-menu"/>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-gray-800 md:hidden">
            <div className="mx-auto max-w-7xl px-4 py-3 grid gap-2">
              <a onClick={() => setOpen(false)} href="#features" className="py-2 text-gray-300">Фичи</a>
              <a onClick={() => setOpen(false)} href="#install" className="py-2 text-gray-300">Установка</a>
              <a onClick={() => setOpen(false)} href="#demo" className="py-2 text-gray-300">Демо</a>
              <a onClick={() => setOpen(false)} href="#community" className="py-2 text-gray-300">Сообщество</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-20 md:grid-cols-2 md:pt-28">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-semibold tracking-tight md:text-6xl"
            >
              Open‑source ментор под ваши цели
            </motion.h1>
            <p className="mt-5 max-w-xl text-gray-300">
              MentorBot создаёт персональных менторов для обучения, DevOps и карьеры. Конструктор менторов, сценарии, интеграции. Никакой магии — только прозрачный код.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#install"
                className="inline-flex items-center gap-2 rounded-2xl bg-sky-500 px-5 py-3 text-sm font-medium text-black hover:bg-sky-400"
              >
                <Rocket className="h-4 w-4"/> Быстрый старт
              </a>
              <a
                href="https://github.com/ITGROWER/mentorbot"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-gray-800 bg-gray-900 px-5 py-3 text-sm hover:border-gray-700"
              >
                <Star className="h-4 w-4"/> Поставить ⭐ на GitHub
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-xs text-gray-400">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4"/>MIT License</div>
              <div className="flex items-center gap-2"><Users className="h-4 w-4"/>Community‑driven</div>
              <div className="flex items-center gap-2"><Share2 className="h-4 w-4"/>API‑friendly</div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-gray-800 bg-gray-900 p-3 shadow-2xl">
              <div className="rounded-xl bg-black p-4 font-mono text-xs leading-6 text-gray-200">
                <div className="mb-3 flex items-center gap-2 text-gray-400">
                  <div className="h-3 w-3 rounded-full bg-red-500/70"/>
                  <div className="h-3 w-3 rounded-full bg-yellow-500/70"/>
                  <div className="h-3 w-3 rounded-full bg-green-500/70"/>
                  <span className="ml-2">demo.sh</span>
                </div>
                <CodeBlock/>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logos or trust bar (optional) */}
      <section aria-label="tech" className="border-y border-gray-900/80 bg-gray-950/60">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4 py-6 text-sm text-gray-400">
          <span>Интеграции: </span>
          <span className="opacity-80">Telegram</span>
          <span className="opacity-80">OpenAI API</span>
          <span className="opacity-80">Docker</span>
          <span className="opacity-80">Kubernetes</span>
          <span className="opacity-80">GitHub Actions</span>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Соберите своего ментора</h2>
          <p className="mt-3 text-gray-300">Один репозиторий. Чёткая архитектура. Минимум конфигурации.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Feature icon={<MessageSquare className="h-5 w-5"/>} title="Профили менторов" desc="Шаблоны под цели: алгоритмы, DevOps, английский, бизнес. Тюнинг через YAML/JSON."/>
          <Feature icon={<Terminal className="h-5 w-5"/>} title="CLI и Docker" desc="Локальный запуск за минуты. Образы и Helm‑чарты для k8s."/>
          <Feature icon={<BookOpen className="h-5 w-5"/>} title="Плейбуки обучения" desc="Готовые дорожные карты, квизы и фидбек‑циклы."/>
          <Feature icon={<ShieldCheck className="h-5 w-5"/>} title="Приватность" desc="Храните данные локально. Ключи и провайдеры — через переменные окружения."/>
          <Feature icon={<Share2 className="h-5 w-5"/>} title="Расширяемость" desc="Плагины, вебхуки, интеграции с трекерами задач."/>
          <Feature icon={<Users className="h-5 w-5"/>} title="Комьюнити" desc="Issues, PR, пулы шаблонов, RFC‑процесс для изменений."/>
        </div>
      </section>

      {/* Install */}
      <section id="install" className="border-y border-gray-900 bg-gray-950/60">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">Установка</h3>
              <p className="mt-3 text-gray-300">Выберите способ ниже. Остальное — в README.</p>
              <div className="mt-6 grid gap-4">
                <InstallCard title="Docker" lines={["git clone https://github.com/ITGROWER/mentorbot","cd mentorbot","docker compose up -d"]}/>
                <InstallCard title="Python" lines={["pip install -r requirements.txt","export OPENAI_API_KEY=...","python -m mentorbot --mentor devops"]}/>
                <InstallCard title="Kubernetes" lines={["helm repo add mentorbot https://ITGROWER.github.io/mentorbot","helm install mentorbot mentorbot/mentorbot"]}/>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">Конфигурация</h3>
              <p className="mt-3 text-gray-300">Минимальный пример профиля ментора.</p>
              <div className="mt-4 rounded-xl border border-gray-800 bg-gray-900 p-4 font-mono text-xs leading-6 text-gray-200">
{`mentor: devops\nobjective: \"Подготовка к собеседованию SRE\"\nplan:\n  - kubernetes: networking, storage, security\n  - linux: namespaces, cgroups, perf\n  - python: asyncio, typing, testing\ncheckpoints:\n  - quiz: weekly\n  - project: build ci/cd\nllm:\n  provider: openai\n  model: gpt-4o-mini\n`}
              </div>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a href="https://github.com/ITGROWER/mentorbot" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-gray-800 bg-gray-900 px-3 py-2 hover:border-gray-700"><Download className="h-4 w-4"/>README</a>
                <a href="#demo" className="inline-flex items-center gap-2 rounded-xl border border-gray-800 bg-gray-900 px-3 py-2 hover:border-gray-700"><Rocket className="h-4 w-4"/>Посмотреть демо</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section id="demo" className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Демо‑диалог</h3>
            <p className="mt-3 text-gray-300">Фрагмент реальной сессии. Показано для иллюстрации формата.</p>
            <div className="mt-4 space-y-3">
              <ChatBubble who="Пользователь" text="Мне 2 недели до собеса в Яндекс. С чего начать?"/>
              <ChatBubble who="MentorBot" text="Снимем стресс. Затем план: алгоритмы → системы → проекты. Дам ежедневные чекпоинты и квизы." right/>
              <ChatBubble who="Пользователь" text="Нужны задачи по графам и подсказки шаг за шагом."/>
              <ChatBubble who="MentorBot" text="Ок. Старт с BFS/DFS и topological sort. Дам 5 задач и тест на 15 минут." right/>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="https://github.com/ITGROWER/mentorbot" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-sky-500 px-5 py-3 text-sm font-medium text-black hover:bg-sky-400"><Github className="h-4 w-4"/>Открыть репозиторий</a>
              <a href="#community" className="inline-flex items-center gap-2 rounded-2xl border border-gray-800 bg-gray-900 px-5 py-3 text-sm hover:border-gray-700"><HeartHandshake className="h-4 w-4"/>Вступить в комьюнити</a>
            </div>
          </div>
          <div>
            <div className="rounded-2xl border border-gray-800 bg-gray-900 p-4">
              <img
                alt="Demo placeholder"
                className="h-auto w-full rounded-xl"
                src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1969&auto=format&fit=crop"
              />
              <p className="mt-3 text-center text-xs text-gray-500">Скриншот для примера. Замените на свой.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section id="community" className="border-y border-gray-900 bg-gray-950/60">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-semibold tracking-tight">Сообщество</h3>
            <p className="mt-3 text-gray-300">Присоединяйтесь: создавайте шаблоны менторов, делитесь плейбуками, помогайте новичкам.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card title="Issues & Roadmap" desc="Предлагайте фичи, голосуйте, берите задачи."/>
            <Card title="Templates Hub" desc="Каталог профилей менторов и плейбуков."/>
            <Card title="Contributors" desc="Список контрибьюторов и гайд по PR."/>
          </div>
          <div className="mt-10 text-center">
            <a href="https://github.com/ITGROWER/mentorbot" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-gray-800 bg-gray-900 px-5 py-3 text-sm hover:border-gray-700"><Github className="h-4 w-4"/>Открыть на GitHub</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-4 py-12 text-sm text-gray-400">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p>MIT © {new Date().getFullYear()} MentorBot • Open Source</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/ITGROWER/mentorbot" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
            <a href="#" className="hover:text-white">Docs</a>
            <a href="#" className="hover:text-white">Community</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="group rounded-2xl border border-gray-800 bg-gray-900/60 p-5 transition hover:border-gray-700">
      <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gray-800 text-sky-300">
        {icon}
      </div>
      <h4 className="text-base font-semibold tracking-tight">{title}</h4>
      <p className="mt-1 text-sm text-gray-300">{desc}</p>
    </div>
  );
}

function InstallCard({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900">
      <div className="flex items-center justify-between border-b border-gray-800 p-3">
        <div className="flex items-center gap-2 font-medium"><Download className="h-4 w-4"/> {title}</div>
        <button
          onClick={() => {
            navigator.clipboard?.writeText(lines.join("\n"));
          }}
          className="text-xs text-gray-400 hover:text-white"
        >Копировать</button>
      </div>
      <pre className="overflow-x-auto p-4 text-xs text-gray-200">
        <code>{lines.join("\n")}</code>
      </pre>
    </div>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-5">
      <h4 className="font-semibold tracking-tight">{title}</h4>
      <p className="mt-2 text-sm text-gray-300">{desc}</p>
    </div>
  );
}

function ChatBubble({ who, text, right }: { who: string; text: string; right?: boolean }) {
  return (
    <div className={`flex ${right ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[520px] rounded-2xl border ${right ? "bg-sky-500 text-black border-sky-400" : "bg-gray-900 border-gray-800 text-gray-100"} px-4 py-3 text-sm`}>
        <div className={`mb-1 text-xs ${right ? "text-black/70" : "text-gray-400"}`}>{who}</div>
        <div>{text}</div>
      </div>
    </div>
  );
}

function CodeBlock() {
  const code = `# Быстрый старт (Docker)\n\n$ git clone https://github.com/ITGROWER/mentorbot\n$ cd mentorbot\n$ docker compose up -d\n\n# Первый запуск\n$ mentorbot --mentor devops --goal \"готовлюсь к собесу\"\n\n# Добавить шаблон ментора\n$ mentorbot template add devops.yaml\n`;
  return (
    <pre className="overflow-x-auto text-xs text-gray-200"><code>{code}</code></pre>
  );
}
