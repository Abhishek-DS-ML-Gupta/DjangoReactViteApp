import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <header className="w-full fixed top-0 left-0 z-50">
        <Navbar />
      </header>

      {/* Hero Section */}
      <main className="flex-1 w-full">
        <Hero className="w-full" />
      </main>
    </div>
  );
}
