import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Data Scientist & Automation Engineer — I ship reliable ML and ops automation.</h1>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/projects" className="rounded bg-blue-600 px-4 py-2 text-white">View Projects</Link>
          <a href="/resume" className="rounded border px-4 py-2">Download Resume</a>
          <a href="mailto:aj3246@drexel.edu" className="rounded border px-4 py-2">Email Me</a>
        </div>
      </section>
    </main>
  )
}
