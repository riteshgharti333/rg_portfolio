"use client";

type TechSliderProps = {
  slideData: string[];
  direction?: "reverse";
};

const TechIconSlider = ({ slideData, direction }: TechSliderProps) => {
  return (
    <div className="relative overflow-hidden h-[100vh]">
      {/* Top & Bottom Fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-green-900/20 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-900/20 to-transparent z-10" />

      {/* Icon Track */}
      <div
        className={`flex flex-col gap-6 h-max will-change-transform ${
          direction === "reverse"
            ? "animate-scroll-vertical-reverse"
            : "animate-scroll-vertical"
        }`}
      >
        {[...slideData, ...slideData].map((icon, index) => (
          <div
            key={index}
            className="w-20 h-20 flex items-center justify-center overflow-hidden"
          >
            <img
              src={icon}
              alt={`tech-icon-${index}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechIconSlider;
