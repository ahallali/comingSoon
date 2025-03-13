'use client'
import Image from "next/image";
import backgroundImage from "@/assets/background.jpg";
import { AuroraBackground } from "@/components/aurora-background";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import logo from "@/assets/Arena-logo.png";

export default function Home() {
  const text = "SITE EN MAINTENANCE";
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


      <AuroraBackground className={"bg-white"} >
        <div className="relative flex flex-col gap-2 items-center justify-center px-4">
        <h1 className="text-3xl md:text-4xl  text-white text-center z-20">
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
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}
            >
               {letter === " " ? "\u00A0" : letter}
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

          <p className="font-bold poppins-light md:text-2xl text-neutral-200  py-2 z-20">
           SITE UNDER MAINTENANCE
          </p>
          <a
            href="mailto:contact@arenaproprety.ma"
            className="bg-white rounded-lg poppings-light z-20 w-fit text-black mt-8 px-6 py-3 hover:bg-black hover:text-white transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </AuroraBackground>
        <a
          href="mailto:contact@arenaproperty.ma"
          className="bg-white rounded-lg w-fit text-black mt-6 px-6 py-3 hover:bg-black hover:text-white transition-colors duration-300"
        >
          Contact Us
        </a>

      <footer className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 px-4">
        <div className="flex justify-center items-center">
          <Link href="/" className="relative">
            <Image
              src={logo}
              alt="Logo"
              width={200}
              height={100}
              className="h-auto w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] mb-4"
              priority
            />
          </Link>
        </div>
      </footer>
    </main>
  );
}