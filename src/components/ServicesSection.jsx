/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FaMusic, FaSlidersH, FaHeadphones } from 'react-icons/fa';

const services = [
  {
    icon: <FaMusic className="text-3xl" />,
    title: "Beat Production",
    description: "Custom beat creation tailored to your artistic vision. From boom-bap to trap, I craft beats that elevate your music.",
    features: ["Genre-specific production", "Unlimited revisions", "Stems included"]
  },
  {
    icon: <FaSlidersH className="text-3xl" />,
    title: "Mixing & Mastering",
    description: "Professional audio processing to ensure your tracks sound polished and radio-ready across all platforms.",
    features: ["24-bit/96kHz processing", "Reference track matching", "ISRC codes included"]
  },
  {
    icon: <FaHeadphones className="text-3xl" />,
    title: "Custom Production",
    description: "Full-service production including composition, arrangement, and sound design for a complete musical experience.",
    features: ["Full creative control", "Collaborative process", "Commercial release ready"]
  }
];

const ServicesSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Premium music production services designed to bring your artistic vision to life with professional quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-8 hover:neon-border transition-all duration-300"
            >
              <div className="text-accent mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full glass-effect neon-border py-3 rounded-lg font-medium hover:bg-accent/20 transition-all">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;