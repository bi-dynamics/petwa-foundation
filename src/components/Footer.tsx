import FLOWER_BACKGROUND from "../../public/flowers.png";
import Image from "next/image";
import PETWA_LOGO from "../../public/Petwa-Foundation-logo.jpg";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <>
      <section className=" relative w-full h-fit flex overflow-hidden flex-col items-start lg:items-end justify-start  lg:justify-end gap-4 pt-16 px-4 sm:px-16 ">
        <div className="w-full h-full absolute bottom-0">
          <Image
            src={FLOWER_BACKGROUND}
            alt="flowers"
            fill
            className=" object-cover opacity-5 w-full h-full  z-[-2]"
          />
          <div className="absolute w-full h-full bg-gradient-to-b from-white to-transparent z-[-1]"></div>
        </div>

        <div className="relative w-full flex flex-col sm:flex-wrap lg:flex-row items-start justify-center gap-8 lg:border-b-2 lg:border-b-green-700 border-opacity-80 pb-8">
          <Image
            src={PETWA_LOGO}
            alt="Petwa Foundation Logo"
            className="w-[128px] h-auto"
          />
          <div className="flex flex-col items-start w-fit justify-start gap-4">
            <h4 className=" font-montserrat text-base font-bold text-[#1f1f1f]">
              Navigation
            </h4>
            <div className="flex flex-col gap-2 items-start justify-start text-[#1f1f1fd0]">
              <Link href="/" className="text-sm hover:text-petwaGreen">
                Home
              </Link>
              <Link
                href="/about-petwa-foundation"
                className="text-sm hover:text-petwaGreen"
              >
                About Us
              </Link>
              <Link href="/" className="text-sm hover:text-petwaGreen">
                Our Team
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start w-fit justify-start gap-4">
            <h4 className=" font-montserrat text-base font-bold text-[#1f1f1f]">
              What We Do
            </h4>
            <div className="flex flex-col gap-2 items-start justify-start text-[#1f1f1fd0]">
              <Link href="/" className="text-sm hover:text-petwaGreen">
                Board Meetings
              </Link>
              <Link href="/" className="text-sm hover:text-petwaGreen">
                Fundraising Initiatives
              </Link>
              <Link href="/" className="text-sm hover:text-petwaGreen">
                Our Current Beneficiaries
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-8 items-start justify-start">
            <div className="flex flex-col items-start justify-start gap-4">
              <h4 className=" font-montserrat text-base font-bold text-[#1f1f1f]">
                Contact Us
              </h4>
              <div className="flex flex-col gap-2 items-start justify-start text-[#1f1f1fd0]">
                <Link href="tel:+264-81-4893-000" className="text-sm">
                  Call:{" "}
                  <strong className="hover:text-petwaGreen">
                    +264-81-4893-000
                  </strong>
                </Link>
                <Link
                  href="mailto:info@petwafoundation.org"
                  className="text-sm"
                >
                  Email Us:{" "}
                  <strong className="hover:text-petwaGreen">
                    info@petwafoundation.org
                  </strong>
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-4">
              <h4 className=" font-montserrat text-base font-bold text-[#1f1f1f]">
                Follow Our Story
              </h4>
              <div className="flex gap-2 items-start justify-start text-[#1f1f1fd0]">
                <Link
                  href="https://www.facebook.com/p/Petwa-Foundation-100081150661236/"
                  target="_blank"
                  className="text-sm"
                >
                  <Facebook fill="black" />
                </Link>
                <Link
                  href="https://www.instagram.com/petwafoundation/"
                  target="_blank"
                  className="text-sm"
                >
                  <Instagram fill="black" color="white" />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start gap-4 pt-8 lg:pt-0 lg:pl-8 lg:border-t-0 border-t-petwaGreen border-t-2 lg:border-l-petwaGreen lg:border-l-2">
            <h4 className=" font-montserrat text-base font-bold text-[#1f1f1f]">
              Donate Through Bank Transfer
            </h4>
            <div className="flex flex-col gap-2 items-start justify-start text-[#1f1f1fd0]">
              <p>Petwa Foundtion</p>
              <p>Bank Windhoek</p>
              <p>Account Number: 2000478786</p>
              <p>Branch code: 482972</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <h4 className=" font-montserrat text-base font-bold text-[#1f1f1f]">
              Donations By Mail
            </h4>
            <div className="flex flex-col gap-2 items-start justify-start text-[#1f1f1fd0]">
              <p>P.O.BOX 25973</p>
              <p>Windhoek</p>
            </div>
          </div>
        </div>
        <div className="w-full h-fit py-4 flex items-center justify-center">
          <p className=" text-[#1f1f1fd0] text-sm">
            © 2025 Petwa Foundation | All Rights Reserved
          </p>
        </div>
      </section>
      <div className="w-full h-fit text-sm bg-petwaGreen flex items-center justify-center py-2">
        <p className="text-white">Designed and Developed by </p>
        <Link
          href="https://www.bi-dynamics.com"
          target="_blank"
          className=" text-petwaPink pl-1 font-bold tracking-wider"
        >
          BI-Dynamics
        </Link>
      </div>
    </>
  );
}
