import { fredoka } from "@/app/fonts";

export const WeatherApp = () => {
  return (
    <main
      className={`${fredoka.className} min-h-dvh md:flex md:items-center md:justify-center bg-gray-100 text-[#202020]`}
    >
      <div
        className="w-full bg-gradient-to-b from-sky-100 to-white overflow-hidden md:max-w-sm md:h-[650px] 
        md:min-h-0 min-h-dvh md:rounded-3xl md:shadow-2xl bg-white flex flex-col pb-4"
      >
        <div className="bg-white pt-8 text-center pb-28 curved-2 relative">
          <h2 className="font-semibold text-3xl">Malmö</h2>
          <p>Sun with occasional clouds</p>
          <span className="text-[130px] absolute -translate-x-1/2 left-1/2 bottom-0 translate-y-1/3">
            ⛅
          </span>
        </div>
        <div className="flex-1 flex flex-col justify-end gap-8">
          <span className="font-semibold text-6xl text-center">9°C</span>
          <div className="bg-sky-100/80 grid p-4 mx-4 rounded-lg grid-cols-3 gap-2 text-sm">
            <div className="flex flex-col items-center">
              <span className="font-medium">UV</span>
              <span>3</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-medium">% RAIN</span>
              <span>86</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-medium">AQ</span>
              <span>29</span>
            </div>
          </div>

          <div className="overflow-auto p-4">
            <div className="flex gap-4">
              {forecast.map((data) => (
                <div
                  key={data.name}
                  className="flex-1 flex flex-col gap-1 last:pr-4"
                >
                  <div className="bg-sky-100 rounded-lg p-2 w-20 h-16 relative flex items-center justify-center pt-6">
                    <span className="text-4xl absolute -translate-x-1/2 left-1/2 top-0 -translate-y-1/2">
                      {data.emoji}
                    </span>
                    <span className="text-xl font-semibold">
                      {data.degrees}°C
                    </span>
                  </div>
                  <span className="text-sm mx-auto capitalize">
                    {data.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const forecast = [
  {
    name: "tomorrow",
    degrees: 10,
    emoji: "⛅",
  },
  {
    name: "tuesday",
    degrees: 8,
    emoji: "🌧️",
  },
  {
    name: "wednesday",
    degrees: 9,
    emoji: "⛅",
  },
  {
    name: "thursday",
    degrees: 8,
    emoji: "⛅",
  },
  {
    name: "friday",
    degrees: 8,
    emoji: "⛅",
  },
  {
    name: "saturday",
    degrees: 9,
    emoji: "🌧️",
  },
  {
    name: "sunday",
    degrees: 11,
    emoji: "🌩️",
  },
];
