import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Code2, FolderGit2, Award, Coffee } from 'lucide-react';

const stats = [
  { label: 'Skills Mastered', value: 8, suffix: '+', icon: Code2, color: 'from-blue-500 to-cyan-500' },
  { label: 'Projects Completed', value: 4, suffix: '+', icon: FolderGit2, color: 'from-purple-500 to-pink-500' },
  { label: 'Certifications Earned', value: 1, suffix: '+', icon: Award, color: 'from-orange-500 to-red-500' },
  { label: 'Cups of Coffee', value: 125, suffix: '+', icon: Coffee, color: 'from-green-500 to-emerald-500' },
];

export default function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-6 md:p-8 text-center hover:scale-105 transition-all duration-300 relative overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Icon */}
                <div className="flex justify-center mb-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-2 relative z-10">
                  {inView ? (
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </h3>
                <p className="text-muted-foreground font-medium text-sm md:text-base relative z-10">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
