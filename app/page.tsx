const highlights = [
  {
    title: "Curated Work Collection",
    description:
      "A complete set of projects gathered in one place so visitors can browse your work with ease.",
  },
  {
    title: "Inline Web Preview",
    description:
      "The work profile is shown directly inside the page without requiring a separate tab.",
  },
  {
    title: "Download Ready",
    description:
      "If a browser does not support embedded PDF previews, users can instantly open or download it.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.25),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.2),_transparent_30%)]" />
      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-10 md:px-10 lg:py-16">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur md:p-12">
          <p className="mb-4 inline-flex rounded-full border border-cyan-300/40 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Work Portfolio
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Explore My Professional Work in a Modern Digital Showcase
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-300 md:text-lg">
            Your profile is displayed directly on this page. If your browser blocks inline
            PDF previews or shows a binary-file error, use the buttons below to open or
            download the document instantly.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/api/work-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Open Full Profile
            </a>
            <a
              href="/api/work-profile"
              download
              className="rounded-full border border-slate-400/50 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Download PDF
            </a>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/30"
            >
              <h2 className="text-lg font-semibold text-cyan-200">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-900/75 p-4 shadow-2xl shadow-purple-500/10 md:p-6">
          <div className="mb-4 flex items-center justify-between gap-4 px-2">
            <h2 className="text-xl font-semibold md:text-2xl">Work Profile Document</h2>
            <span className="rounded-full border border-slate-500/40 px-3 py-1 text-xs text-slate-300">
              Embedded PDF Viewer
            </span>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
            <object
              data="/api/work-profile#toolbar=1&navpanes=0&scrollbar=1"
              type="application/pdf"
              className="h-[75vh] w-full"
              aria-label="Work Profile PDF"
            >
              <div className="flex h-[75vh] flex-col items-center justify-center gap-4 p-6 text-center">
                <p className="max-w-md text-sm text-slate-300">
                  Your browser cannot preview this PDF inline (or returned a binary file
                  not supported message).
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href="/api/work-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Open PDF
                  </a>
                  <a
                    href="/api/work-profile"
                    download
                    className="rounded-full border border-slate-400/50 px-5 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </object>
          </div>
        </section>
      </main>
    </div>
  );
}
