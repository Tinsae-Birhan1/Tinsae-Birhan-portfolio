"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Send,
  Download,
  Calendar,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import CodeSectionHeader from "@/components/ui/CodeSectionHeader";

type FormStatus = "idle" | "sending" | "success" | "error";

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

function openMailto(name: string, email: string, message: string) {
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
}

async function parseJsonResponse(response: Response) {
  const raw = await response.text();
  if (!raw) {
    throw new Error("Empty response from contact service.");
  }

  try {
    return JSON.parse(raw) as { success?: boolean; message?: string };
  } catch {
    throw new Error("Unexpected response from contact service.");
  }
}

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const botcheck = String(formData.get("botcheck") ?? "").trim();

    if (botcheck) return;

    setStatus("sending");
    setErrorMessage("");

    if (!accessKey) {
      openMailto(name, email, message);
      form.reset();
      setStatus("success");
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          message,
          subject: `Portfolio message from ${name}`,
          botcheck,
        }),
      });

      const data = await parseJsonResponse(response);

      if (!response.ok || !data.success) {
        throw new Error(data.message ?? "Failed to send message.");
      }

      form.reset();
      setStatus("success");
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
      setStatus("error");
    }
  };

  const buttonLabel =
    status === "sending"
      ? "Sending..."
      : status === "success"
        ? "Message sent. I'll reply soon!"
        : status === "error"
          ? "Try again"
          : null;

  return (
    <section id="contact" className="section-padding border-t border-border">
      <div className="container-max">
        <div className="overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-surface to-surface-elevated p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <CodeSectionHeader
                file="contact/send.ts"
                title="Let's build something together."
                subtitle="I respond within 24 hours. Full time or contract."
              />

              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}?subject=Interview Request, Tinsae Birhan&body=Hi Tinsae, I'd like to discuss an opportunity with you.`}
                  className="btn-primary w-full sm:w-auto"
                >
                  <Calendar size={18} />
                  scheduleInterview()
                </a>
                <a
                  href={siteConfig.resumePath}
                  download={siteConfig.resumeFileName}
                  className="btn-secondary w-full sm:w-auto"
                >
                  <Download size={18} />
                  Download Resume (PDF)
                </a>
              </div>

              <div className="mt-8 space-y-3 text-sm">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-muted hover:text-accent"
                >
                  <Mail size={16} className="text-accent" />
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-muted hover:text-accent"
                >
                  <Phone size={16} className="text-accent" />
                  {siteConfig.phone}
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted hover:text-accent"
                >
                  <Linkedin size={16} className="text-accent" />
                  linkedin.com/in/tinsae-birhan-gebiyaw
                </a>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted hover:text-accent"
                >
                  <Github size={16} className="text-accent" />
                  github.com/Tinsae-Birhan1
                </a>
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <h3 className="mb-1 font-mono text-sm font-semibold">
                sendMessage()
              </h3>
              <p className="mb-6 font-mono text-xs text-syntax-comment">
                {"// recruiters & hiring managers welcome"}
              </p>

              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="mb-4">
                <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-syntax-property">
                  name: string
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  disabled={status === "sending"}
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent disabled:opacity-60"
                  placeholder="Jane Smith, Acme Corp"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-syntax-property">
                  email: string
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  disabled={status === "sending"}
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent disabled:opacity-60"
                  placeholder="jane@company.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-syntax-property">
                  message: string
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  disabled={status === "sending"}
                  className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent disabled:opacity-60"
                  placeholder="Tell me about the role or project..."
                />
              </div>

              {status === "error" && errorMessage && (
                <p className="mb-4 font-mono text-xs text-red-400">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full disabled:opacity-60"
              >
                {buttonLabel ?? (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
