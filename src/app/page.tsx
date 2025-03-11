import Image from "next/image";
import backgroundImage from "@/assets/background.jpg";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Background"
        fill
        className="object-cover z-0"
        priority
        quality={100}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <NavBar />
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="font-display text-6xl md:text-8xl font-bold mb-4">
          Coming Soon
        </h1>
        <p className="accent-text text-xl md:text-2xl mb-6">
          Something amazing is in the works
        </p>
        <a
          href="mailto:contact@yansoft.ma"
          className="accent-text rounded-full border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors duration-300 mt-4"
        >
          Contact Us
        </a>
      </div>
    </main>
  );
}
