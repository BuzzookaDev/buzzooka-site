import React, { useState, useEffect } from "react";
import {
  Zap,
  Search,
  BarChart3,
  ArrowRight,
  Globe,
  Cpu,
  ShieldCheck,
  Menu,
  X,
  Sun,
  Layout,
  MousePointer2,
  ChevronRight,
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState(null);
  const [url, setUrl] = useState("");

  // JSON-LD Schema Placeholder for SEO
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "BuzzookaDev",
      image: "https://buzzookadev.com/logo.png",
      description:
        "High-performance web development and AI-driven SEO engineered for 2026 growth.",
      url: "https://buzzookadev.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Digital",
        addressCountry: "US",
      },
    });
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    // Logic for SEO Health Check submission
    console.log("Analyzing URL:", url);
    setUrl("");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 selection:text-blue-400">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Zap className="text-white fill-current" size={24} />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">
                Buzzooka<span className="text-blue-500">Dev</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Home
              </a>
              <a
                href="#bundle"
                className="hover:text-blue-400 transition-colors"
              >
                Web + SEO Bundle
              </a>
              <a href="#seo" className="hover:text-blue-400 transition-colors">
                Standalone SEO
              </a>
              <a
                href="#case-studies"
                className="hover:text-blue-400 transition-colors"
              >
                Case Studies
              </a>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                aria-label="Contact BuzzookaDev"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-400"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-4 pb-8 space-y-4 animate-in slide-in-from-top duration-300">
            <a href="#" className="block py-2 text-lg">
              Home
            </a>
            <a href="#bundle" className="block py-2 text-lg">
              Web + SEO Bundle
            </a>
            <a href="#seo" className="block py-2 text-lg">
              Standalone SEO
            </a>
            <a href="#case-studies" className="block py-2 text-lg">
              Case Studies
            </a>
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold">
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/10 blur-[120px] -z-10 rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Next-Gen Growth Agency
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1]">
            We Build Websites That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Outrank Your Competitors.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            High-performance web development and AI-driven SEO engineered for
            2026 growth. Stop settling for a "pretty" site—get a revenue
            machine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105"
              aria-label="Start your project"
            >
              Engineer My Growth <ArrowRight size={20} />
            </button>
            <button
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-lg border border-slate-700"
              aria-label="View our case studies"
            >
              View Case Studies
            </button>
          </div>
        </div>
      </header>

      {/* Service Toggle Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Growth Path
            </h2>
            <p className="text-slate-400">
              Tailored solutions for your current business stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Path 1 */}
            <div
              onMouseEnter={() => setActivePath("new")}
              className={`p-1 rounded-3xl transition-all duration-500 ${
                activePath === "new"
                  ? "bg-gradient-to-br from-blue-500 to-transparent"
                  : "bg-slate-800"
              }`}
            >
              <div className="bg-slate-950 p-8 md:p-12 rounded-[calc(1.5rem-1px)] h-full flex flex-col">
                <div className="w-14 h-14 bg-blue-600/20 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <Layout size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  I Need a New Website
                </h3>
                <p className="text-slate-400 mb-8 flex-grow">
                  Perfect for startups or established brands looking for a 2026
                  digital refresh. We build lightning-fast, conversion-optimized
                  sites from the ground up.
                </p>
                <ul className="space-y-3 mb-10 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <Zap size={16} className="text-blue-500" /> BuzzookaDev
                    High-Speed Framework
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap size={16} className="text-blue-500" /> UI/UX Conversion
                    Engineering
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap size={16} className="text-blue-500" /> 100/100 Core Web
                    Vitals
                  </li>
                </ul>
                <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors">
                  Start Building
                </button>
              </div>
            </div>

            {/* Path 2 */}
            <div
              onMouseEnter={() => setActivePath("leads")}
              className={`p-1 rounded-3xl transition-all duration-500 ${
                activePath === "leads"
                  ? "bg-gradient-to-br from-blue-500 to-transparent"
                  : "bg-slate-800"
              }`}
            >
              <div className="bg-slate-950 p-8 md:p-12 rounded-[calc(1.5rem-1px)] h-full flex flex-col">
                <div className="w-14 h-14 bg-blue-600/20 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  I Have a Website, I Need More Leads
                </h3>
                <p className="text-slate-400 mb-8 flex-grow">
                  Your site is up, but you're invisible. We apply AI-driven SEO
                  and behavioral data to turn your existing traffic into paying
                  customers.
                </p>
                <ul className="space-y-3 mb-10 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <Search size={16} className="text-blue-500" /> Deep-Data AI
                    Keyword Research
                  </li>
                  <li className="flex items-center gap-2">
                    <Search size={16} className="text-blue-500" /> Competitor
                    Domination Strategy
                  </li>
                  <li className="flex items-center gap-2">
                    <Search size={16} className="text-blue-500" /> Semantic
                    Content Engineering
                  </li>
                </ul>
                <button className="w-full py-4 border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-bold rounded-xl transition-colors">
                  Audit My Site
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Built with BuzzookaDev Stack
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                We don't use bloated page builders. We utilize our proprietary
                BuzzookaDev framework paired with AI-driven insights to deliver
                speeds and rankings that standard agencies can't match.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-slate-800 rounded-lg text-blue-500">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">BuzzookaCore</h4>
                    <p className="text-sm text-slate-500">
                      Ultra-lean code architecture
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-slate-800 rounded-lg text-blue-500">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">AI-SEO Lab</h4>
                    <p className="text-sm text-slate-500">
                      Deep-data semantic analysis
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-slate-800 rounded-lg text-blue-500">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Edge Security</h4>
                    <p className="text-sm text-slate-500">
                      24/7 proactive protection
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-slate-800 rounded-lg text-blue-500">
                    <Sun size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Scalable Growth</h4>
                    <p className="text-sm text-slate-500">
                      Ready for 2026 demands
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/20 blur-[80px] rounded-full"></div>
              <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl">
                <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs font-mono text-slate-500 italic">
                    buzzooka_dev_terminal
                  </span>
                </div>
                <div className="space-y-3 font-mono text-sm leading-relaxed">
                  <p className="text-blue-400">
                    $ initializing_buzzooka_engine...
                  </p>
                  <p className="text-slate-300">
                    &gt; Compression:{" "}
                    <span className="text-green-400">98% Efficient</span>
                  </p>
                  <p className="text-slate-300">
                    &gt; SEO Tags:{" "}
                    <span className="text-green-400">AI-Optimized</span>
                  </p>
                  <p className="text-slate-300">
                    &gt; LCP Speed: <span className="text-green-400">0.4s</span>
                  </p>
                  <p className="text-slate-300">
                    &gt; Core Web Vitals:{" "}
                    <span className="text-blue-400">PASSED</span>
                  </p>
                  <div className="h-1 w-full bg-slate-800 rounded-full mt-4 overflow-hidden">
                    <div className="h-full bg-blue-600 w-3/4 animate-[pulse_2s_infinite]"></div>
                  </div>
                  <p className="text-slate-500 mt-4">
                    // Status: Engineering dominant growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Marketing Demo Section (Niche Expertise) */}
      <section className="py-24 bg-blue-600/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Niche Dominance: Solar Marketing
            </h2>
            <p className="text-slate-400">
              See how we build industry-specific SEO engines that capture
              intent.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white mb-6 underline decoration-blue-500 underline-offset-8">
                Solar Installer Lead Engine
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 text-blue-500">
                    <MousePointer2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200">
                      Hyper-Local SEO
                    </h4>
                    <p className="text-sm text-slate-400">
                      We target "Solar Installers near [City]" with dynamic city
                      pages that rank #1 in 60 days.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 text-blue-500">
                    <BarChart3 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200">
                      Incentive Tracking
                    </h4>
                    <p className="text-sm text-slate-400">
                      Automatically updated modules for 2026 tax credits and
                      local solar rebates to drive urgency.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 text-blue-500">
                    <Layout size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200">
                      The Savings Calculator
                    </h4>
                    <p className="text-sm text-slate-400">
                      Custom-built interactive tools that capture user contact
                      info in exchange for ROI projections.
                    </p>
                  </div>
                </div>
              </div>
              <button className="mt-10 px-6 py-3 bg-white text-slate-900 font-bold rounded-xl flex items-center gap-2 hover:bg-blue-100 transition-colors">
                View Solar Blueprint <ChevronRight size={18} />
              </button>
            </div>
            <div className="bg-slate-800 p-8 flex flex-col justify-center border-l border-slate-700">
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-700 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-slate-300">
                    Local Visibility Index
                  </span>
                  <span className="text-green-400 text-sm">+240%</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-slate-800 rounded-full">
                    <div className="h-full bg-blue-500 w-[95%]"></div>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full">
                    <div className="h-full bg-blue-500 w-[88%]"></div>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full">
                    <div className="h-full bg-blue-500 w-[72%]"></div>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full">
                    <div className="h-full bg-blue-500 w-[92%]"></div>
                  </div>
                </div>
                <p className="mt-6 text-xs text-slate-500 italic text-center">
                  Typical performance lift for our solar industry clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet: SEO Health Check */}
      <section className="py-24" id="seo">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-8 md:p-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2.5rem] text-center overflow-hidden shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Globe size={160} />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                Free SEO Health Check
              </h2>
              <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
                Is your website holding back your business? Enter your URL below
                for a deep-dive AI audit of your performance and SEO potential.
              </p>

              <form
                onSubmit={handleLeadSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="url"
                  required
                  placeholder="https://yourwebsite.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-grow px-6 py-4 rounded-xl bg-white text-slate-900 text-lg outline-none focus:ring-4 ring-blue-400/50 transition-all"
                  aria-label="Enter your website URL for an SEO audit"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-slate-950 hover:bg-black text-white font-bold rounded-xl text-lg transition-colors shadow-lg"
                  aria-label="Submit SEO audit request"
                >
                  Analyze Now
                </button>
              </form>
              <p className="mt-6 text-sm text-blue-200">
                No strings attached. Full report delivered in 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="text-white fill-current" size={18} />
                </div>
                <span className="text-xl font-bold tracking-tighter text-white">
                  Buzzooka<span className="text-blue-500">Dev</span>
                </span>
              </div>
              <p className="text-slate-500 max-w-sm">
                Engineering high-performance digital presence for market
                leaders. Based in the future, building for 2026 growth.
              </p>
            </div>
            <div>
              <h5 className="text-white font-bold mb-6">Services</h5>
              <ul className="space-y-4 text-sm text-slate-500">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    AI-Driven SEO
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Conversion Audit
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    PPC Management
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-6">Connect</h5>
              <ul className="space-y-4 text-sm text-slate-500">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    X / Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
            <p>© 2026 BuzzookaDev Agency. All rights engineered.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-400">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-slate-400">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
