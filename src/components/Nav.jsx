import { profile } from '../data/content'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-zinc-950/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="text-lg font-semibold tracking-tight">
          {profile.name.split(' ')[0]}
          <span className="text-violet-400">.</span>
        </a>
        <ul className="flex items-center gap-6 text-sm text-zinc-400">
          {links.map((link) => (
            <li key={link.href} className="hidden sm:block">
              <a href={link.href} className="transition-colors hover:text-zinc-100">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-full bg-violet-500 px-4 py-1.5 font-medium text-zinc-950 transition hover:bg-violet-400"
            >
              Hire me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
