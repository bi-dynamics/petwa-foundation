import Image from "next/image";
import ABOUT_1 from "../../../public/gallery/gallery-2.jpg";
import ABOUT_2 from "../../../public/gallery/gallery-5.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DONATE_CTA from "../../../public/call-to-action.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",

  description:
    "The organization aims to promote a healthy lifestyle, provide health services and financial assistance for disadvantaged communities as well as to conduct fundraising activities to carry out the objectives of the foundation.",
};

export default function page() {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-start">
      <header className="w-full h-[40vh] flex items-center justify-center">
        <div className="w-full h-full bg-fixed bg-cover bg-flowers bg-bottom relative after:absolute after:inset-0  after:mix-blend-hard-light">
          <div className="w-full h-full absolute bg-petwaGreen opacity-95"></div>
        </div>

        <h1 className="absolute text-3xl text-center font-montserrat md:text-5xl text-white font-bold p-4 sm:p-0">
          About Petwa Foundation
        </h1>
      </header>
      <section className="flex flex-col gap-16 items-start justify-center py-16 px-4 sm:px-16 lg:px-[100px]">
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex flex-col items-end justify-end relative">
            <Image
              src={ABOUT_1}
              alt="About Petwa Foundation"
              className="h-full w-full max-w-[900px] rounded-xl object-cover"
            />
            <div className="absolute h-fit w-auto p-4 bg-white rounded-xl translate-x-4 md:translate-x-16 translate-y-16">
              <Image
                src={ABOUT_2}
                alt="About Petwa Foundation"
                className="h-[200px] md:h-[400px] w-auto rounded-md "
              />
            </div>
          </div>
        </div>
        <div className="w-full h-fit items-start justify-start flex flex-col gap-4">
          <h2 className=" font-montserrat text-2xl sm:text-4xl font-bold text-right w-full text-[#1f1f1fd0] leading-relaxed tracking-wider italic">
            <span className="text-petwaGreen mx-2">&apos;&apos;</span>Serving
            The Disadvantaged
            <span className="text-petwaGreen mx-2">&apos;&apos;</span>
            <br />{" "}
            <span className="text-[#1f1f1fd0] tracking-normal text-xl sm:text-3xl">
              {" "}
              Petwa Foundation -
            </span>
          </h2>
          <p className="text-[#1f1f1f] text-left text-sm sm:text-lg">
            Petwa foundation is a registered welfare organization registration
            number W.O.502 in terms of section 19 of the National Welfare Act,
            1965 (Act 79 of 1965), as amended. The organization aims to promote
            a healthy lifestyle, provide health services and financial
            assistance for disadvantaged communities as well as to conduct
            fundraising activities to carry out the objectives of the
            foundation.
          </p>
          <p className="text-[#1f1f1f] text-left text-sm sm:text-lg">
            Petwa means to{" "}
            <strong>&apos;straighten and make better&apos;</strong>. A term
            derived from Oshikwanyama, a native language which is a dialect of
            the Ovawambo tribe in our beloved Namibia.
          </p>
        </div>
      </section>
      <section className="bg-[#26442D] relative w-full h-fit flex flex-col sm:flex-row items-center justify-center gap-8 lg:px-[100px] px-4 sm:px-8 py-16 ">
        <Image
          src={DONATE_CTA}
          alt="About Us"
          fill
          className="w-full object-cover object-center brightness-75 opacity-20 absolute h-full z-[0]"
        />
        <div className="w-full h-full flex flex-col items-start justify-between gap-4 z-10">
          <h2 className=" font-montserrat w-full text-2xl sm:text-4xl text-center sm:text-left font-bold text-white">
            Make a Difference Today.
          </h2>
          <p className="text-white text-center sm:text-left text-sm sm:text-lg">
            Join us in our mission to uplift disadvantaged communities. Your
            support can create lasting change.
          </p>
        </div>
        <Link href="/contact-petwa-foundation" className="z-10">
          <Button
            size="lg"
            className="w-fit mt-4 bg-petwaPink rounded-full text-base flex items-center justify-center gap-2 py-[32px] px-[18px] font-medium"
          >
            DONATE TODAY
            <div className="bg-white rounded-full p-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#D9A28C"
                  d="M12.455 2.309L12 2.076l-.455.233a12 12 0 0 0-3.09 2.265A14 14 0 0 1 12 7.202a14 14 0 0 1 3.544-2.628a12 12 0 0 0-3.089-2.265m-1.756 6.425a11.98 11.98 0 0 0-6.518-3.536L3 4.98V13a9 9 0 0 0 5.697 8.374A14 14 0 0 1 8 17c0-3.092 1.002-5.95 2.7-8.266M21 4.981l-1.18.217C14.232 6.224 10 11.117 10 17c0 1.536.29 3.007.817 4.36l.24.615c.314.01.629.025.943.025a9 9 0 0 0 9-9z"
                ></path>
              </svg>
            </div>
          </Button>
        </Link>
      </section>
    </div>
  );
}
