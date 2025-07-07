import React from "react";
import { X, Check, ArrowRight } from "lucide-react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import AnimatedSection from "@/components/ui/animated-section";

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
      className="text-3xl font-bold inline-flex animate-text-gradient bg-gradient-to-r from-[#9487FC] via-[#6E4DF2] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent mb-2"
    >
      <motion.span>{count}</motion.span>
      {suffix}
    </div>
  );
};

const BeforeAfterSection = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {data.title} <br />
            <span className="inline-flex animate-text-gradient bg-gradient-to-r from-[#9487FC] via-[#6E4DF2] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent">
              {data.subtitle}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Comparison */}
        <div className="max-w-[1100px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 relative">
            {/* Before */}
            <div className="glass-card rounded-2xl p-8 border-red-500/20 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-red-500/20 border border-red-500 rounded-full flex items-center justify-center">
                  <X className="w-4 h-4 text-red-400" />
                </div>
              </div>
              <div className="text-center mb-8 mt-4">
                <h3 className="text-2xl font-bold text-white mb-2">AVANT</h3>
                <p className="text-red-400 font-medium">
                  Gestion traditionnelle chronophage
                </p>
              </div>
              <div className="space-y-4">
                {data.beforeItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-12 h-12 bg-gradient-to-r from-[#6645E8] to-[#6645E8] rounded-full flex items-center justify-center animate-green-glow">
                <ArrowRight className="w-8 h-8 text-green-500 font-bold text-xl" />
              </div>
            </div>

            {/* After */}
            <div className="glass-card rounded-2xl p-8 border-green-500/20 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-green-500/20 border border-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
              </div>
              <div className="text-center mb-8 mt-4">
                <h3 className="text-2xl font-bold text-white mb-2">APRÈS</h3>
                <p className="text-green-400 font-medium">
                  Automatisation intelligente par IA
                </p>
              </div>
              <div className="space-y-4">
                {data.afterItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ROI Section */}
        <div className="mt-16 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Retour sur investissement immédiat
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {data.roiStats.map((stat, index) => (
                <div key={index}>
                  <StatNumber value={stat.value} suffix={stat.suffix || ""} />
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <span
            className="relative inline-block overflow-hidden rounded-full p-[1px]"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-6 sm:px-8 py-2 text-md sm:text-lg font-medium text-gray-50 backdrop-blur-3xl ">
              {data.ctaText}
            </div>
          </span>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
