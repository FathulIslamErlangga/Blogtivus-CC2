import Image from "next/image";

export default function HeroPage({}) {
  return (
    <section className="pt-36 ">
      <div className="container-2xl">
        <div className="flex flex-wrap">
          <div className="w-full px-5  self-center lg:w-1/2">
            <h1 className="text-semibold text-base pl-[60px] w-[50%] text-primaryDark lg:text-4xl  lg:text-justify lg:w-full">
              Membangun Masa Depan Digital: Panduan dan Inspirasi untuk Para Web
              Developer.
            </h1>
          </div>
          <div className="w-full  self-end lg:w-1/2">
            <div className="px-5">
              <Image
                className="mx-w-full rounded-lg mx-auto"
                src="/images/hero.webp"
                alt="hero page"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
