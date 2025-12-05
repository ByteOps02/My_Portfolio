import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { label: 'Skills Mastered', value: 12, suffix: '+' },
  { label: 'Projects Completed', value: 15, suffix: '+' },
  { label: 'Certifications Earned', value: 1, suffix: '+' },
  { label: 'Cups of Coffee', value: 200, suffix: '+' },
];

export default function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section className="py-12 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-2">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </h3>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
