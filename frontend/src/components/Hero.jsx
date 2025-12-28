import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 sm:px-12 overflow-hidden">
      
      {/* VAULT BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FCFCFC] via-[#F3F4F6] to-[#EBECED]" />

      {/* SOFT AMBIENT GLOWS */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-gradient-to-b from-[#DFEGES] to-[#EBEFF0] rounded-full blur-[100px] sm:blur-[120px] opacity-60" />
      <div className="absolute bottom-0 right-[-150px] sm:right-[-200px] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-to-b from-[#EBEFF0] to-[#DFEGES] rounded-full blur-[120px] sm:blur-[140px] opacity-50" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center mt-30 sm:mt-0 max-w-4xl mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-neutral-900 leading-snug sm:leading-tight">
          Smart Learning,
          <br />
          Simplified for You
        </h1>

        <p className="mt-6 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto">
          Organize subjects, manage notes, and track progress — all in one
          beautifully designed study platform.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full">
          <Link
            to="/signup"
            className="
              px-8 py-4
              rounded-xl
              bg-neutral-900 text-white
              font-medium
              hover:bg-black
              transition
              shadow-lg
              text-center
            "
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="
              px-8 py-4
              rounded-xl
              bg-white/70
              text-neutral-900
              font-medium
              hover:bg-white
              transition
              shadow-md
              text-center
            "
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}
