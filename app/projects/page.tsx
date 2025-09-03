export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-8 text-3xl font-bold">Projects</h1>
      <ul className="space-y-8">
        <li>
          <h2 className="text-xl font-semibold">High-Speed Inference with Triton & PyTorch</h2>
          <p>Deployed ResNet on NVIDIA Triton; 10,000+ images in &lt;7s; 32% faster training on A100.</p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">Comcast AI Challenge Winner (Philly Codefest 2025)</h2>
          <p>Gen-AI animated video using META AI & Runway; GPT-4 + ElevenLabs for script/voice.</p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">Payroll PDF Automation</h2>
          <p>Converted 1,000+ payroll PDFs into structured JSON with Gemini LLM. $20K+ labor saved.</p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">P&L Dashboards for MitraQSR</h2>
          <p>Dashboards for 178 stores; RAG tool with FAISS; surfaced $12K+ EBITDA gaps.</p>
        </li>
      </ul>
    </main>
  )
}
