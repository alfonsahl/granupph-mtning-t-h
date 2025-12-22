import heroImage from "@/assets/hero-team.jpg";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return <section className="relative min-h-[65vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Teamet som hämtar granar" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/50 via-forest/40 to-forest/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-snow mb-6 animate-fade-in-up text-balance leading-tight">
          Granupphämtning i Trollhättan
        </h1>
        <p className="text-lg md:text-xl text-snow/90 max-w-2xl mx-auto animate-fade-in-up">
          Låt oss ta hand om din julgran och återvinna den på rätt sätt – Snabbt, smidigt och enkelt!
        </p>
      </div>

      {/* Scroll arrow at bottom */}
      <div className="absolute bottom-12 md:bottom-16 left-0 right-0 z-10 flex items-center justify-center">
        <button
          onClick={scrollToBooking}
          className="animate-fade-in-up animate-delay-300 text-snow/90 hover:text-snow transition-colors duration-200 flex items-center justify-center"
          aria-label="Scrolla till bokningsformuläret"
        >
          <ChevronDown className="w-12 h-12 md:w-16 md:h-16 animate-bounce" />
        </button>
      </div>

      {/* Decorative bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-background" />
    </section>;
};
export default HeroSection;