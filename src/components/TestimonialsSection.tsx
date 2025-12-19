import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    location: "San Francisco, CA",
    avatar: "SC",
    rating: 5,
    text: "TravelSensei planned our honeymoon to Japan and it was absolutely perfect. Every restaurant, every temple, every hidden spot was exactly what we wanted.",
    trip: "Tokyo & Kyoto, 14 days",
  },
  {
    name: "Marcus Johnson",
    location: "London, UK",
    avatar: "MJ",
    rating: 5,
    text: "The AI understood my adventure style immediately. My Iceland trip had the perfect balance of glaciers, hot springs, and northern lights chasing.",
    trip: "Iceland Ring Road, 10 days",
  },
  {
    name: "Elena Rodriguez",
    location: "Miami, FL",
    avatar: "ER",
    rating: 5,
    text: "I've used many travel apps, but nothing compares to TravelSensei. The local recommendations were spot-on and saved me so much planning time.",
    trip: "Bali & Lombok, 12 days",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="community" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto section-padding relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Loved by <span className="text-gradient-sunset">Travelers</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of adventurers who've discovered their perfect trips with TravelSensei
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-500 group"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Trip Badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground mb-6">
                {testimonial.trip}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-sunset flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-foreground">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
