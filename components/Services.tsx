import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, CheckCircle, ArrowRight } from 'lucide-react';
import { ServicePlan } from '../types';

const services: ServicePlan[] = [
  {
    title: "Contract Development",
    type: "contract",
    description: "Full-cycle custom development including high-end Websites (Portfolio, E-commerce), Mobile Apps (iOS, Android), Windows Software, and bespoke AI-ML solutions. We build it, you own it.",
    icon: "code",
    features: [
      "Web: Portfolios & E-commerce",
      "Mobile: Native iOS & Android Apps",
      "Desktop: Windows Applications",
      "AI-ML: Custom Model Integration",
      "100% IP & Source Code Transfer"
    ]
  },
  {
    title: "Subscription & Maintenance",
    type: "subscription",
    description: "Ongoing support and scalable API solutions. We handle the technical maintenance so you can focus on business growth with our plug-and-play services.",
    icon: "cloud",
    features: [
      "Maintenance: Monthly Support Plans",
      "SaaS: Plug-and-Play API Access",
      "Regular Security & Feature Updates",
      "99.9% Uptime SLA Guarantee",
      "Dedicated Technical Support"
    ]
  }
];

// --- MAIN COMPONENT ---

const Services: React.FC = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-mithra-dark overflow-hidden" id="services">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mithra-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-mithra-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-tech font-bold text-white mb-4">
            Our <span className="text-mithra-primary">Engagement Models</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Flexible solutions designed for startups and enterprises alike. From custom builds to ongoing maintenance.
          </p>
        </motion.div>

        {/* Detailed Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:border-mithra-primary/30 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
                {service.icon === 'code' ? <Code size={120} /> : <Cloud size={120} />}
              </div>

              <div className="flex items-center gap-4 mb-6 relative">
                <div className={`p-4 rounded-2xl border bg-white/5 border-white/10 text-white group-hover:border-mithra-primary/50 group-hover:text-mithra-primary transition-colors duration-300`}>
                  {service.icon === 'code' ? <Code size={32} /> : <Cloud size={32} />}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-tech">{service.title}</h3>
                  <span className="text-xs uppercase tracking-widest font-bold text-gray-500 group-hover:text-mithra-primary transition-colors">
                    {service.type === 'contract' ? 'One-time Payment' : 'Recurring Billing'}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed min-h-[60px] relative">
                {service.description}
              </p>

              <ul className="space-y-4 mb-8 relative">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-gray-400 group-hover:text-gray-200 transition-colors">
                    <CheckCircle size={20} className="shrink-0 text-mithra-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-white text-black hover:bg-mithra-primary hover:scale-[1.02]">
                Get Started <ArrowRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;