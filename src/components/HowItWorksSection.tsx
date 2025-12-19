import { motion } from "framer-motion";
import { MessageSquare, Sparkles, Map, CreditCard } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Share Your Dreams",
    description: "Tell us about your ideal trip—destinations, interests, budget, and travel style. Our AI learns your preferences.",
    gradient: "bg-gradient-sunset",
  },
  {
    icon: Sparkles,
    title: "AI Magic Happens",
    description: "Our advanced AI analyzes thousands of possibilities to craft a personalized itinerary just for you.",
    gradient: "bg-gradient-ocean",
  },
  {
    icon: Map,
    title: "Explore & Customize",
    description: "Review your AI-generated plan, explore local recommendations, and fine-tune every detail to perfection.",
    gradient: "bg-gradient-sunset",
  },
  {
    icon: CreditCard,
    title: "Book & Go",
    description: "Seamlessly book flights, hotels, and experiences all in one place. Your adventure awaits!",
    gradient: "bg-gradient-ocean",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto section-padding relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            How <span className="text-gradient-ocean">TravelSensei</span> Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From dream to reality in four simple steps
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent z-0" />
              )}

              {/* Card */}
              <div className="bg-gradient-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-glow relative z-10">
                {/* Step Number */}
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center text-sm font-bold text-muted-foreground">
                  {index + 1}
                </span>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${step.gradient} flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Demo Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-gradient-card rounded-3xl p-8 md:p-12 border border-border shadow-elevated"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                AI-Generated Itinerary Preview
              </h3>
              <p className="text-muted-foreground mb-6">
                See how TravelSensei creates personalized day-by-day plans with local insights, 
                optimal timing, and hidden gems you won't find in guidebooks.
              </p>
              <div className="space-y-4">
                {["Personalized recommendations", "Real-time local events", "Budget optimization"].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-sunset" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mock Itinerary */}
            <div className="glass rounded-2xl p-6 space-y-4">
              {[
                { day: "Day 1", title: "Arrival & Temple Tour", time: "9:00 AM - 6:00 PM" },
                { day: "Day 2", title: "Rice Terraces & Cooking Class", time: "7:00 AM - 8:00 PM" },
                { day: "Day 3", title: "Beach Day & Sunset Cruise", time: "10:00 AM - 10:00 PM" },
              ].map((item) => (
                <div key={item.day} className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-gradient-sunset flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">{item.day}</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
