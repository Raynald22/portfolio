import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For now, just open email client as fallback
      const mailtoLink = `mailto:reynaldifkr@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        {/* Section Header */}
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl light:text-slate-900">
            Let&apos;s Work Together
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-400 light:text-slate-600">
            Have a project in mind or want to discuss opportunities? I&apos;m always open to
            interesting conversations and collaborations.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
          {/* Contact Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-sm light:border-slate-200 light:bg-white/60"
            >
              <h3 className="text-lg font-semibold text-slate-50 light:text-slate-900">
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:reynaldifkr@gmail.com"
                  className="group flex items-start gap-3 transition-all"
                >
                  <div className="mt-0.5 rounded-lg bg-teal-500/10 p-2 text-teal-400 transition-all group-hover:bg-teal-500/20">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 light:text-slate-600">
                      Email
                    </p>
                    <p className="text-sm text-slate-300 group-hover:text-teal-300 light:text-slate-700 light:group-hover:text-teal-600">
                      reynaldifkr@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/Raynald22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 transition-all"
                >
                  <div className="mt-0.5 rounded-lg bg-teal-500/10 p-2 text-teal-400 transition-all group-hover:bg-teal-500/20">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 light:text-slate-600">
                      GitHub
                    </p>
                    <p className="text-sm text-slate-300 group-hover:text-teal-300 light:text-slate-700 light:group-hover:text-teal-600">
                      github.com/Raynald22
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-lg bg-teal-500/10 p-2 text-teal-400">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 light:text-slate-600">
                      Location
                    </p>
                    <p className="text-sm text-slate-300 light:text-slate-700">
                      Jakarta, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-800/80 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 p-6 backdrop-blur-sm light:border-teal-200 light:from-teal-50 light:to-cyan-50"
            >
              <p className="text-sm font-medium text-slate-300 light:text-slate-700">
                💼 Currently open for freelance projects and full-time opportunities
              </p>
              <p className="mt-2 text-xs text-slate-400 light:text-slate-600">
                Response time: Usually within 24 hours
              </p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-sm lg:p-8 light:border-slate-200 light:bg-white/60"
          >
            {/* Name */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-300 light:text-slate-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full rounded-lg border bg-slate-900/60 px-4 py-2.5 text-sm text-slate-200 transition-all placeholder:text-slate-500 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 light:bg-white/80 light:text-slate-900 ${
                  errors.name
                    ? "border-red-500/50"
                    : "border-slate-800/80 light:border-slate-200"
                }`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-xs text-red-400">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300 light:text-slate-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full rounded-lg border bg-slate-900/60 px-4 py-2.5 text-sm text-slate-200 transition-all placeholder:text-slate-500 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 light:bg-white/80 light:text-slate-900 ${
                  errors.email
                    ? "border-red-500/50"
                    : "border-slate-800/80 light:border-slate-200"
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-xs text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-slate-300 light:text-slate-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full rounded-lg border bg-slate-900/60 px-4 py-2.5 text-sm text-slate-200 transition-all placeholder:text-slate-500 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 light:bg-white/80 light:text-slate-900 ${
                  errors.subject
                    ? "border-red-500/50"
                    : "border-slate-800/80 light:border-slate-200"
                }`}
                placeholder="Project inquiry / Job opportunity / etc."
              />
              {errors.subject && (
                <p className="text-xs text-red-400">{errors.subject}</p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-300 light:text-slate-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full resize-none rounded-lg border bg-slate-900/60 px-4 py-2.5 text-sm text-slate-200 transition-all placeholder:text-slate-500 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 light:bg-white/80 light:text-slate-900 ${
                  errors.message
                    ? "border-red-500/50"
                    : "border-slate-800/80 light:border-slate-200"
                }`}
                placeholder="Tell me about your project or opportunity..."
              />
              {errors.message && (
                <p className="text-xs text-red-400">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition-all hover:shadow-xl hover:shadow-teal-500/40 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {/* Success/Error Message */}
            {submitStatus === "success" && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-emerald-400"
              >
                ✓ Message sent successfully! I&apos;ll get back to you soon.
              </motion.p>
            )}
            {submitStatus === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-red-400"
              >
                ✗ Something went wrong. Please try again or email me directly.
              </motion.p>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
