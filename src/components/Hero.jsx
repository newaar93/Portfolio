import { profile } from '../data/content'

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 pb-24 pt-36"
    >
      <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
        </span>
        Open to internships
      </span>

      <h1 className="animate-fade-up delay-100 text-4xl font-bold tracking-tight sm:text-6xl">
                Hi, I&apos;m {profile.name.split(' ')[0]}.
        <span className="mt-2 block text-zinc-400">
          I build{' '}
          <span className="text-violet-400">fast, accessible</span> web apps
          with React.
        </span>
      </h1>

      <p className="animate-fade-up delay-200 max-w-xl text-lg text-zinc-400">
        Frontend developer based in {profile.location}, focused on crafting
        clean, user-friendly interfaces. Currently looking for an internship
        where I can ship real products and grow fast.
      </p>

      <div className="animate-fade-up delay-300 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="rounded-lg bg-violet-500 px-5 py-2.5 font-medium text-zinc-950 transition hover:bg-violet-400"
        >
          View my work
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-zinc-700 px-5 py-2.5 font-medium text-zinc-200 transition hover:border-zinc-500"
        >
          GitHub
        </a>

      </div>
    </section>
  )
}
