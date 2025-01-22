import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import DONATE_CTA from "../../../public/call-to-action.jpg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact US",

  description:
    "Join us in our mission to uplift disadvantaged communities. Your support can create lasting change.",
};

export default function page() {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-start">
      <header className="w-full h-[40vh] flex items-center justify-center">
        <div className="w-full h-full bg-fixed bg-cover bg-flowers bg-bottom relative after:absolute after:inset-0  after:mix-blend-hard-light">
          <div className="w-full h-full absolute bg-petwaGreen opacity-95"></div>
        </div>

        <h1 className="absolute text-3xl font-montserrat md:text-5xl text-white font-bold p-4 sm:p-0">
          Contact Us{" "}
        </h1>
      </header>
      <section className="flex w-full flex-col md:flex-row gap-4 md:gap-16 items-start justify-center py-16 px-4 sm:px-16 lg:px-[100px]">
        <div className="bg-petwaGreen w-fit p-8 rounded-xl flex flex-col gap-8 items-start justify-start">
          <h2 className=" font-montserrat text-4xl font-bold text-white">
            Contact Details
          </h2>
          <div className="w-full flex flex-col items-start justify-start gap-4">
            <div className=" w-full flex flex-col items-start justify-start gap-2">
              <div className="flex items-center justify-center text-lg font-normal text-petwaPink gap-2">
                <Phone />
                Call Us
              </div>
              <Link href="tel:+264-81-220-8835" className="text-white">
                +264-81-220-8835
              </Link>
            </div>
            <div className=" w-full flex flex-col items-start justify-start gap-2">
              <div className="flex items-center justify-center text-lg font-normal text-petwaPink gap-2">
                <Mail />
                Email Us
              </div>
              <Link href="tel:+264-81-4893-000" className="text-white">
                info@petwafoundation.org
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white w-fit border-2 border-petwaPink border-dashed p-8 rounded-xl flex flex-col gap-8 items-start justify-start">
          <h2 className=" font-montserrat text-4xl font-bold text-petwaGreen">
            Donations
          </h2>
          <div className="w-full flex flex-col md:flex-row items-start justify-start gap-8">
            <div className=" w-full flex flex-col items-start justify-start gap-4">
              <div className="flex items-center text-nowrap w-full justify-center text-lg font-semibold text-petwaGreen gap-2">
                Donate through bank transfer
              </div>
              <div className="flex flex-col items-start justify-start text-sm gap-2 text-[#1f1f1fd0]">
                <p>Petwa Foundtion Welfare</p>
                <p>FNB Namibia</p>
                <p>Account Number: 62275267782</p>
                <p>Branch code: 282672</p>
              </div>
            </div>
            <div className=" w-full flex flex-col items-start justify-start gap-4">
              <div className="flex items-center justify-center text-lg font-semibold text-petwaGreen gap-2">
                Donations by mail
              </div>
              <div className="flex flex-col items-start text-sm justify-start gap-2 text-[#1f1f1fd0]">
                <p>P.O.BOX 25973</p>
                <p>Windhoek</p>
              </div>
            </div>
          </div>
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
