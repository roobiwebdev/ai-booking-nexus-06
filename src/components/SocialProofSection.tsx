import React from "react";
import { Star, Quote } from "lucide-react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import AnimatedSection from "@/components/ui/animated-section";
import { motion as m } from "framer-motion";

const useCountAnimation = (target: number, duration: number = 2) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: duration * 1000,
  });
  const rounded = useTransform(count, (latest) => Math.round(latest));
  React.useEffect(() => {
    if (inView) {
      count.set(target);
    }
  }, [inView, target, count]);
  return { count: rounded, ref };
};

const StatNumber = ({ value, suffix = "" }) => {
  const { count, ref } = useCountAnimation(value);
  return (
    <div
      ref={ref}
      className="inline-flex animate-text-gradient bg-gradient-to-r from-[#9487FC] via-[#6E4DF2] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent text-3xl md:text-4xl font-bold"
    >
      <motion.span>{count}</motion.span>
      {suffix}
    </div>
  );
};

const SocialProofSection = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Stats Bar */}
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-8 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {data.stats.map((stat, i) => (
                <div key={i}>
                  <StatNumber value={stat.value} suffix={stat.suffix || ""} />
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonials */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {data.title} <br />
              <span className="inline-flex animate-text-gradient bg-gradient-to-r from-[#9487FC] via-[#6E4DF2] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent">
                {data.subtitle}
              </span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {data.testimonials.map((testimonial, index) => (
            <AnimatedSection key={index}>
              <motion.div
                className="glass-card rounded-2xl p-6 relative overflow-hidden group border border-[#8872FC]/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#8872FC]/10 to-[#8872FC]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Quote className="w-8 h-8 text-[#8872FC] mb-4" />
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-current"
                    />
                  ))}
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8872FC] to-[#8872FC]/80 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-[#8872FC]">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Partners */}
        <AnimatedSection>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-300 mb-8">
              Partenaires officiels et certifications
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {data.partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg border border-[#8872FC]/20"
                >
                  <span className="text-2xl">{partner.logo}</span>
                  <span className="text-gray-300 font-medium">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SocialProofSection;
