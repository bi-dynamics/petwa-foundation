import { Button } from "@/components/ui/button";
import Image from "next/image";
import HERO_IMAGE from "../../public/hero.png";
import HERO_BACKGROUND from "../../public/hero-background.svg";
import FLOWER_BACKGROUND from "../../public/flowers.png";
import OBJECTIVES_1 from "../../public/objectives-1.jpg";
import OBJECTIVES_2 from "../../public/objectives-2.jpg";
import OBJECTIVES_3 from "../../public/objectives-3.jpg";
import OBJECTIVES_4 from "../../public/objectives-4.jpg";
import ABOUT_BACKGROUND from "../../public/about-us-section.jpg";
import GALLERY_1 from "../../public/gallery/gallery-1.jpg";
import GALLERY_2 from "../../public/gallery/gallery-2.jpg";
import GALLERY_3 from "../../public/gallery/gallery-3.jpg";
import GALLERY_4 from "../../public/gallery/gallery-4.jpg";
import GALLERY_5 from "../../public/gallery/gallery-5.jpg";
import GALLERY_6 from "../../public/gallery/gallery-6.jpg";
import TEAM_PHOTO from "../../public/petwa-team.jpg";
import DONATE_CTA from "../../public/call-to-action.jpg";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="h-screen w-full flex flex-col md:flex-row bg-[#F9F0EC] gap-16 items-end md:justify-end justify-center sm:pt-0">
        <div className="w-full px-4 md:pl-[100px] self-center flex flex-col gap-8">
          <div className="flex flex-col text-center md:text-left gap-2">
            <h1 className=" font-montserrat text-[36px] sm:text-[42px] text-petwaGreen md:text-black font-bold text-pretty">
              Petwa Foundation - <br />
              Serving The Disadvantaged.
            </h1>
            <p className=" text-lg sm:text-2xl">
              Promoting <strong>health</strong>, providing{" "}
              <strong>support</strong>, <br /> building <strong>hope</strong>.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center md:justify-start sm:flex-row gap-4">
            <Link href="/contact-us">
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
            <Link href="/contact-us">
              <Button
                size="lg"
                className="w-fit mt-4 bg-petwaGreen rounded-full text-base flex items-center justify-center gap-2 py-[32px] px-[18px] font-medium"
              >
                LEARN MORE
                <div className="bg-white p-[10px] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#328059"
                      d="M12.455 2.309L12 2.076l-.455.233a12 12 0 0 0-3.09 2.265A14 14 0 0 1 12 7.202a14 14 0 0 1 3.544-2.628a12 12 0 0 0-3.089-2.265m-1.756 6.425a11.98 11.98 0 0 0-6.518-3.536L3 4.98V13a9 9 0 0 0 5.697 8.374A14 14 0 0 1 8 17c0-3.092 1.002-5.95 2.7-8.266M21 4.981l-1.18.217C14.232 6.224 10 11.117 10 17c0 1.536.29 3.007.817 4.36l.24.615c.314.01.629.025.943.025a9 9 0 0 0 9-9z"
                    ></path>
                  </svg>
                </div>
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full h-full hidden md:block relative">
          <Image
            src={HERO_IMAGE}
            alt="Petwa Foundation"
            fill
            className=" -scale-x-100 "
          />
        </div>
        <div className="absolute hidden md:block  z-20 w-full">
          <Image
            src={HERO_BACKGROUND}
            alt="background"
            className="w-full h-1/4"
          />
        </div>
      </header>
      <section className="bg-petwaGreen w-full h-fit flex flex-col items-start justify-end gap-16 px-4 sm:px-16 lg:px-[100px] pt-16 ">
        <div className="absolute flex flex-grow left-0 w-full h-full">
          <div className="w-full h-full z-[2] sm:bg-gradient-to-b sm:from-petwaGreen sm:to-transparent"></div>
          <Image
            src={FLOWER_BACKGROUND}
            alt="flowers"
            fill
            className="w-full object-cover opacity-20 absolute h-full z-[1]"
          />
        </div>
        <h2 className=" font-montserrat text-4xl font-bold text-white">
          Our Objectives
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 lg:gap-16 z-[2] mb-16">
          <div className="w-full h-full ">
            <div className=" w-full h-[500px] relative">
              <Image
                src={OBJECTIVES_1}
                alt="Healthy Living for All"
                fill
                className="object-cover rounded-t-xl object-top"
              />
            </div>
            <div className="w-full h-fit flex flex-col gap-4 items-start justify-start py-8">
              <h3 className=" font-montserrat tracking-wide text-lg sm:text-2xl font-bold text-white">
                Healthy Living for All
              </h3>
              <p className="text-white text-sm sm:text-lg">
                To promote a healthy lifestyle amongst the vulnerable people in
                the most disadvantage communities through awareness raising in
                the Windhoek district.
              </p>
            </div>
          </div>

          <div className="w-full h-full ">
            <div className=" w-full h-[500px] relative">
              <Image
                src={OBJECTIVES_2}
                alt="Healthy Living for All"
                fill
                className="object-cover rounded-t-xl object-center"
              />
            </div>
            <div className="w-full h-fit flex flex-col gap-4 items-start justify-start py-8">
              <h3 className=" font-montserrat tracking-wide text-lg sm:text-2xl font-bold text-white">
                Quality Healthcare for Everyone
              </h3>
              <p className="text-white text-sm sm:text-lg">
                To provide accessible and affordable health services to the most
                vulnerable people through a primary health care programme.
              </p>
            </div>
          </div>

          <div className="w-full h-full ">
            <div className=" w-full h-[500px] relative">
              <Image
                src={OBJECTIVES_3}
                alt="Healthy Living for All"
                fill
                className="object-cover rounded-t-xl object-center"
              />
            </div>
            <div className="w-full h-fit flex flex-col gap-4 items-start justify-start py-8">
              <h3 className=" font-montserrat tracking-wide text-lg sm:text-2xl font-bold text-white">
                Investing in the Future
              </h3>
              <p className="text-white text-sm sm:text-lg">
                To provide financial assistance to vulnerable tertiary students.
              </p>
            </div>
          </div>

          <div className="w-full h-full ">
            <div className=" w-full h-[500px] relative">
              <Image
                src={OBJECTIVES_4}
                alt="Healthy Living for All"
                fill
                className="object-cover rounded-t-xl object-center"
              />
            </div>
            <div className="w-full h-fit flex flex-col gap-4 items-start justify-start py-8">
              <h3 className=" font-montserrat tracking-wide text-lg sm:text-2xl font-bold text-white">
                Fuelling Our Mission
              </h3>
              <p className="text-white text-sm sm:text-lg">
                To conduct fundraising activities in order to carry out the
                objectives of the organization.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#26442D] relative w-full h-fit flex flex-col items-center justify-center gap-8 px-4 lg:px-[100px] py-16 ">
        <Image
          src={ABOUT_BACKGROUND}
          alt="About Us"
          fill
          className="w-full object-cover object-center brightness-75 opacity-20 absolute h-full z-[0]"
        />
        <div className="w-full h-full flex flex-col items-center justify-center text-center gap-4 max-w-[900px] z-10">
          <h2 className=" font-montserrat text-2xl sm:text-4xl font-bold text-white">
            Empowering Namibian Communities
          </h2>
          <p className="text-white text-center text-sm sm:text-lg">
            Petwa Foundation is a registered Namibian welfare organization
            dedicated to improving the lives of marginalized communities. The
            name "Petwa", derived from the Oshikwanyama language, signifies our
            commitment to "straighten and make better" the lives of those in
            need. We strive to promote healthy lifestyles, provide accessible
            healthcare, and support education.
          </p>
        </div>
        <Link href="/contact-us" className="z-10">
          <Button
            size="lg"
            className="w-fit mt-4 bg-petwaGreen rounded-full text-base flex items-center justify-center gap-2 py-[32px] px-[18px] font-medium"
          >
            ABOUT US
            <div className="bg-white p-[10px] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#328059"
                  d="M12.455 2.309L12 2.076l-.455.233a12 12 0 0 0-3.09 2.265A14 14 0 0 1 12 7.202a14 14 0 0 1 3.544-2.628a12 12 0 0 0-3.089-2.265m-1.756 6.425a11.98 11.98 0 0 0-6.518-3.536L3 4.98V13a9 9 0 0 0 5.697 8.374A14 14 0 0 1 8 17c0-3.092 1.002-5.95 2.7-8.266M21 4.981l-1.18.217C14.232 6.224 10 11.117 10 17c0 1.536.29 3.007.817 4.36l.24.615c.314.01.629.025.943.025a9 9 0 0 0 9-9z"
                ></path>
              </svg>
            </div>
          </Button>
        </Link>
      </section>
      <section className="bg-[#F9F0EC] w-full h-fit flex flex-col items-center justify-center gap-16 px-4 sm:px-16 lg:px-[100px] pt-16 ">
        <h2 className=" font-montserrat text-4xl font-bold text-petwaGreen">
          Gallery
        </h2>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-8  relative z-[2] mb-16">
          <Image
            src={GALLERY_1}
            alt="Gallery"
            className="object-cover rounded-xl w-full h-60 sm:h-[500px] object-center"
          />
          <Image
            src={GALLERY_2}
            alt="Gallery"
            className="object-cover rounded-xl w-full h-60 sm:h-[500px] object-center"
          />{" "}
          <Image
            src={GALLERY_3}
            alt="Gallery"
            className="object-cover rounded-xl w-full h-60 sm:h-[500px] object-center"
          />{" "}
          <Image
            src={GALLERY_4}
            alt="Gallery"
            className="object-cover rounded-xl w-full h-60 sm:h-[500px] object-center"
          />{" "}
          <Image
            src={GALLERY_5}
            alt="Gallery"
            className="object-cover rounded-xl w-full h-60 sm:h-[500px] object-center"
          />{" "}
          <Image
            src={GALLERY_6}
            alt="Gallery"
            className="object-cover rounded-xl w-full h-60 sm:h-[500px] object-center"
          />
        </div>
      </section>

      <section className="bg-[#F9F0EC] w-full h-fit flex flex-col items-center justify-center gap-16 px-4 lg:px-[100px] py-16 ">
        <div className="w-full h-fit flex flex-col  items-center justify-center max-w-[900px] gap-4">
          <h2 className=" font-montserrat text-4xl font-bold text-petwaGreen">
            Meet Our Team
          </h2>
          <p className="text-petwaGreen text-center text-sm sm:text-lg">
            Guided by a dedicated team of seven committed individuals, the Petwa
            Foundation is driven by a shared passion for improving the lives of
            vulnerable Namibians.
          </p>
        </div>
        <div className="flex items-center w-full max-w-[900px] h-full justify-center">
          <Image
            src={TEAM_PHOTO}
            alt="Healthy Living for All"
            className="object-cover rounded-xl w-full h-full object-center"
          />
        </div>

        <Link href="/contact-petwa-foundation" className="z-10">
          <Button
            size="lg"
            className="w-fit mt-4 bg-petwaGreen rounded-full text-base flex items-center justify-center gap-2 py-[32px] px-[18px] font-medium"
          >
            VIEW TEAM MEMBERS
            <div className="bg-white p-[10px] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#328059"
                  d="M12.455 2.309L12 2.076l-.455.233a12 12 0 0 0-3.09 2.265A14 14 0 0 1 12 7.202a14 14 0 0 1 3.544-2.628a12 12 0 0 0-3.089-2.265m-1.756 6.425a11.98 11.98 0 0 0-6.518-3.536L3 4.98V13a9 9 0 0 0 5.697 8.374A14 14 0 0 1 8 17c0-3.092 1.002-5.95 2.7-8.266M21 4.981l-1.18.217C14.232 6.224 10 11.117 10 17c0 1.536.29 3.007.817 4.36l.24.615c.314.01.629.025.943.025a9 9 0 0 0 9-9z"
                ></path>
              </svg>
            </div>
          </Button>
        </Link>
      </section>

      <section className="bg-[#26442D] relative w-full h-fit flex flex-col sm:flex-row items-center justify-center gap-8 lg:px-[100px] px-4 sm:px-8 py-16 ">
        <Image
          src={DONATE_CTA}
          alt="About Us"
          fill
          className="w-full object-cover object-center brightness-75 opacity-20 absolute h-full z-[0]"
        />
        <div className="w-full h-full flex flex-col items-start justify-between gap-4 z-10">
          <h2 className="w-full font-montserrat text-2xl sm:text-4xl text-center sm:text-left font-bold text-white">
            Make a Difference Today.
          </h2>
          <p className="text-white text-center sm:text-left text-sm sm:text-lg">
            Join us in our mission to uplift disadvantaged communities. Your
            support can create lasting change.
          </p>
        </div>
        <Link href="/contact-us" className="z-10">
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
    </>
  );
}
