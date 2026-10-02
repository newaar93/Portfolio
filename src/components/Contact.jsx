import { profile } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-violet-400">
        Contact
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight">
        Let&apos;s build something together
      </h2>
      <p className="mx-auto mt-4 max-w-md text-zinc-400">
        If you&apos;re hiring interns or just want to talk frontend, my inbox
        is open — I reply fast.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-lg bg-violet-500 px-6 py-3 font-medium text-zinc-950 transition hover:bg-violet-400"
        >
          {profile.email}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-zinc-700 px-6 py-3 font-medium text-zinc-200 transition hover:border-zinc-500"
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-zinc-700 px-6 py-3 font-medium text-zinc-200 transition hover:border-zinc-500"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
