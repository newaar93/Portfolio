import { skillGroups } from '../data/content'

// Tech name → logo image (free icon CDN, colored per brand)
const ICONS = {
  'JavaScript (ES2023)': 'https://cdn.simpleicons.org/javascript/F7DF1E',
  'HTML': 'https://cdn.simpleicons.org/html5/E34F26',
  'CSS': 'https://cdn.simpleicons.org/css3/1572B6',
  'React': 'https://cdn.simpleicons.org/react/61DAFB',
  'Tailwind CSS': 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  'Git & GitHub': 'https://cdn.simpleicons.org/git/F05032',
  'Vite': 'https://cdn.simpleicons.org/vite/646CFF',
  'Vercel': 'https://cdn.simpleicons.org/vercel/FFFFFF',
  'Chrome DevTools': 'https://cdn.simpleicons.org/googlechrome/4285F4',
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm font-medium uppercase tracking-widest text-violet-400">
        Skills
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight">
        Tools I work with
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-300">
              {group.label}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                >
                  {ICONS[item] && (
                    <img src={ICONS[item]} alt="" className="h-3.5 w-3.5" />
                  )}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
