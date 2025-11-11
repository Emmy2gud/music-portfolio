/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Vybetha king",
    role: "Afro-rnb Artist",
    content: "Working with Crispin was a game-changer for my career. His beats perfectly complement my style and elevate my music to a whole new level.",
    avatar: "AR"
  },
  {
    id: 2,
    name: "Venoe",
    role: "Alte-R&B Singer",
    content: "The attention to detail and creative approach Crispin brings to every project is unmatched. My album wouldn't have sounded the same without his expertise.",
    avatar: "SC"
  },
  {
    id: 3,
    name: "Ugochukwu Chidi aka $wiss",
    role: "Record Label A&R",
    content: "Crispin consistently delivers high-quality productions that stand out in today's competitive music landscape. A true professional in every sense.",
    avatar: "MJ"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">Testimonials</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear what artists and industry professionals have to say about working with Crispin Beatz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-accent text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-300 italic">"{testimonial.content}"</p>
              
              <div className="flex mt-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;