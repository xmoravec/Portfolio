export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-16 sm:px-10 lg:px-12">
      <section className="flex flex-1 flex-col justify-center gap-6">
        <p className="text-sm font-medium tracking-wide text-zinc-500">
          Professional Portfolio
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          Building reliable software with a clear product mindset.
        </h1>
        <p className="max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
          This site is the stable public face of my work. I ship practical
          products, document engineering decisions, and share what I am learning.
        </p>
      </section>
    </main>
  );
}
