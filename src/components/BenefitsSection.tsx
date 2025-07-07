import React from 'react';
import * as Icons from 'lucide-react';
import AnimatedSection from '@/components/ui/animated-section';

const BenefitsSection = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {data.title} <br />
              <span className="inline-flex animate-text-gradient bg-gradient-to-r from-[#9487FC] via-[#6E4DF2] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent">
                en quelques clics
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{data.subtitle}</p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.benefits.map((benefit, index) => {
            const Icon = Icons[benefit.icon] || Icons.Clock;
            const handleMouseMove = (e) => {
              const cardRef = e.currentTarget;
              const shadowRef = cardRef.querySelector('[data-shadow]');
              if (cardRef) {
                const { left, top } = cardRef.getBoundingClientRect();
                const x = e.clientX - left;
                const y = e.clientY - top;
                if (shadowRef) {
                  shadowRef.style.top = `${y}px`;
                  shadowRef.style.left = `${x}px`;
                  shadowRef.style.transform = 'translate(-50%, -50%)';
                  cardRef.style.setProperty('--cursor-x', `${x}px`);
                  cardRef.style.setProperty('--cursor-y', `${y}px`);
                }
              }
            };
            return (
              <AnimatedSection key={index}>
                <div
                  onMouseMove={handleMouseMove}
                  className="relative w-full md:h-56 py-5 px-0 z-20 group overflow-hidden border border-zinc-800 rounded-xl bg-[radial-gradient(500px_circle_at_var(--cursor-x)_var(--cursor-y),#8872FC_0,transparent,transparent_70%)]"
                >
                  <div className="space-y-4 relative z-10 p-5 bg-[linear-gradient(180deg,_rgba(24,_24,_27,_0.00)_0%,_rgba(24,_24,_27,_0.00)_100%)]">
                    <div className="flex items-center mb-6">
                      <div className="text-gray-500 w-12 h-12 rounded-full bg-[linear-gradient(180deg,_rgba(39,_39,_42,_0.68)_0%,_rgba(39,_39,_42,_0.00)_100%)] flex items-center justify-center border border-zinc-700">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="text-md sm:text-xl font-semibold text-white">{benefit.title}</h3>
                        <div className="text-sm text-[#8872FC] font-medium">{benefit.metric}</div>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                  <div
                    data-shadow
                    className="bg-[linear-gradient(180deg,_#1E293B_0%,_rgba(136,114,252,0.00)_137.53%,_rgba(32,_69,_129,_0.00)_195%)] blur-[70px] opacity-0 absolute top-0 left-0 w-4/5 h-4/5 duration-150 group-hover:opacity-90"
                  ></div>
                  <div className="absolute inset-[1px] -z-10 rounded-xl bg-gradient-to-tr from-black/90 via-transparent/80 to-transparent/20"></div>
                  <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#8872FC10_1px,transparent_1px),linear-gradient(to_bottom,#8872FC10_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <span
            className="relative inline-block overflow-hidden rounded-full p-[1px]"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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

export default BenefitsSection;