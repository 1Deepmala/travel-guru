import { motion } from "framer-motion";
import { ArrowUpRight, Star, MapPin } from "lucide-react";
import baliImg from "@/assets/destination-bali.jpg";
import tokyoImg from "@/assets/destination-tokyo.jpg";
import peruImg from "@/assets/destination-peru.jpg";
import icelandImg from "@/assets/destination-iceland.jpg";

const destinations = [
  {
    name: "Bali, Indonesia",
    description: "Tropical paradise with ancient temples",
    image: baliImg,
    rating: 4.9,
    trips: "12K+ trips",
    featured: true,
  },
  {
    name: "Tokyo, Japan",
    description: "Where tradition meets innovation",
    image: tokyoImg,
    rating: 4.8,
    trips: "15K+ trips",
    featured: false,
  },
  {
    name: "Machu Picchu, Peru",
    description: "Ancient wonders in the clouds",
    image: peruImg,
    rating: 4.9,
    trips: "8K+ trips",
    featured: false,
  },
  {
    name: "Iceland",
    description: "Northern lights & natural wonders",
    image: icelandImg,
    rating: 4.7,
    trips: "6K+ trips",
    featured: false,
  },
];

export default function DestinationsSection() {
  return (
    <section id="destinations" className="py-24 bg-gradient-dark">
      <div className="container mx-auto section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Trending <span className="text-gradient-sunset">Destinations</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the world's most captivating places, curated by AI and loved by travelers
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                dest.featured ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${dest.featured ? "h-[500px]" : "h-[300px]"}`}>
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full glass">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <span className="text-sm font-medium text-foreground">{dest.rating}</span>
                </div>

                {/* Info */}
                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{dest.trips}</span>
                  </div>
                  <h3 className={`font-display font-bold text-foreground mb-2 ${
                    dest.featured ? "text-3xl" : "text-xl"
                  }`}>
                    {dest.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{dest.description}</p>
                  
                  {/* Explore Button */}
                  <div className="flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Explore destination</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
