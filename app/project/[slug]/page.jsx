import { PROJECTS } from '@/config';
import Link from 'next/link';
import Image from 'next/image';
import { assets } from '@/assets/assets';

export default async function ProjectPage({ params }) {
    const { slug } = await params;
    const project = PROJECTS.find(p => p.slug === slug);

    if (!project || !project.details) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-10 text-center">
                <h1 className="text-3xl font-bold text-white mb-4">Project Details Coming Soon</h1>
                <p className="text-slate-400 mb-8 max-w-md">Detailed case study for {project?.title || 'this project'} is currently being written.</p>
                <Link href="/" className="px-6 py-2 bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30 hover:bg-purple-600/40 transition-colors">
                    ← Back to Portfolio
                </Link>
            </div>
        );
    }

    const { details } = project;

    return (
        <main className="min-h-screen bg-[#0a0714] text-slate-300 selection:bg-purple-500/30 pb-24">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-900/10 rounded-full blur-[120px]" />
            </div>

            {/* Navigation Bar */}
            <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5 px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                    <span className="text-xl">←</span> Back Home
                </Link>
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300">
                    <Image src={assets.send_icon} alt="GitHub" className="w-4 brightness-200" /> View Repository
                </a>
            </nav>

            {/* Content Container */}
            <article className="relative z-10 max-w-3xl mx-auto px-6 pt-32 space-y-20">

                {/* --- HEADER --- */}
                <header className="space-y-6 text-center">
                    <div className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-xs font-semibold tracking-wider uppercase mb-2">
                        Case Study
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                        {project.title}
                    </h1>
                    <div className="flex flex-wrap justify-center gap-2 pt-4">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-medium text-slate-300">
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>


                {/* --- 1. PROBLEM & GOAL --- */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-4">1. Problem & Goal</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="glass p-6 rounded-2xl border-l-4 border-l-rose-500/50">
                            <h3 className="text-sm uppercase tracking-widest text-slate-500 mb-3 font-semibold">The Problem</h3>
                            <p className="text-slate-300 leading-relaxed text-sm">{details.problem}</p>
                        </div>
                        <div className="glass p-6 rounded-2xl border-l-4 border-l-emerald-500/50">
                            <h3 className="text-sm uppercase tracking-widest text-slate-500 mb-3 font-semibold">The Goal</h3>
                            <p className="text-slate-300 leading-relaxed text-sm">{details.goal}</p>
                        </div>
                    </div>
                </section>


                {/* --- 2. ARCHITECTURE & REPOSITORY --- */}
                <section className="space-y-10">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-4">2. System Architecture</h2>
                        <div className="glass rounded-2xl p-6 bg-black/40 overflow-x-auto border border-white/5">
                            <pre className="font-mono text-[13px] text-purple-200/80 leading-relaxed whitespace-pre-wrap">
                                {details.architecture}
                            </pre>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h3 className="text-sm uppercase tracking-widest text-slate-500 font-semibold mb-2">Service Communication</h3>
                            <ul className="space-y-2">
                                {details.communication?.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                                        <span className="text-purple-400 shrink-0">⚡</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-sm uppercase tracking-widest text-slate-500 font-semibold mb-2">Repository Structure</h3>
                            <div className="bg-black/60 rounded-xl p-4 border border-white/5 overflow-x-auto">
                                <pre className="font-mono text-[11px] text-slate-300 whitespace-pre">
                                    {details.repositoryStructure}
                                </pre>
                            </div>
                        </div>
                    </div>
                </section>


                {/* --- 3. ENGINEERING HIGHLIGHTS --- */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-4">3. Engineering Highlights</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {details.highlights?.map((item, i) => (
                            <li key={i} className="glass p-4 rounded-xl flex items-start gap-3">
                                <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>
                                <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>


                {/* --- 4. OBSERVABILITY & TESTING --- */}
                <section className="space-y-10">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-4">4. Observability & CI/CD</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="text-sm uppercase tracking-widest text-slate-500 font-semibold">Monitoring</h3>
                                <ul className="space-y-3">
                                    {details.observability?.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 glass px-4 py-3 rounded-lg border border-white/5">
                                            <span className="text-blue-400 shrink-0">📊</span>
                                            <span className="text-xs text-slate-300">{item}</span>
                                        </li>
                                    ))}
                                    {details.customMetric && (
                                        <li className="flex items-center gap-3 glass px-4 py-3 rounded-lg border border-purple-500/20 bg-purple-500/5">
                                            <span className="text-purple-400 shrink-0">🎯</span>
                                            <span className="text-xs text-purple-200">Custom Metric: <code className="bg-black/50 px-1 py-0.5 rounded">{details.customMetric}</code></span>
                                        </li>
                                    )}
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-sm uppercase tracking-widest text-slate-500 font-semibold">CI/CD & Testing</h3>
                                <ul className="space-y-3">
                                    {details.cicd?.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 glass px-4 py-3 rounded-lg border border-white/5">
                                            <span className="text-emerald-400 shrink-0">⚙️</span>
                                            <span className="text-xs text-slate-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="bg-black/80 rounded-lg p-4 border border-white/5">
                                    <pre className="text-xs font-mono text-slate-300 whitespace-pre-wrap">
                                        {details.testing}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* --- 5. PERFORMANCE METRICS --- */}
                {details.performanceMetrics && details.performanceMetrics.length > 0 && (
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-4">5. Performance Metrics</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {details.performanceMetrics.map((metric, i) => (
                                <div key={i} className="glass p-5 rounded-xl border border-indigo-500/20 bg-indigo-900/10">
                                    <div className="text-indigo-400 mb-2">⚡</div>
                                    <p className="text-sm font-medium text-slate-200">{metric}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}


                {/* --- 6. RUN LOCALLY & PORTS --- */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-4">6. Running the System Locally</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h3 className="text-sm uppercase tracking-widest text-slate-500 font-semibold">Docker Compose</h3>
                            <div className="bg-black/80 rounded-xl p-5 border border-white/10">
                                <pre className="text-xs text-emerald-400 font-mono whitespace-pre-wrap">
                                    {details.runLocally}
                                </pre>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-sm uppercase tracking-widest text-slate-500 font-semibold">Ports & API Docs</h3>
                            <ul className="space-y-2">
                                {details.ports?.map((port, i) => (
                                    <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                                        <span className="text-slate-500">🔌</span> {port}
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-2 border-t border-white/10 mt-2 space-y-2">
                                {details.apiDocs?.map((doc, i) => {
                                    const [service, url] = doc.split(' → ');
                                    return (
                                        <div key={i} className="text-xs">
                                            <span className="text-slate-400">{service} → </span>
                                            <a href={url} target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300">{url}</a>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>


                {/* --- 7. FUTURE IMPROVEMENTS --- */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-4">7. Future Enhancements</h2>
                    <div className="flex flex-wrap gap-3">
                        {details.future?.map((item, i) => (
                            <span key={i} className="px-4 py-2 glass rounded-full text-sm text-slate-300 border border-white/5 flex items-center gap-2">
                                <span className="text-rose-400">🚀</span> {item}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Footer CTA */}
                <div className="pt-10 pb-10 text-center border-t border-white/10">
                    <p className="text-slate-400 mb-6">Want to dive deeper into the code?</p>
                    <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition-colors">
                        View Complete Repository <Image src={assets.right_arrow_bold_dark} alt="Arrow" className="w-4" />
                    </a>
                </div>

            </article>
        </main>
    );
}
