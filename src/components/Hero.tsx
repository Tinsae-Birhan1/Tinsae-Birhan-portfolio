"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { siteConfig, stats } from "@/data/site";
import TrustBar from "@/components/TrustBar";
import HeroCodePanel from "@/components/HeroCodePanel";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden section-padding pt-28 md:pt-32">
      <div className="container-max relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4 font-mono text-sm text-muted"
            >
              <span className="text-accent">$</span> whoami
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-md border border-accent/25 bg-accent-soft px-3 py-1.5 font-mono text-xs font-medium text-accent"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              status: &quot;{siteConfig.availability.toLowerCase()}&quot;
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-[3.25rem]"
            >
              {siteConfig.headline.lead}{" "}
              <span className="text-gradient">
                {siteConfig.headline.highlight}
              </span>{" "}
              {siteConfig.headline.tail}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg leading-relaxed text-muted"
            >
              <span className="font-mono text-sm text-syntax-comment">
                {"// "}
              </span>
              {siteConfig.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#contact" className="btn-primary">
                contact()
                <ArrowRight size={16} />
              </a>
              <a
                href={siteConfig.resumePath}
                download={siteConfig.resumeFileName}
                className="btn-secondary"
              >
                <Download size={16} />
                resume.pdf
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-6 flex flex-wrap gap-4 font-mono text-xs text-muted"
            >
              <span className="flex items-center gap-1.5">
                <MapPin size={12} className="text-accent" />
                {siteConfig.location}
              </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-1.5 transition-colors hover:text-accent"
              >
                <Mail size={12} />
                {siteConfig.email}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="hidden lg:block"
          >
            <HeroCodePanel />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.03 }}
              className="bento-card p-4 text-center md:p-5"
            >
              <div className="font-mono text-2xl font-bold text-gradient md:text-3xl">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="mt-1 font-mono text-[10px] text-muted md:text-xs">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <TrustBar />
    </section>
  );
}
