import map from "@/assets/harta-romania.png";

import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Livrare rapidă și predictibilă pentru orice volum",
  "Reducerea semnificativă a costurilor logistice",
  "Scalare ușoară în funcție de cerere și sezonalitate",
  "Suport dedicat și asistență operațională",
  "Integrare cu platformele tale de vânzare",
  "Acces la tracking în timp real, de oriunde",
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-secondary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              De ce firmele ne aleg
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Mii de afaceri își livrează produsele mai rapid, mai sigur și mai
              eficient datorită serviciilor noastre de distribuție.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <span className="text-lg text-white">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="rounded-2xl bg-gradient-primary p-1 bg-white">
              <img
                className="w-xl mx-auto rounded-2xl border shadow"
                src={map}
                alt="Harta României cu zonele deservite de spațiile de depozitare Comar Net"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
            <div
              className="absolute -top-6 -left-6 h-32 w-32 bg-accent/20 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
