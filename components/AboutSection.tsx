"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Lightbulb,
  ShieldCheck,
  Compass,
  Users,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Calendar,
  Check,
  MessageSquare
} from "lucide-react";

const values = [
  {
    title: "Innovation",
    desc: "We keep exploring better ways to solve problems.",
    icon: Lightbulb,
    tag: "01"
  },
  {
    title: "Quality",
    desc: "We build products that are dependable and made to last.",
    icon: ShieldCheck,
    tag: "02"
  },
  {
    title: "Simplicity",
    desc: "Great products should be easy to understand and use.",
    icon: Compass,
    tag: "03"
  },
  {
    title: "Customer Focus",
    desc: "Our customers' feedback shapes everything we make.",
    icon: Users,
    tag: "04"
  },
  {
    title: "Integrity",
    desc: "We are honest, transparent and accountable in all we do.",
    icon: CheckCircle2,
    tag: "05"
  }
];

const highlights = [
  "Products designed around real customer needs",
  "Consistent quality from design to delivery",
  "Responsive, friendly customer support",
  "Continuous improvement and new releases"
];

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-[#0A0A0A] text-white border-t border-white/10 py-20 lg:py-28 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIwIDIwdjIwSDIwVjIweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIi8+PC9zdmc+')] opacity-30 pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
      

        {/* Section Title & About Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 items-start">
          <div className="lg:col-span-7">
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight uppercase font-sans">
              About <span className="text-[#AC58E9]">Infinitica</span>
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl border-l-2 border-[#AC58E9] pl-6">
              Infinitica is a product-based company dedicated to creating smart, reliable, and easy-to-use solutions for modern needs. We turn ideas into well-designed products that make everyday work and life simpler.
            </p>
          </div>

          {/* What We Do Card */}
          <div className="lg:col-span-5 bg-[#111] border border-white/10 p-8 sm:p-10 relative overflow-hidden group hover:border-[#AC58E9] transition-all duration-300 hover:shadow-[4px_4px_0_rgba(172,88,233,1)]">
            <div className="relative z-10">
              <span className="text-[10px] font-semibold tracking-widest text-[#AC58E9] uppercase block mb-3">
                Core Function
              </span>
              <h3 className="text-2xl font-semibold text-white tracking-tight mb-4">
                What We Do
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
                We design, build and deliver products that solve real problems. Every product we create goes through careful research, thoughtful design and rigorous testing, so it works the way people expect it to, from day one.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#AC58E9]/20 group-hover:border-[#AC58E9] transition-colors pointer-events-none" />
          </div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Mission */}
          <div className="bg-[#111] border border-white/10 p-8 sm:p-10 flex flex-col justify-between group hover:border-[#AC58E9] transition-all duration-300 hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-semibold tracking-widest text-zinc-400 uppercase border border-white/10 px-3 py-1 group-hover:border-[#AC58E9] group-hover:text-[#AC58E9] transition-colors">
                  Purpose
                </span>
                <span className="text-2xl font-mono text-zinc-600 group-hover:text-[#AC58E9] transition-colors">01</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-4">
                Our Mission
              </h3>
              <p className="text-zinc-400 leading-relaxed font-light">
                To build products that make a real difference by combining innovation, quality and simplicity, and to support our customers every step of the way.
              </p>
            </div>
            <div className="w-12 h-1 bg-[#AC58E9] mt-8 group-hover:w-20 transition-all duration-300" />
          </div>

          {/* Vision */}
          <div className="bg-[#111] border border-white/10 p-8 sm:p-10 flex flex-col justify-between group hover:border-[#AC58E9] transition-all duration-300 hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-semibold tracking-widest text-zinc-400 uppercase border border-white/10 px-3 py-1 group-hover:border-[#AC58E9] group-hover:text-[#AC58E9] transition-colors">
                  Future
                </span>
                <span className="text-2xl font-mono text-zinc-600 group-hover:text-[#AC58E9] transition-colors">02</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-4">
                Our Vision
              </h3>
              <p className="text-zinc-400 leading-relaxed font-light">
                To be a trusted name in product innovation, known for solutions that stand the test of time and grow with the people who use them.
              </p>
            </div>
            <div className="w-12 h-1 bg-white mt-8 group-hover:bg-[#AC58E9] group-hover:w-20 transition-all duration-300" />
          </div>
        </div>

        {/* What We Stand For: Values Matrix */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-white/10 gap-4">
            <div>
              <span className="text-[11px] font-semibold tracking-widest text-[#AC58E9] uppercase block mb-2">
                Guiding Principles
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">
                What We Stand For
              </h3>
            </div>
            <p className="text-zinc-400 text-sm max-w-sm">
              The foundational values that drive every decision, architecture, and feature we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="bg-[#111] border border-white/10 p-6 flex flex-col justify-between group hover:bg-[#161616] hover:border-[#AC58E9] transition-all duration-300 hover:-translate-y-1.5 cursor-default"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 border border-white/10 bg-[#0A0A0A] flex items-center justify-center text-white group-hover:border-[#AC58E9] group-hover:text-[#AC58E9] transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-zinc-600 group-hover:text-[#AC58E9] transition-colors">
                        {val.tag}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-white tracking-tight mb-2">
                      {val.title}
                    </h4>
                    <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                  <div className="h-0.5 w-0 bg-[#AC58E9] group-hover:w-full transition-all duration-500 mt-6" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Infinitica & Get In Touch CTA Card */}
        <div id="contact" className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#111] border border-white/15 p-8 sm:p-12 relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#AC58E9]/15 blur-3xl pointer-events-none" />

          {/* Left: Why Choose Infinitica */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 border border-white/20 text-[10px] font-semibold tracking-widest text-zinc-400 uppercase mb-4">
                The Advantage
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight uppercase mb-6">
                Why Choose Infinitica
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 border border-[#AC58E9] bg-[#AC58E9]/10 flex items-center justify-center flex-shrink-0 text-[#AC58E9]">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-zinc-300 text-sm font-light leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Get in Touch Card */}
          <div className="lg:col-span-5 bg-[#0A0A0A] border border-white/10 p-6 sm:p-8 flex flex-col justify-between relative group hover:border-[#AC58E9] transition-all">
            <div>
              <div className="flex items-center gap-2 text-[#AC58E9] text-xs font-semibold tracking-widest uppercase mb-3">
                <MessageSquare className="w-4 h-4" />
                <span>Get In Touch</span>
              </div>
              <h4 className="text-xl font-medium text-white mb-3">
                Have a question or want to know more about what we do?
              </h4>
              <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6">
                Contact us and our team will be happy to help.
              </p>
            </div>
            
            <Link
              href="mailto:contact@infinitica.com"
              className="inline-flex items-center justify-between bg-white text-black font-semibold text-sm px-6 py-3.5 border border-white hover:bg-[#AC58E9] hover:text-white hover:border-[#AC58E9] transition-all duration-200 tracking-tight group/btn"
            >
              <span>Contact Our Team</span>
              <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

