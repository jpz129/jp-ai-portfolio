import { useState } from "react";

export default function Demo() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const res = await fetch("https://prose-gen-app-xyz123-uc.a.run.app/run", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "x-api-key": "your-secret-key" // Uncomment if using key
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setOutput(data.result || "No output.");
    setLoading(false);
  };

  return (
    <main className="min-h-screen p-4 flex flex-col items-center justify-start">
      <h1 className="text-2xl font-semibold mb-4">Prose Generator</h1>
      <textarea
        className="w-full max-w-lg border rounded p-2 mb-4"
        rows={4}
        placeholder="Write a prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded mb-6"
      >
        {loading ? "Generating..." : "Generate"}
      </button>
      <pre className="bg-gray-100 p-4 rounded w-full max-w-lg whitespace-pre-wrap">{output}</pre>
    </main>
  );
}