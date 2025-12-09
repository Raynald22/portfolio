import { motion } from "framer-motion";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
};

const testimonialsData: Testimonial[] = [
  // {
  //   name: "Ahmad Syahputra",
  //   role: "Senior Tech Lead",
  //   company: "Ogya Tekno Nusantara",
  //   content:
  //     "Reynaldi consistently delivers high-quality frontend solutions for our government and banking projects. His expertise in Angular and React, combined with his attention to detail, makes him an invaluable team member.",
  //   avatar: "AS",
  // },
  // {
  //   name: "Sarah Wijaya",
  //   role: "Product Manager",
  //   company: "Permata Bank",
  //   content:
  //     "Working with Reynaldi on our internal dashboard was exceptional. He not only understood our complex requirements but also suggested improvements that significantly enhanced user experience and performance.",
  //   avatar: "SW",
  // },
  // {
  //   name: "Budi Santoso",
  //   role: "Project Manager",
  //   company: "Ministry of Finance",
  //   content:
  //     "Reynaldi's work on the SAKTI platform has been outstanding. He handles complex state management and workflows with ease, delivering robust solutions that serve thousands of users daily.",
  //   avatar: "BS",
  // },
];

export function Testimonials() {
  // Don't render section if no testimonials
  if (testimonialsData.length === 0) {
    return null;
  }

  return (
    <section className="py-16 lg:py-20">
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
            What People Say
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-400 light:text-slate-600">
            Testimonials from colleagues and clients I&apos;ve worked with on various projects.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-sm transition-all hover:border-teal-500/30 hover:bg-slate-900/60 light:border-slate-300/80 light:bg-white/80 light:hover:border-teal-500/50 light:hover:bg-white/90"
            >
              {/* Quote Icon */}
              <div className="mb-4 text-3xl text-teal-400/50 light:text-teal-600">
                "
              </div>

              {/* Content */}
              <p className="mb-6 text-sm leading-relaxed text-slate-300 light:text-slate-800">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-slate-800/50 pt-4 light:border-slate-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 via-cyan-400 to-sky-500 text-sm font-semibold text-white shadow-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-200 light:text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-400 light:text-slate-700">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl rounded-xl border border-slate-800/60 bg-slate-900/30 p-6 text-center backdrop-blur-sm light:border-slate-300 light:bg-white/70"
        >
          <p className="text-sm text-slate-400 light:text-slate-700">
            💼 References and detailed recommendations available upon request
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
