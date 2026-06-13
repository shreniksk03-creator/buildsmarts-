import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Mr. Vardarajan",
    role: "The Legacy & Guiding Force",
    qualification: "45+ Years Experience",
    bio: "Mentor and guiding force blending time-tested wisdom with innovative thinking.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
  },
  {
    name: "Ms. Sunbul",
    role: "Principal Architect",
    qualification: "M.Arch · 18+ Years Experience",
    bio: "Leads design vision with a refined sense of luxury, function and craft.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
  },
  {
    name: "Ms. Raksha",
    role: "Architect",
    qualification: "B.Arch · 8+ Years Experience",
    bio: "Specialises in residential elevations and contemporary interior planning.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
  },
  {
    name: "Mr. Shivakumar",
    role: "Architect",
    qualification: "B.Arch · 5+ Years Experience",
    bio: "Brings precision drafting and BIM expertise to every drawing set.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
  },
  {
    name: "Mr. Arivu Arasan",
    role: "Technical Head & Managing Partner",
    qualification: "Engineering Excellence",
    bio: "Ensures engineering excellence, on-site precision and quality.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
  },
  {
    name: "Mr. Vishnu Raghavendra",
    role: "Technical Lead",
    qualification: "Site Execution",
    bio: "Known for attention to detail and safety-focused execution.",
    image:
      "https://images.unsplash.com/photo-1699899657680-421c2c2d5064?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
  },
  {
    name: "Mr. Srinivas MV",
    role: "Head of Sales & Marketing",
    qualification: "Strategic Growth",
    bio: "Drives growth through strategic partnerships.",
    image:
      "https://images.unsplash.com/photo-1705645930353-0e335311ef20?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      data-testid="team-section"
      className="relative py-24 lg:py-32 bg-[#0A101C]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="bsi-overline mb-4">Leadership</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            The people behind <br />
            <span className="bsi-gold-text italic">every blueprint.</span>
          </h2>
          <p className="mt-6 text-base text-gray-300 max-w-xl">
            A team that blends decades of construction wisdom with the
            sharp design sensibility of a modern architecture studio.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" data-testid="team-grid">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group relative bg-[#0F172A] border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-500"
              data-testid={`team-card-${i}`}
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-[10px] uppercase tracking-[0.25em] bsi-gold-text">
                  {m.role}
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold text-white">
                  {m.name}
                </h3>
                <div className="mt-1 text-xs text-gray-300">{m.qualification}</div>
                <p className="mt-4 text-sm text-gray-300 leading-relaxed line-clamp-3">
                  {m.bio}
                </p>
                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                    Build Smarts Infra
                  </span>
                  <Linkedin className="w-4 h-4 text-gray-500 group-hover:text-[#D4AF37] transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
