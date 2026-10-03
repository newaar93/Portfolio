import { projects } from '../data/content'

function StatusBadge({ status }) {
  if (status === 'live') {
    return (
      <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-0.5 text-xs font-medium text-violet-300">
        Live
      </span>
    )
  }
  return (
    <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-300">
      In progress
    </span>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm font-medium uppercase tracking-widest text-violet-400">
        Projects
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight">Things I&apos;ve built</h2>

      <div className="mt-10 grid gap-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 transition hover:border-zinc-700"
          >
                        {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="aspect-[16/6] w-full object-cover"
              />
            ) : (
              <div className="flex aspect-[16/6] items-center justify-center bg-gradient-to-br from-violet-500/15 via-zinc-900 to-zinc-950 text-6xl">
                {project.emoji}
              </div>
            )}

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <StatusBadge status={project.status} />
              </div>

              <p className="mt-3 text-zinc-400">{project.description}</p>

              <ul className="mt-4 space-y-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm text-zinc-300"
                  >
                    <span className="mt-0.5 text-violet-400">▹</span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-violet-500 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:bg-violet-400"
                  >
                    Live demo ↗
                  </a>
                ) : (
                  <span className="cursor-not-allowed rounded-lg border border-zinc-800 px-4 py-2 text-sm text-zinc-600">
                    Live demo — shipping soon
                  </span>
                )}
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-zinc-500"
                >
                  Code ↗
                </a>
              </div>
            </div>
          </article>
        ))}

        {/* Placeholder card — replaced with a real project card on Day 3 */}
        <article className="flex min-h-40 items-center justify-center rounded-2xl border border-dashed border-zinc-800 p-8 text-center text-sm text-zinc-500">
          Projects coming soon — currently in a 5-day build sprint 🚧
        </article>
      </div>
    </section>
  )
}
