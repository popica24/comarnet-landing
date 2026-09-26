import { company, formattedAddress } from "@/config/company";
import type { FaqItem } from "@/lib/schema";

/**
 * Shared by the `Faq` section and by the FAQPage JSON-LD on `Homepage`.
 * Google requires the structured data to match the visible content, so both
 * must read from this single list.
 */
export const faqItems: FaqItem[] = [
  {
    question: "În ce zone din România livrați?",
    answer:
      "Livrăm la nivel național. Avem acoperire directă cu flota proprie în județele din zona centrală și de sud a țării, iar prin rețeaua Pall-Ex ajungem în orice localitate din România, precum și în restul Europei.",
  },
  {
    question: "Care este termenul de livrare?",
    answer:
      "Pentru comenzile plasate până la ora 14:00, livrarea se face în 24–48 de ore în zonele acoperite direct de flota proprie. Pentru livrările prin rețeaua Pall-Ex, termenul standard este de 24–72 de ore, în funcție de destinație.",
  },
  {
    question: "Există o valoare minimă a comenzii?",
    answer:
      "Valoarea minimă a comenzii diferă în funcție de tipul de client și de zona de livrare. Vă recomandăm să ne contactați pentru o ofertă personalizată, adaptată volumului și frecvenței comenzilor dumneavoastră.",
  },
  {
    question: "Ce tipuri de produse distribuiți?",
    answer:
      "Distribuim produse alimentare și non-alimentare destinate profesioniștilor din HoReCa și retail: băuturi, produse alimentare ambalate, condimente, precum și articole non-alimentare necesare desfășurării activității.",
  },
  {
    question: "Ce este rețeaua Pall-Ex și cum mă ajută?",
    answer:
      "Pall-Ex este cea mai mare rețea europeană de distribuție paletizată. În calitate de membru Pall-Ex România, vă oferim acces la transport paletizat rapid și economic către orice destinație din Europa, cu urmărirea expediției pe tot parcursul traseului.",
  },
  {
    question: "Oferiți servicii de depozitare pentru mărfurile mele?",
    answer:
      "Da. Punem la dispoziție spații moderne de depozitare, cu gestiune digitalizată a stocurilor, condiții controlate de temperatură și securitate permanentă. Serviciul poate fi contractat separat sau împreună cu distribuția.",
  },
  {
    question: "Cum pot solicita o ofertă de preț?",
    answer: `Puteți completa formularul de contact de pe site, ne puteți scrie la ${company.email} sau ne puteți suna la ${company.phoneDisplay}, de luni până vineri între orele 08:00 și 16:00. Revenim cu o ofertă personalizată în cel mai scurt timp.`,
  },
  {
    question: "Unde se află sediul și depozitul Comar Net?",
    answer: `Sediul și depozitul nostru se află în ${formattedAddress}. Programul de lucru este de ${company.openingHoursDisplay.toLowerCase()}.`,
  },
];
