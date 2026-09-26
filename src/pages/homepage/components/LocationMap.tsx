import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  company,
  formattedAddress,
  googleDirectionsUrl,
  googleMapsEmbedUrl,
} from "@/config/company";

const LocationMap = () => {
  return (
    <section className="py-12" id="locatie">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span
            className="text-primary text-center font-medium mb-4 block"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="600"
          >
            UNDE NE GĂSIȚI
          </span>
          <h2
            className="text-4xl text-gray-900 text-center font-bold"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="600"
          >
            Sediul și depozitul nostru din Pitești
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div
            className="lg:col-span-3 overflow-hidden rounded-2xl border border-border shadow"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="600"
          >
            <iframe
              title={`Harta cu locația ${company.name} — ${formattedAddress}`}
              src={googleMapsEmbedUrl}
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <address
            className="lg:col-span-2 not-italic flex flex-col justify-center gap-6 rounded-2xl border border-border bg-white p-8 shadow-sm"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="600"
          >
            <div className="flex gap-4">
              <MapPin className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-semibold text-gray-900">Adresă</p>
                <p className="text-gray-600">{company.address.street}</p>
                <p className="text-gray-600">
                  {company.address.locality}, județul {company.address.region},{" "}
                  {company.address.postalCode}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-semibold text-gray-900">Telefon</p>
                <a
                  href={`tel:${company.phone}`}
                  className="text-gray-600 transition-colors hover:text-primary"
                >
                  {company.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <a
                  href={`mailto:${company.email}`}
                  className="text-gray-600 transition-colors hover:text-primary"
                >
                  {company.email}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-semibold text-gray-900">Program</p>
                <p className="text-gray-600">{company.openingHoursDisplay}</p>
              </div>
            </div>

            <Button asChild variant="gold" size="lg" className="mt-2 gap-2">
              <a
                href={googleDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Obține indicații rutiere
              </a>
            </Button>
          </address>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
