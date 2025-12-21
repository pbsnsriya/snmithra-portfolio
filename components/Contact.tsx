import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', type: 'contract', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest! We will contact you shortly.");
  };

  return (
    <section className="py-24 px-6 bg-mithra-dark relative overflow-hidden" id="contact">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-mithra-primary/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-tech font-bold text-white mb-6">
              Let's Build the <br />
              <span className="text-mithra-primary">Future Together</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Whether you need a full turnkey software solution or robust APIs to power your product, SN Mithra is your technical partner.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-mithra-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Us</p>
                  <p className="font-semibold">solutions@snmithra.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-mithra-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Us</p>
                  <p className="font-semibold">+91 6305164517</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-mithra-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Headquarters</p>
                  <p className="font-semibold"> Hyderabad, Telangana</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-mithra-primary transition-colors"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-mithra-primary transition-colors"
                    placeholder="john@company.com"
                    value={formState.email}
                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Interested In</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormState({ ...formState, type: 'contract' })}
                    className={`py-3 px-4 rounded-xl border transition-all ${formState.type === 'contract'
                      ? 'bg-mithra-primary/20 border-mithra-primary text-white'
                      : 'bg-black/20 border-white/10 text-gray-400 hover:bg-white/5'
                      }`}
                  >
                    Contract Dev
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormState({ ...formState, type: 'subscription' })}
                    className={`py-3 px-4 rounded-xl border transition-all ${formState.type === 'subscription'
                      ? 'bg-mithra-primary/20 border-mithra-primary text-white'
                      : 'bg-black/20 border-white/10 text-gray-400 hover:bg-white/5'
                      }`}
                  >
                    API Subscription
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-mithra-primary transition-colors resize-none"
                  placeholder="Tell us about your project requirements..."
                  value={formState.message}
                  onChange={e => setFormState({ ...formState, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors">
                Send Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;