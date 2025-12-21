import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

// Enhanced Project Data
const projects: Project[] = [
  {
    id: 1,
    title: "FinTech Core",
    category: "Contract Development",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1600",
    description: "A complete banking ledger system built for a regional bank. Handed over with 100% source code ownership. Engineered for sub-millisecond latency and full regulatory compliance."
  },
  {
    id: 2,
    title: "DataStream API",
    category: "API Subscription",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600",
    description: "Real-time market analytics API serving over 500,000 requests per day for trading firms. Provides structured insights via secure REST and gRPC endpoints."
  },
  {
    id: 3,
    title: "MediVault System",
    category: "Contract Development",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600",
    description: "HIPAA-compliant patient record ecosystem with blockchain-backed audit logs. Includes native mobile apps for secure doctor-patient interaction."
  },
  {
    id: 4,
    title: "Urban Grid IoT",
    category: "Contract Development",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1600",
    description: "Smart city dashboard controlling 50,000+ nodes. Edge computing protocols reduce latency for real-time traffic and utility management."
  },
];

const Projects: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-black relative" id="portfolio">
      {/* Header matching the design */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-4xl md:text-6xl font-tech font-bold text-white mb-2">
          Selected <span className="text-mithra-primary">Works</span>
        </h2>
        <div className="h-1.5 w-24 bg-mithra-primary rounded-full"></div>
      </div>

      {/* Card Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden hover:border-mithra-primary/50 transition-all duration-300 flex flex-col"
          >
            {/* Image Area with Overlay Badge */}
            <div className="relative h-72 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark gradient overlay for text readability if needed, though badge has its own background */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

              {/* Category Badge */}
              <div className="absolute bottom-4 left-4">
                <span className="bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8 flex-1 flex flex-col items-start">
              <h3 className="text-2xl font-bold text-white mb-3 font-tech group-hover:text-mithra-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                {project.description}
              </p>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;