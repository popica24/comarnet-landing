import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { SEO } from "@/seo/pages";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const NotFound = () => {
  useSEO(SEO.notFound);
  return (
    <main className="min-h-screen flex items-center justify-center pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-primary font-medium mb-4 block">EROARE 404</span>
        <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
          Pagina nu a fost găsită
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Pagina pe care o căutați nu există sau a fost mutată. Vă invităm să
          descoperiți serviciile noastre de distribuție, logistică și depozitare.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="gold" className="group rounded-full">
            <Link to="/">
              Înapoi la pagina principală
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/servicii">Vezi serviciile</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
