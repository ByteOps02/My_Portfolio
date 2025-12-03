import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useQuery } from "@tanstack/react-query";
import { type Testimonial } from "@shared/schema";
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const { data: testimonials } = useQuery<Testimonial[]>({ 
    queryKey: ['/api/testimonials'] 
  });

  if (!testimonials) return null;

  return (
    <section className="py-24 container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Client Stories</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Don't just take my word for it. Here's what my collaborators have to say.
        </p>
      </div>

      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 p-4">
              <div className="p-1">
                <Card className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all h-full">
                  <CardContent className="flex flex-col justify-between p-8 h-full min-h-[280px]">
                    <div>
                      <Quote className="h-8 w-8 text-primary/20 mb-4" />
                      <p className="text-lg italic text-muted-foreground mb-6">
                        "{testimonial.content}"
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
