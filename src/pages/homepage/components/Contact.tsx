import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Validation schema
const schema = yup.object().shape({
  numePrenume: yup
    .string()
    .required("Numele și prenumele sunt obligatorii")
    .min(3, "Numele trebuie să conțină cel puțin 3 caractere"),
  tipPersoana: yup
    .string()
    .required("Vă rugăm să selectați tipul de persoană")
    .oneOf(["fizica", "juridica"], "Selecție invalidă"),
  email: yup
    .string()
    .required("Email-ul este obligatoriu")
    .email("Vă rugăm să introduceți un email valid"),
  telefon: yup
    .string()
    .required("Numărul de telefon este obligatoriu")
    .matches(/^[0-9+\s()-]+$/, "Număr de telefon invalid")
    .min(10, "Numărul de telefon trebuie să conțină cel puțin 10 caractere"),
  mesaj: yup
    .string()
    .required("Mesajul este obligatoriu")
    .min(10, "Mesajul trebuie să conțină cel puțin 10 caractere")
    .max(1000, "Mesajul nu poate depăși 1000 de caractere"),
});

type Inputs = {
  numePrenume: string;
  tipPersoana: string;
  email: string;
  telefon: string;
  mesaj: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      numePrenume: "",
      tipPersoana: "fizica",
      email: "",
      telefon: "",
      mesaj: "",
    },
  });

  const onSubmit = async (data: Inputs) => {
    try {
      // Replace this URL with your actual Google Apps Script Web App URL
      const SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT;

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Note: With no-cors mode, we can't read the response
      // We assume success if no error is thrown
      console.log("Form submitted successfully:", data);
      alert("Formularul a fost trimis cu succes! Vă vom contacta în curând.");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "A apărut o eroare la trimiterea formularului. Vă rugăm să încercați din nou sau să ne contactați direct la contact@alphastar.ro"
      );
    }
  };

  return (
    <section className="py-12" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <span
            className="text-primary text-center font-medium mb-4 block"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="600"
          >
            AI O PROPUNERE DE COLABORARE ?
          </span>
          <h1
            className="text-4xl text-gray-900 text-center font-bold"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="600"
          >
            Completează formularul și hai să discutăm !
          </h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          {/* Nume Prenume */}
          <div>
            <label
              htmlFor="numePrenume"
              className="block mb-2 font-medium text-gray-800"
            >
              Nume și Prenume <span className="text-red-500">*</span>
            </label>
            <input
              id="numePrenume"
              type="text"
              {...register("numePrenume")}
              className={`w-full px-3 py-3 border rounded-md text-base focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                errors.numePrenume
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-primary"
              }`}
              placeholder="Introduceți numele complet"
            />
            {errors.numePrenume && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.numePrenume.message}
              </span>
            )}
          </div>

          {/* Tip Persoana */}
          <div>
            <label className="block mb-3 font-medium text-gray-800">
              Tip persoană <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-8">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  value="fizica"
                  {...register("tipPersoana")}
                  className="w-[18px] h-[18px] mr-2 cursor-pointer accent-primary"
                />
                <span className="text-base">Persoană Fizică</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  value="juridica"
                  {...register("tipPersoana")}
                  className="w-[18px] h-[18px] mr-2 cursor-pointer accent-primary"
                />
                <span className="text-base">Persoană Juridică</span>
              </label>
            </div>
            {errors.tipPersoana && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.tipPersoana.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-800"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className={`w-full px-3 py-3 border rounded-md text-base focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-primary"
              }`}
              placeholder="exemplu@email.com"
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Telefon */}
          <div>
            <label
              htmlFor="telefon"
              className="block mb-2 font-medium text-gray-800"
            >
              Telefon <span className="text-red-500">*</span>
            </label>
            <input
              id="telefon"
              type="tel"
              {...register("telefon")}
              className={`w-full px-3 py-3 border rounded-md text-base focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                errors.telefon
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-primary"
              }`}
              placeholder="+40 123 456 789"
            />
            {errors.telefon && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.telefon.message}
              </span>
            )}
          </div>

          {/* Mesaj/Oferta */}
          <div>
            <label
              htmlFor="mesaj"
              className="block mb-2 font-medium text-gray-800"
            >
              Ofertă sau Mesaj <span className="text-red-500">*</span>
            </label>
            <textarea
              id="mesaj"
              {...register("mesaj")}
              rows={6}
              className={`w-full px-3 py-3 border rounded-md text-base resize-y font-sans focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                errors.mesaj
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-primary"
              }`}
              placeholder="Introduceți oferta sau mesajul dumneavoastră..."
            />
            {errors.mesaj && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.mesaj.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3.5 bg-primary text-white border-none rounded-md text-base font-semibold cursor-pointer transition-all mt-2 hover:bg-primary/90 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Se trimite..." : "Trimite Formularul"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
