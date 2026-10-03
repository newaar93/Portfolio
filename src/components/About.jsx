import { profile } from '../data/content'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm font-medium uppercase tracking-widest text-violet-400">
        About
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight">A bit about me</h2>

      <div className="mt-10 grid gap-8 md:grid-cols-[1.5fr,1fr]">
        <div className="space-y-4 text-zinc-400">
                    <p>
            I&apos;m a BCA student at La Grande International College. I got
            into coding purely out of my own interest — started experimenting
            on my own, and never stopped building.
          </p>
          <p>
            My favorite part of frontend is responsive design: making an
            interface feel just right on any screen, from phone to desktop. I
            enjoy the details that make an app look good and work well
            everywhere.
          </p>
          
        </div>

        <dl className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-zinc-500">Location</dt>
            <dd className="text-zinc-200">{profile.location}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-zinc-500">Focus</dt>
            <dd className="text-zinc-200">React · JavaScript · UI</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-zinc-500">Status</dt>
            <dd className="text-violet-300">Seeking internship</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
