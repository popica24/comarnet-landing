import LegalPage from "@/components/LegalPage";
import { useSEO } from "@/hooks/useSEO";
import { company, formattedAddress } from "@/config/company";
import { pageBreadcrumbs, webPageSchema } from "@/lib/schema";

const PATH = "/confidentialitate";
const TITLE = "Politica de Confidențialitate";
const DESCRIPTION = `Politica de confidențialitate ${company.legalName}: ce date cu caracter personal prelucrăm, în ce scop, cât timp le păstrăm și care sunt drepturile dumneavoastră conform GDPR.`;

const breadcrumbs = [{ name: TITLE, path: PATH }];

const schema = [
  pageBreadcrumbs(breadcrumbs),
  webPageSchema({ name: TITLE, description: DESCRIPTION, path: PATH }),
];

const Privacy = () => {
  useSEO({
    title: TITLE,
    description: DESCRIPTION,
    keywords:
      "politica confidentialitate, GDPR, protectia datelor, date personale, Comar Net",
    canonical: PATH,
    schema,
  });

  return (
    <LegalPage
      title={TITLE}
      intro="Confidențialitatea datelor dumneavoastră este importantă pentru noi. Această politică explică ce date colectăm, de ce le colectăm și cum le puteți controla."
      lastUpdated="17 august 2026"
      breadcrumbs={breadcrumbs}
    >
      <section>
        <h2>1. Cine suntem</h2>
        <p>
          Operatorul de date cu caracter personal este <strong>{company.legalName}</strong>,
          societate înregistrată la Registrul Comerțului sub numărul{" "}
          <strong>{company.regCom}</strong>, cod unic de înregistrare{" "}
          <strong>{company.cui}</strong>, cu sediul în {formattedAddress}, România.
        </p>
        <p>
          Pentru orice aspect legat de prelucrarea datelor dumneavoastră ne
          puteți contacta la adresa de e-mail{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a> sau telefonic
          la <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>,{" "}
          {company.openingHoursDisplay.toLowerCase()}.
        </p>
      </section>

      <section>
        <h2>2. Ce date colectăm</h2>
        <p>
          Colectăm doar datele necesare pentru a răspunde solicitărilor
          dumneavoastră și pentru a ne desfășura activitatea comercială:
        </p>
        <ul>
          <li>
            <strong>Date furnizate direct de dumneavoastră</strong> prin
            formularul de contact de pe site: nume și prenume, tipul de persoană
            (fizică sau juridică), adresă de e-mail, număr de telefon și
            conținutul mesajului transmis.
          </li>
          <li>
            <strong>Date de comunicare</strong>, atunci când ne contactați prin
            e-mail sau telefon: datele de identificare și de contact pe care ni
            le transmiteți, precum și istoricul corespondenței.
          </li>
          <li>
            <strong>Date tehnice</strong> generate automat la vizitarea
            site-ului: adresa IP, tipul de browser și dispozitiv, paginile
            vizitate și durata vizitei. Detalii suplimentare găsiți în{" "}
            <a href="/cookies">Politica de Cookies</a>.
          </li>
        </ul>
        <p>
          Nu solicităm și nu prelucrăm în mod intenționat categorii speciale de
          date cu caracter personal (date privind sănătatea, convingerile
          religioase, apartenența sindicală și altele asemenea). Vă rugăm să nu
          includeți astfel de informații în mesajele transmise prin formular.
        </p>
      </section>

      <section>
        <h2>3. În ce scop și în ce temei prelucrăm datele</h2>
        <ul>
          <li>
            <strong>Pentru a răspunde solicitărilor și a transmite oferte</strong>{" "}
            — temei legal: demersuri anterioare încheierii unui contract, la
            cererea dumneavoastră (art. 6 alin. 1 lit. b GDPR).
          </li>
          <li>
            <strong>Pentru executarea contractelor comerciale</strong> încheiate
            cu clienții și furnizorii noștri — temei legal: executarea
            contractului (art. 6 alin. 1 lit. b GDPR).
          </li>
          <li>
            <strong>Pentru îndeplinirea obligațiilor legale</strong> de natură
            fiscală și contabilă — temei legal: obligația legală a operatorului
            (art. 6 alin. 1 lit. c GDPR).
          </li>
          <li>
            <strong>Pentru securitatea și îmbunătățirea site-ului</strong> —
            temei legal: interesul nostru legitim de a menține un site
            funcțional și sigur (art. 6 alin. 1 lit. f GDPR).
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Cât timp păstrăm datele</h2>
        <ul>
          <li>
            Mesajele transmise prin formularul de contact: maximum{" "}
            <strong>2 ani</strong> de la ultima interacțiune, dacă nu se
            concretizează o relație contractuală.
          </li>
          <li>
            Documentele contractuale și financiar-contabile:{" "}
            <strong>10 ani</strong>, conform legislației fiscale și contabile în
            vigoare.
          </li>
          <li>
            Datele tehnice și statistice colectate prin cookies: conform
            duratelor indicate în <a href="/cookies">Politica de Cookies</a>.
          </li>
        </ul>
        <p>
          La expirarea acestor termene, datele sunt șterse sau anonimizate în
          mod ireversibil.
        </p>
      </section>

      <section>
        <h2>5. Cui divulgăm datele</h2>
        <p>
          Nu vindem și nu închiriem datele dumneavoastră personale. Le putem
          divulga exclusiv următoarelor categorii de destinatari:
        </p>
        <ul>
          <li>
            furnizori de servicii care ne sprijină activitatea (găzduire web,
            servicii de e-mail, contabilitate, transport și curierat), în
            calitate de persoane împuternicite, pe baza unor contracte care le
            impun obligații stricte de confidențialitate;
          </li>
          <li>
            partenerii din rețeaua Pall-Ex, atunci când este necesar pentru
            livrarea expedițiilor dumneavoastră;
          </li>
          <li>
            autorități publice, atunci când divulgarea este impusă de lege sau
            solicitată în cadrul unei proceduri legale.
          </li>
        </ul>
        <p>
          Formularul de contact de pe acest site transmite datele completate
          către un serviciu Google Workspace, utilizat de noi pentru
          centralizarea solicitărilor. Google poate prelucra aceste date în
          conformitate cu propria politică de confidențialitate.
        </p>
      </section>

      <section>
        <h2>6. Transferuri în afara Spațiului Economic European</h2>
        <p>
          Ca regulă, datele sunt prelucrate în interiorul Spațiului Economic
          European. Atunci când unii dintre furnizorii noștri de servicii
          prelucrează date în afara SEE, transferul se realizează exclusiv pe
          baza garanțiilor prevăzute de GDPR, respectiv decizii de adecvare ale
          Comisiei Europene sau clauze contractuale standard.
        </p>
      </section>

      <section>
        <h2>7. Drepturile dumneavoastră</h2>
        <p>
          În temeiul Regulamentului (UE) 2016/679, beneficiați de următoarele
          drepturi:
        </p>
        <ul>
          <li>
            <strong>dreptul de acces</strong> — de a obține confirmarea că
            prelucrăm date care vă privesc și o copie a acestora (art. 15);
          </li>
          <li>
            <strong>dreptul la rectificare</strong> — de a corecta datele
            inexacte sau incomplete (art. 16);
          </li>
          <li>
            <strong>dreptul la ștergere</strong> — „dreptul de a fi uitat”, în
            situațiile prevăzute de lege (art. 17);
          </li>
          <li>
            <strong>dreptul la restricționarea prelucrării</strong> (art. 18);
          </li>
          <li>
            <strong>dreptul la portabilitatea datelor</strong> — de a primi
            datele într-un format structurat, utilizat în mod curent (art. 20);
          </li>
          <li>
            <strong>dreptul la opoziție</strong> — de a vă opune prelucrărilor
            întemeiate pe interesul legitim (art. 21);
          </li>
          <li>
            <strong>dreptul de a nu face obiectul unei decizii automate</strong>,
            inclusiv crearea de profiluri (art. 22). Menționăm că nu utilizăm
            procese decizionale automate.
          </li>
        </ul>
        <p>
          Pentru exercitarea acestor drepturi ne puteți scrie la{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a>. Vă vom
          răspunde în termen de cel mult o lună de la primirea cererii.
        </p>
      </section>

      <section>
        <h2>8. Dreptul de a depune o plângere</h2>
        <p>
          Dacă apreciați că v-am încălcat drepturile, vă puteți adresa
          Autorității Naționale de Supraveghere a Prelucrării Datelor cu
          Caracter Personal (ANSPDCP), B-dul G-ral. Gheorghe Magheru nr. 28-30,
          Sector 1, București, e-mail{" "}
          <a href="mailto:anspdcp@dataprotection.ro">
            anspdcp@dataprotection.ro
          </a>
          , site{" "}
          <a
            href="https://www.dataprotection.ro"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.dataprotection.ro
          </a>
          . Aveți, de asemenea, dreptul de a vă adresa instanțelor de judecată.
        </p>
      </section>

      <section>
        <h2>9. Securitatea datelor</h2>
        <p>
          Aplicăm măsuri tehnice și organizatorice adecvate pentru protejarea
          datelor împotriva accesului neautorizat, pierderii sau divulgării:
          transmiterea criptată a informațiilor prin protocolul HTTPS, acces
          limitat la datele personale strict pentru personalul care are nevoie
          de acestea și obligații contractuale de confidențialitate pentru
          furnizorii noștri.
        </p>
      </section>

      <section>
        <h2>10. Modificări ale acestei politici</h2>
        <p>
          Putem actualiza periodic această politică pentru a reflecta
          modificările legislative sau ale activității noastre. Versiunea în
          vigoare este întotdeauna cea publicată pe această pagină, împreună cu
          data ultimei actualizări.
        </p>
      </section>
    </LegalPage>
  );
};

export default Privacy;
