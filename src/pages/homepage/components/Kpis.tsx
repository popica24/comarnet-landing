import CountUp from "react-countup";

const data = {
  years: 20,
  cars: 15,
  employees: 50,
  clients: 20,
};

const Kpis = () => {
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
            CIFRELE CARE NE DEFINESC
          </span>
          <h1
            className="text-4xl text-gray-900 text-center font-bold"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="600"
          >
            Repere esentiale care arata amploarea activitatii noastre
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-primary px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 flex flex-col items-center gap-1">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="6"
                  y="10"
                  width="36"
                  height="32"
                  rx="2"
                  stroke="#2FABB7"
                  stroke-width="2"
                />
                <line
                  x1="6"
                  y1="18"
                  x2="42"
                  y2="18"
                  stroke="#2FABB7"
                  stroke-width="2"
                />
                <line
                  x1="15"
                  y1="6"
                  x2="15"
                  y2="14"
                  stroke="#2FABB7"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <line
                  x1="33"
                  y1="6"
                  x2="33"
                  y2="14"
                  stroke="#2FABB7"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <circle cx="15" cy="26" r="1.5" fill="#2FABB7" />
                <circle cx="24" cy="26" r="1.5" fill="#2FABB7" />
                <circle cx="33" cy="26" r="1.5" fill="#2FABB7" />
                <circle cx="15" cy="34" r="1.5" fill="#2FABB7" />
                <circle cx="24" cy="34" r="1.5" fill="#2FABB7" />
                <circle cx="33" cy="34" r="1.5" fill="#2FABB7" />
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                <CountUp
                  end={data.years}
                  duration={2.75}
                  suffix="+"
                  enableScrollSpy
                />
              </h2>
              <p className="leading-relaxed">ANI PE PIATA</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-primary px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 flex flex-col items-center gap-1">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 30C6 28.8954 6.89543 28 8 28H10"
                  stroke="#2FABB7"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M42 30C42 28.8954 41.1046 28 40 28H38"
                  stroke="#2FABB7"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <circle
                  cx="14"
                  cy="32"
                  r="3"
                  stroke="#2FABB7"
                  stroke-width="2"
                />
                <circle
                  cx="34"
                  cy="32"
                  r="3"
                  stroke="#2FABB7"
                  stroke-width="2"
                />
                <path
                  d="M11 28H17M31 28H37"
                  stroke="#2FABB7"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M17 28V24C17 23.4477 17.4477 23 18 23H21L24 16H30L33 23H36C36.5523 23 37 23.4477 37 24V28"
                  stroke="#2FABB7"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 32V30C17 29.4477 17.4477 29 18 29H30C30.5523 29 31 29.4477 31 30V32"
                  stroke="#2FABB7"
                  stroke-width="2"
                />
                <line
                  x1="20"
                  y1="23"
                  x2="20"
                  y2="19"
                  stroke="#2FABB7"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <line
                  x1="28"
                  y1="23"
                  x2="28"
                  y2="19"
                  stroke="#2FABB7"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                <CountUp
                  end={data.cars}
                  duration={2.75}
                  suffix="+"
                  enableScrollSpy
                />
              </h2>
              <p className="leading-relaxed">MASINI IN FLOTA</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-primary px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 flex flex-col items-center gap-1">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="24"
                  cy="14"
                  r="6"
                  stroke="#2FABB7"
                  stroke-width="2"
                />
                <path
                  d="M12 38C12 31.3726 17.3726 26 24 26C30.6274 26 36 31.3726 36 38"
                  stroke="#2FABB7"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <circle
                  cx="38"
                  cy="16"
                  r="4"
                  stroke="#2FABB7"
                  stroke-width="2"
                />
                <path
                  d="M42 38C42 34.6863 39.3137 32 36 32"
                  stroke="#2FABB7"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <circle
                  cx="10"
                  cy="16"
                  r="4"
                  stroke="#2FABB7"
                  stroke-width="2"
                />
                <path
                  d="M6 38C6 34.6863 8.68629 32 12 32"
                  stroke="#2FABB7"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                <CountUp
                  end={data.employees}
                  duration={2.75}
                  suffix="+"
                  enableScrollSpy
                />
              </h2>
              <p className="leading-relaxed">ANGAJATI</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-primary px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 flex flex-col items-center gap-1">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="24"
                  cy="15"
                  r="7"
                  stroke="#2FABB7"
                  stroke-width="2"
                />
                <path
                  d="M10 40C10 32.268 16.268 26 24 26C31.732 26 38 32.268 38 40"
                  stroke="#2FABB7"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <rect
                  x="20"
                  y="38"
                  width="8"
                  height="6"
                  stroke="#2FABB7"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 38L16 44M30 38L32 44"
                  stroke="#2FABB7"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                <CountUp
                  end={data.clients}
                  duration={2.75}
                  suffix="+"
                  enableScrollSpy
                />
              </h2>
              <p className="leading-relaxed">CLIENTI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kpis;
