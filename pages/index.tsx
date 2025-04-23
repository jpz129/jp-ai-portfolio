export default function Home() {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Juan Pablo Zamanillo</h1>
        <p className="text-lg mb-8 max-w-xl">AI engineer + novelist. I build tools at the edge of creativity and technology.</p>
        <a href="/demo" className="text-blue-600 underline">Try the Prose Generator →</a>
      </main>
    );
  }