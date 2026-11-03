"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  Building2,
  Globe,
  Compass,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Layers
} from "lucide-react";

interface OfficeLocation {
  id: string;
  city: string;
  country: string;
  badge: string;
  name: string;
  addressLine1: string;
  addressLine2: string;
  postalCode: string;
  coordinates: string;
  phone: string;
  email: string;
  hours: string;
  transit: string;
  mapQuery: string;
}

const officeLocations: OfficeLocation[] = [
  {
    id: "sf",
    city: "San Francisco",
    country: "United States",
    badge: "Global Headquarters",
    name: "Infinitica Technologies Inc.",
    addressLine1: "500 Howard Street, Suite 400",
    addressLine2: "South of Market (SoMa)",
    postalCode: "San Francisco, CA 94105",
    coordinates: "37.7891° N, 122.3972° W",
    phone: "+1 (415) 890-4210",
    email: "sf@infinitica.com",
    hours: "09:00 - 18:00 PST (Mon - Fri)",
    transit: "Transbay Transit Center / Montgomery BART (3 min walk)",
    mapQuery: "500+Howard+St+Suite+400+San+Francisco+CA+94105"
  },
  {
    id: "blr",
    city: "Bengaluru",
    country: "India",
    badge: "Engineering & AI Labs",
    name: "Infinitica Labs Pvt. Ltd.",
    addressLine1: "Level 6, Prestige Tech Park, Outer Ring Road",
    addressLine2: "Kadubeesanahalli, Marathahalli",
    postalCode: "Bengaluru, Karnataka 560103",
    coordinates: "12.9352° N, 77.6946° E",
    phone: "+91 (80) 4590-2100",
    email: "blr@infinitica.com",
    hours: "09:30 - 18:30 IST (Mon - Fri)",
    transit: "Outer Ring Road Metro Line / Prestige Tech Hub Feeder",
    mapQuery: "Prestige+Tech+Park+Outer+Ring+Rd+Bengaluru+560103"
  },
  {
    id: "lon",
    city: "London",
    country: "United Kingdom",
    badge: "EMEA Regional Hub",
    name: "Infinitica UK Ltd.",
    addressLine1: "100 Bishopsgate, Level 19",
    addressLine2: "City of London",
    postalCode: "London EC2N 4AG",
    coordinates: "51.5154° N, 0.0825° W",
    phone: "+44 (20) 7946-0812",
    email: "emea@infinitica.com",
    hours: "09:00 - 17:30 GMT (Mon - Fri)",
    transit: "Liverpool Street Station (2 min walk) / Bank Station",
    mapQuery: "100+Bishopsgate+London+EC2N+4AG"
  }
];

export default function ContactPage() {
  const [activeOffice, setActiveOffice] = useState<string>("sf");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "Enterprise Solutions",
    message: ""
  });

  const selectedOffice = officeLocations.find((o) => o.id === activeOffice) || officeLocations[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-black text-white flex flex-col min-h-screen font-sans antialiased selection:bg-violet-500/30 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero Section */}
        <section className="relative w-full bg-[#0A0A0A] border-b border-white/10 py-16 sm:py-24 overflow-hidden">
          {/* Subtle Grid texture */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIwIDIwdjIwSDIwVjIweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIi8+PC9zdmc+')] opacity-40 pointer-events-none z-0" />
          
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111] border border-[#AC58E9]/40 text-[#AC58E9] text-xs font-semibold tracking-widest uppercase mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Contact & Global Presence</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.95] mb-6">
                Let&apos;s Build <br />
                <span className="text-[#AC58E9]">Without Boundaries</span>
              </h1>
              <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed border-l-2 border-[#AC58E9] pl-6 max-w-2xl">
                Whether you have an inquiry regarding enterprise AI products, partnerships, or wish to schedule a consultation with our engineers, our teams across three continents are ready to assist.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Quick Channels Grid */}
        <section className="w-full bg-black py-16 lg:py-20 border-b border-white/10">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              
              {/* Left Column: Interactive Contact Form */}
              <div className="lg:col-span-7 bg-[#0E0E0E] border border-white/10 p-8 sm:p-12 relative">
                <div className="mb-8">
                  <span className="text-xs font-mono text-[#AC58E9] uppercase tracking-wider block mb-2">01 / Direct Transmission</span>
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white uppercase">
                    Send a Message
                  </h2>
                  <p className="text-zinc-400 text-sm font-light mt-2">
                    Fill out the form below. Our response time is typically within 2-4 business hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="bg-[#141414] border border-[#AC58E9] p-8 sm:p-12 text-center flex flex-col items-center">
                    <div className="w-14 h-14 bg-[#AC58E9]/20 border border-[#AC58E9] flex items-center justify-center text-[#AC58E9] mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
                    <p className="text-zinc-400 text-sm max-w-md mb-6 font-light leading-relaxed">
                      Thank you for contacting Infinitica, <span className="text-white font-medium">{formData.name || "friend"}</span>. An assigned specialist from our team will follow up via <span className="text-white font-medium">{formData.email || "email"}</span> shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#AC58E9] hover:text-white transition-colors border border-white"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                          Your Name <span className="text-[#AC58E9]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Alex Morgan"
                          className="w-full bg-[#161616] border border-white/10 px-4 py-3.5 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#AC58E9] transition-colors rounded-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                          Work Email <span className="text-[#AC58E9]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@enterprise.com"
                          className="w-full bg-[#161616] border border-white/10 px-4 py-3.5 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#AC58E9] transition-colors rounded-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Corp"
                          className="w-full bg-[#161616] border border-white/10 px-4 py-3.5 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#AC58E9] transition-colors rounded-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                          Inquiry Type
                        </label>
                        <select
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full bg-[#161616] border border-white/10 px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#AC58E9] transition-colors rounded-none"
                        >
                          <option>Enterprise AI Solutions</option>
                          <option>Product Inquiries</option>
                          <option>Strategic Partnership</option>
                          <option>Media & Press</option>
                          <option>Careers & Talent</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                        Message <span className="text-[#AC58E9]">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project, system requirements, or inquiries..."
                        className="w-full bg-[#161616] border border-white/10 p-4 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#AC58E9] transition-colors resize-none rounded-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 font-semibold text-sm uppercase tracking-wider hover:bg-[#AC58E9] hover:text-white hover:border-[#AC58E9] transition-all duration-200 border border-white rounded-none shadow-[4px_4px_0_rgba(172,88,233,0.5)] active:translate-x-0.5 active:translate-y-0.5"
                    >
                      <span>Transmit Request</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>

              {/* Right Column: Direct Channels & Operational Info */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                
                {/* Channel 1: Primary Communications */}
                <div className="bg-[#111] border border-white/10 p-8 hover:border-[#AC58E9] transition-all group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#AC58E9] uppercase tracking-wider">Communication Lines</span>
                    <Mail className="w-5 h-5 text-zinc-400 group-hover:text-[#AC58E9] transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Direct Email Inboxes</h3>
                  
                  <div className="space-y-4 text-sm">
                    <div className="pb-3 border-b border-white/5">
                      <span className="text-xs text-zinc-500 uppercase block mb-1">General Inquiries</span>
                      <a href="mailto:contact@infinitica.com" className="text-zinc-200 hover:text-[#AC58E9] transition-colors font-mono">
                        contact@infinitica.com
                      </a>
                    </div>
                    <div className="pb-3 border-b border-white/5">
                      <span className="text-xs text-zinc-500 uppercase block mb-1">Enterprise & Sales</span>
                      <a href="mailto:sales@infinitica.com" className="text-zinc-200 hover:text-[#AC58E9] transition-colors font-mono">
                        sales@infinitica.com
                      </a>
                    </div>
                    <div>
                      <span className="text-xs text-zinc-500 uppercase block mb-1">Press & Media</span>
                      <a href="mailto:press@infinitica.com" className="text-zinc-200 hover:text-[#AC58E9] transition-colors font-mono">
                        press@infinitica.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Channel 2: Telephone & Hours */}
                <div className="bg-[#111] border border-white/10 p-8 hover:border-[#AC58E9] transition-all group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#AC58E9] uppercase tracking-wider">Telephony & Availability</span>
                    <Phone className="w-5 h-5 text-zinc-400 group-hover:text-[#AC58E9] transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Global Voice Support</h3>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed mb-4">
                    Direct phone lines for enterprise accounts and urgent escalations.
                  </p>
                  
                  <div className="space-y-3 font-mono text-sm text-zinc-200">
                    <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                      <span className="text-xs text-zinc-400 font-sans">Americas:</span>
                      <a href="tel:+14158904210" className="hover:text-[#AC58E9]">+1 (415) 890-4210</a>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                      <span className="text-xs text-zinc-400 font-sans">Asia-Pacific:</span>
                      <a href="tel:+918045902100" className="hover:text-[#AC58E9]">+91 (80) 4590-2100</a>
                    </div>
                    <div className="flex justify-between items-center py-1.5">
                      <span className="text-xs text-zinc-400 font-sans">EMEA:</span>
                      <a href="tel:+442079460812" className="hover:text-[#AC58E9]">+44 (20) 7946-0812</a>
                    </div>
                  </div>
                </div>

                {/* Response Guarantee Badge */}
                <div className="bg-gradient-to-r from-[#111] to-[#1A1122] border border-[#AC58E9]/30 p-6 flex items-center gap-4">
                  <div className="w-10 h-10 border border-[#AC58E9] flex items-center justify-center text-[#AC58E9] shrink-0 bg-[#AC58E9]/10">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">SLA Response Guarantee</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Enterprise inquiries receive guaranteed acknowledgment within 2 hours.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* COMPREHENSIVE ADDRESS & PHYSICAL LOCATIONS SECTION */}
        <section id="address" className="w-full bg-[#0A0A0A] py-20 lg:py-28 relative">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Heading */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-mono text-[#AC58E9] uppercase tracking-wider mb-2">
                  <Building2 className="w-4 h-4" />
                  Physical Infrastructure & Addresses
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
                  Global Office Locations
                </h2>
              </div>
              <p className="text-zinc-400 text-sm sm:text-base max-w-md font-light leading-relaxed">
                Visit our physical campuses and research labs. In-person meetings are hosted by scheduled appointment.
              </p>
            </div>

            {/* City Selector Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              {officeLocations.map((office) => {
                const isActive = activeOffice === office.id;
                return (
                  <button
                    key={office.id}
                    onClick={() => setActiveOffice(office.id)}
                    className={`text-left p-6 border transition-all duration-300 relative rounded-none cursor-pointer ${
                      isActive
                        ? "bg-[#151515] border-[#AC58E9] shadow-[4px_4px_0_rgba(172,88,233,1)]"
                        : "bg-[#101010] border-white/10 hover:border-white/30 hover:bg-[#141414]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] uppercase font-semibold tracking-widest px-2.5 py-0.5 border ${
                        isActive
                          ? "bg-[#AC58E9]/20 border-[#AC58E9] text-white"
                          : "border-white/10 text-zinc-400"
                      }`}>
                        {office.badge}
                      </span>
                      <MapPin className={`w-4 h-4 ${isActive ? "text-[#AC58E9]" : "text-zinc-500"}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {office.city}
                    </h3>
                    <p className="text-zinc-400 text-xs mt-1 uppercase tracking-wider font-mono">
                      {office.country}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Detailed Address Dossier Card */}
            <div className="bg-[#111] border border-white/15 p-8 sm:p-12 relative overflow-hidden">
              {/* Background Geometric Accent */}
              <div className="absolute top-0 right-0 w-80 h-80 border-b border-l border-white/5 pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#AC58E9]/10 blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
                
                {/* Left Detail Panel: Full Mailing Address & Coordinates */}
                <div className="lg:col-span-7 space-y-8">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#AC58E9] uppercase tracking-wider mb-2">
                      <Compass className="w-4 h-4" />
                      <span>Coordinates: {selectedOffice.coordinates}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-2">
                      {selectedOffice.name}
                    </h3>
                    <div className="text-lg sm:text-xl text-zinc-200 font-light leading-snug space-y-1 mt-4 border-l-2 border-[#AC58E9] pl-6">
                      <p className="font-normal text-white">{selectedOffice.addressLine1}</p>
                      <p className="text-zinc-300">{selectedOffice.addressLine2}</p>
                      <p className="text-zinc-400">{selectedOffice.postalCode}</p>
                      <p className="text-[#AC58E9] font-medium text-base pt-1">{selectedOffice.country}</p>
                    </div>
                  </div>

                  {/* Operational Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                    <div>
                      <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-zinc-400" /> Visiting Hours
                      </span>
                      <p className="text-sm text-zinc-200 font-mono">
                        {selectedOffice.hours}
                      </p>
                      <p className="text-xs text-zinc-500 mt-1">Visits strictly by prior appointment</p>
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-zinc-400" /> Transit & Arrival
                      </span>
                      <p className="text-sm text-zinc-200 font-light">
                        {selectedOffice.transit}
                      </p>
                    </div>
                  </div>

                  {/* Direct Actions */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${selectedOffice.mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-black font-semibold text-xs uppercase tracking-wider px-6 py-3.5 hover:bg-[#AC58E9] hover:text-white hover:border-[#AC58E9] transition-all border border-white rounded-none"
                    >
                      <span>Open in Google Maps</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <a
                      href={`mailto:${selectedOffice.email}`}
                      className="inline-flex items-center gap-2 bg-[#161616] text-zinc-200 font-medium text-xs uppercase tracking-wider px-6 py-3.5 hover:bg-white hover:text-black transition-all border border-white/15 rounded-none"
                    >
                      <span>Email Office Reception</span>
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Right Interactive Radar/Map Frame */}
                <div className="lg:col-span-5 bg-[#0A0A0A] border border-white/10 p-6 flex flex-col justify-between relative group">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Station Live Status
                    </span>
                    <span>HUB ID: {selectedOffice.id.toUpperCase()}-09</span>
                  </div>

                  {/* Stylized Architectural Location Display */}
                  <div className="my-8 py-8 px-6 border border-white/5 bg-[#0D0D0D] relative flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 border-2 border-[#AC58E9] flex items-center justify-center mb-4 text-[#AC58E9] shadow-[0_0_20px_rgba(172,88,233,0.3)]">
                      <Globe className="w-8 h-8" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white uppercase">{selectedOffice.city} Hub</span>
                    <span className="text-xs font-mono text-[#AC58E9] mt-1">{selectedOffice.coordinates}</span>
                    <p className="text-xs text-zinc-500 mt-4 max-w-xs font-light">
                      Security Check-in: Reception Lobby on Floor {selectedOffice.id === "blr" ? "6" : selectedOffice.id === "lon" ? "19" : "4"}. Government-issued photo ID required.
                    </p>
                  </div>

                  {/* Local Contacts */}
                  <div className="space-y-2 text-xs font-mono text-zinc-400 pt-4 border-t border-white/10">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Local Desk:</span>
                      <span className="text-zinc-200">{selectedOffice.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Security / Logistics:</span>
                      <span className="text-zinc-200">{selectedOffice.email}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Visiting Protocol Notes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-[#111] border border-white/10 p-6">
                <span className="text-xs font-mono text-[#AC58E9] uppercase tracking-wider block mb-2">Protocol 01</span>
                <h4 className="text-base font-semibold text-white mb-2">Appointment First</h4>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                  To ensure engineering and executive availability, campus visits must be scheduled at least 48 hours in advance.
                </p>
              </div>

              <div className="bg-[#111] border border-white/10 p-6">
                <span className="text-xs font-mono text-[#AC58E9] uppercase tracking-wider block mb-2">Protocol 02</span>
                <h4 className="text-base font-semibold text-white mb-2">Visitor Identification</h4>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                  Building security requires government-issued identification upon sign-in at reception to issue digital security badges.
                </p>
              </div>

              <div className="bg-[#111] border border-white/10 p-6">
                <span className="text-xs font-mono text-[#AC58E9] uppercase tracking-wider block mb-2">Protocol 03</span>
                <h4 className="text-base font-semibold text-white mb-2">Accessibility & Transit</h4>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                  All Infinitica facilities offer full ADA/wheelchair accessibility, visitor parking, and immediate proximity to rapid transit.
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

