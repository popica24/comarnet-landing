import map from "@/assets/harta-romania.png";

const Coverage = () => {
  return (
    <section className="py-12 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <span
            className="text-primary text-center font-medium mb-4 block"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="600"
          >
            RAZĂ DE ACȚIUNE
          </span>
          <h1
            className="text-4xl text-gray-900 text-center font-bold"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="600"
          >
            Mai jos, aveți harta cu județele în care acționăm
          </h1>
        </div>
        <img
          src={map}
          className="w-xl mx-auto rounded-2xl border shadow"
          data-aos="fade-in"
          data-aos-delay="300"
          data-aos-duration="600"
        />
      </div>
    </section>
  );
};

export default Coverage;
