import LegalPage from "@/components/LegalPage";
import { useSEO } from "@/hooks/useSEO";
import { company, formattedAddress } from "@/config/company";
import { pageBreadcrumbs, webPageSchema } from "@/lib/schema";

const PATH = "/anpc";
const TITLE = "ANPC și Soluționarea Litigiilor";
const DESCRIPTION = `Informații ANPC pentru clienții ${company.legalName}: cum ne transmiteți o reclamație și cum accesați platformele SAL și SOL pentru soluționarea alternativă a litigiilor.`;

const breadcrumbs = [{ name: "ANPC", path: PATH }];

const schema = [
  pageBreadcrumbs(breadcrumbs),
  webPageSchema({ name: TITLE, description: DESCRIPTION, path: PATH }),
];

const Anpc = () => {
  useSEO({
    title: TITLE,
    description: DESCRIPTION,
    keywords: "ANPC, SAL, SOL, protectia consumatorilor, reclamatii",
    canonical: PATH,
    schema,
  });

  return (
    <LegalPage
      title={TITLE}
      intro="Dacă aveți o nemulțumire legată de serviciile noastre, mai jos găsiți atât modalitatea de a ne contacta direct, cât și căile oficiale de soluționare a litigiilor."
      lastUpdated="17 august 2026"
      breadcrumbs={breadcrumbs}
    >
      <section>
        <h2>1. Contactați-ne mai întâi pe noi</h2>
        <p>
          Cele mai multe situații se rezolvă rapid printr-o discuție directă. Vă
          rugăm să ne transmiteți sesizarea dumneavoastră la adresa{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a> sau telefonic
          la <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>,{" "}
          {company.openingHoursDisplay.toLowerCase()}. Ne angajăm să analizăm
          fiecare reclamație și să revenim cu un răspuns în cel mai scurt timp
          posibil.
        </p>
        <p>
          Sesizările pot fi transmise și în scris, la sediul nostru din{" "}
          {formattedAddress}.
        </p>
      </section>

      <section>
        <h2>2. Autoritatea Națională pentru Protecția Consumatorilor</h2>
        <p>
          ANPC este autoritatea publică ce protejează drepturile consumatorilor
          în România. Dacă nu ați primit un răspuns satisfăcător din partea
          noastră, vă puteți adresa direct autorității:
        </p>
        <ul>
          <li>
            Site oficial:{" "}
            <a
              href="https://anpc.ro"
              target="_blank"
              rel="noopener noreferrer"
            >
              anpc.ro
            </a>
          </li>
          <li>
            Formular de reclamații:{" "}
            <a
              href="https://reclamatiisal.anpc.ro"
              target="_blank"
              rel="noopener noreferrer"
            >
              reclamatiisal.anpc.ro
            </a>
          </li>
          <li>
            Comisariatul Regional pentru Protecția Consumatorilor competent
            teritorial pentru județul {company.address.region}
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Soluționarea Alternativă a Litigiilor (SAL)</h2>
        <p>
          Conform Ordonanței Guvernului nr. 38/2015 privind soluționarea
          alternativă a litigiilor dintre consumatori și comercianți, aveți
          dreptul de a apela la o procedură extrajudiciară, gratuită sau cu
          costuri reduse, pentru rezolvarea disputei.
        </p>
        <p>
          Platforma SAL este disponibilă la adresa{" "}
          <a
            href="https://anpc.ro/ce-este-sal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            anpc.ro/ce-este-sal
          </a>
          .
        </p>
      </section>

      <section>
        <h2>4. Soluționarea Online a Litigiilor (SOL)</h2>
        <p>
          Comisia Europeană pune la dispoziția consumatorilor o platformă
          dedicată soluționării online a litigiilor apărute în legătură cu
          contracte încheiate prin mijloace electronice:
        </p>
        <ul>
          <li>
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
            >
              ec.europa.eu/consumers/odr
            </a>
          </li>
        </ul>
        <p>
          Menționăm că acest site are caracter exclusiv informativ și nu permite
          încheierea de contracte online. Informațiile de mai sus sunt puse la
          dispoziție pentru transparență și pentru situațiile în care relația
          contractuală se stabilește ulterior, prin alte mijloace.
        </p>
      </section>

      <section>
        <h2>5. Datele noastre de identificare</h2>
        <ul>
          <li>
            Denumire: <strong>{company.legalName}</strong>
          </li>
          <li>
            Cod unic de înregistrare: <strong>{company.cui}</strong>
          </li>
          <li>
            Număr de ordine în Registrul Comerțului:{" "}
            <strong>{company.regCom}</strong>
          </li>
          <li>
            EUID: <strong>{company.euid}</strong>
          </li>
          <li>Sediu: {formattedAddress}, România</li>
        </ul>
      </section>
    </LegalPage>
  );
};

export default Anpc;
