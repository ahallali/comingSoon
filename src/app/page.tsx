'use client'
import Image from "next/image";
import backgroundImage from "@/assets/background.jpg";
import NavBar from "@/components/NavBar";
import { AuroraBackground } from "@/components/aurora-background";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const text = "COMING SOON";
  const dots = "...";
  const dotControls = useAnimation();
  const [textAnimationComplete, setTextAnimationComplete] = useState(false);
  useEffect(() => {
    const animateDots = async () => {
      if (textAnimationComplete) {
      while (true) {
        await dotControls.start({ opacity: 0, transition: { duration: 0.5 } });
        await dotControls.start({ opacity: 1, transition: { duration: 0.5 } });
      }
    }
    };
    animateDots();
  }, [textAnimationComplete,dotControls]);
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-10">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
          sizes="100vw"
          style={{ maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0))" }}
        />
      </div>

      <div className="absolute inset-0 bg-black/30 z-10" />

      <NavBar />

      <AuroraBackground >
        <div className="relative flex flex-col gap-2 items-center justify-center px-4">
        <h1 className="text-3xl md:text-7xl font-black text-white text-center z-20">
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} 
          transition={{ staggerChildren: 0.1 }} 
          className="inline-block"
          onAnimationComplete={() => setTextAnimationComplete(true)}
        >
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
       
        <motion.span
          initial={{ opacity: 0 }}
          animate={dotControls}
          className="inline-block"
        >
          {dots}
        </motion.span>
      </h1>

          <p className="font-bold md:text-2xl text-neutral-200 py-2 z-20">
            Something amazing is in the works
          </p>
          <a
            href="mailto:contact@yansoft.ma"
            className="bg-white rounded-full z-20 w-fit text-black mt-8 px-6 py-3 hover:bg-black hover:text-white transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </AuroraBackground>
    </main>
  );
}