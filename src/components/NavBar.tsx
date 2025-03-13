import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/Arena-logo.png";

export default function NavBar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-30 px-4 ">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex justify-center items-center mb-2">
          <Link href="/" className="relative">
            <Image 
              src={logo}
              alt="Logo" 
              width={200}
              height={100}
              className="h-auto w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] mb-10"
              priority
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
