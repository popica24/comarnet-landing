import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "./faqItems";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12" id="intrebari-frecvente">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span
            className="text-primary text-center font-medium mb-4 block"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="600"
          >
            ÎNTREBĂRI FRECVENTE
          </span>
          <h2
            className="text-4xl text-gray-900 text-center font-bold"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="600"
          >
            Răspunsuri la cele mai des întâlnite întrebări
          </h2>
        </div>

        <div
          className="divide-y divide-border rounded-2xl border border-border bg-white shadow-sm"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="600"
        >
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-gray-900 transition-colors hover:text-primary"
                  >
                    {item.question}
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  hidden={!isOpen}
                  className="px-6 pb-5 text-gray-600 leading-relaxed"
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
