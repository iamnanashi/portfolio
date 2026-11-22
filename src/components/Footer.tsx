"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Download,
  ArrowUp,
  Sparkles
} from "lucide-react";
import { useSound } from "./SoundManager";

export default function Footer() {
  const { playClick, playHover, playSuccess } = useSound();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "chauhanshivang4@gmail.com";
  const phone = "+91 91767 88879";

  const emailTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const phoneTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (emailTimer.current) clearTimeout(emailTimer.current);
      if (phoneTimer.current) clearTimeout(phoneTimer.current);
    };
  }, []);

  // navigator.clipboard is undefined on non-HTTPS origins (e.g. LAN preview) and
  // can reject when permission is denied, so fall back to execCommand.
  const copyText = async (text: string): Promise<boolean> => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch {
      // fall through to legacy path
    }
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  };

  const handleCopyEmail = async () => {
    if (!(await copyText(email))) return;
    playSuccess();
    setCopiedEmail(true);
    if (emailTimer.current) clearTimeout(emailTimer.current);
    emailTimer.current = setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = async () => {
    if (!(await copyText(phone))) return;
    playSuccess();
    setCopiedPhone(true);
    if (phoneTimer.current) clearTimeout(phoneTimer.current);
    phoneTimer.current = setTimeout(() => setCopiedPhone(false), 2500);
  };

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative bg-[#050505] text-white pt-24 pb-12 border-t border-white/10 overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#ffff00]/10 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Call To Action Banner */}
        <div className="p-8 sm:p-12 rounded-2xl cyber-glass border border-white/15 mb-16 relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-4 rounded cyber-notch-sm bg-[#ffff00]/10 border border-[#ffff00]/30 text-[#ffff00] font-mono text-xs tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{"// 06 · INITIATE TRANSMISSION"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">
              Ready To Scale Your Next Ambitious Architecture?
            </h2>
            <p className="text-sm sm:text-base text-white/60 leading-relaxed font-sans mb-8">
              Available for full-time staff/lead roles, high-impact architectural consulting, and zero-to-one conversational AI builds. Let&apos;s talk engineering.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                onMouseEnter={playHover}
                className="px-5 py-3 rounded cyber-notch font-mono text-xs font-bold text-black bg-[#ffff00] hover:bg-[#e6e600] transition-all flex items-center gap-2 max-w-full shadow-[0_0_20px_rgba(255,255,0,0.35)]"
              >
                {copiedEmail ? <Check className="w-4 h-4 shrink-0 text-black" /> : <Copy className="w-4 h-4 shrink-0 text-black" />}
                {copiedEmail ? (
                  <span>EMAIL COPIED TO CLIPBOARD!</span>
                ) : (
                  <span className="break-all">
                    COPY EMAIL<span className="hidden sm:inline"> ({email.toUpperCase()})</span>
                  </span>
                )}
              </button>

              {/* Download CV */}
              <a
                href="/Shivang_CV.pdf?v=3"
                download="Shivang_Chauhan_CV.pdf"
                onClick={playClick}
                onMouseEnter={playHover}
                className="px-5 py-3 rounded cyber-notch font-mono text-xs font-medium text-white/90 bg-white/[0.05] hover:bg-white/10 border border-white/20 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Coordinates & Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 font-mono text-xs">
          {/* Email Box */}
          <div className="p-5 rounded-lg bg-white/[0.02] border border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-[#ffff00]/10 text-[#ffff00]">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-white/40 text-[10px]">DIRECT TRANSMISSION</div>
                <a
                  href={`mailto:${email}`}
                  onClick={playClick}
                  className="text-white hover:text-[#ffff00] transition-colors break-all"
                >
                  {email}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-1.5 rounded hover:bg-white/10 text-white/40 hover:text-white transition-colors"
              title="Copy email"
              aria-label="Copy email"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#ffff00]" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Phone Box */}
          <div className="p-5 rounded-lg bg-white/[0.02] border border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-[#ffff00]/10 text-[#ffff00]">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-white/40 text-[10px]">SECURE LINE / WHATSAPP</div>
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  onClick={playClick}
                  className="text-white hover:text-[#ffff00] transition-colors"
                >
                  {phone}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyPhone}
              className="p-1.5 rounded hover:bg-white/10 text-white/40 hover:text-white transition-colors"
              title="Copy phone"
              aria-label="Copy phone"
            >
              {copiedPhone ? <Check className="w-3.5 h-3.5 text-[#ffff00]" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Location Box */}
          <div className="p-5 rounded-lg bg-white/[0.02] border border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-[#ffff00]/10 text-[#ffff00]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-white/40 text-[10px]">HEADQUARTERS</div>
                <div className="text-white">Bangalore, India (IST)</div>
              </div>
            </div>
            <span className="text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-400/10 border border-emerald-400/20">
              REMOTE OK
            </span>
          </div>
        </div>

        {/* Bottom Legal & Back to Top Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/40">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ffff00] animate-pulse" />
            <span>© {new Date().getFullYear()} SHIVANG CHAUHAN // ALL SYSTEMS OPERATIONAL</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${email}`}
              onClick={playClick}
              className="hover:text-white transition-colors"
            >
              EMAIL
            </a>
            <a
              href="/Shivang_CV.pdf?v=3"
              download="Shivang_Chauhan_CV.pdf"
              onClick={playClick}
              className="hover:text-white transition-colors"
            >
              RESUME
            </a>
            <button
              onClick={scrollToTop}
              onMouseEnter={playHover}
              className="flex items-center gap-1.5 text-white/60 hover:text-[#ffff00] transition-colors"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
