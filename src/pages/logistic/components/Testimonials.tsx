import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Andrei Popescu",
    role: "CEO, FreshMarket",
    content:
      "Serviciul lor de distribuție ne-a redus timpii de livrare cu peste 40%. Totul este predictibil, rapid și extrem de bine organizat.",
    rating: 5,
  },
  {
    name: "Ioana Marinescu",
    role: "Fondator, BioCare",
    content:
      "Profesioniști desăvârșiți. Ne-au oferit suport constant și soluții eficiente chiar și în perioadele cu volum mare. Recomand cu încredere!",
    rating: 5,
  },
  {
    name: "Mihai Dumitru",
    role: "Director Logistică, RetailPlus",
    content:
      "Am colaborat cu multe firme de distribuție, dar niciuna nu se compară cu nivelul lor de eficiență și comunicare. Un partener de încredere!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Iubiți de afaceri din toată țara
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nu trebuie să ne crezi pe cuvânt - vezi ce spun clienții noștri
            mulțumiți
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-elegant transition-all duration-300 animate-slide-up border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground/90 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div>
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
