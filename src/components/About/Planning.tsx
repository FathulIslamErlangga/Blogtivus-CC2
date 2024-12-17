import React from "react";

const Planning = () => {
  return (
    <>
      <div className="container-2xl pt-32">
        <div className="flex flex-wrap">
          <div className="w-full pl-14  self-center lg:w-1/2">
            <h1 className="text-semibold text-base lg:pl-[50px]  text-primaryDark lg:text-2xl pb-5 lg:text-justify lg:w-full">
              Misi
            </h1>
            <div className="lg:pl-[50px]">
              <p>
                Blog ini bertujuan untuk menjadi sumber utama informasi dan
                edukasi dalam dunia teknologi dan pemrograman. Kami ingin
                membantu pembaca dari berbagai latar belakang untuk memahami
                teknologi dengan cara yang sederhana, relevan, dan praktis.
              </p>
            </div>
          </div>
          <div className="w-full  self-end lg:w-1/2">
            <div className="pl-14 lg:pl-0">
              <h1 className="text-semibold text-base   text-primaryDark lg:text-2xl py-5 lg:pt-0 lg:text-justify lg:w-full">
                Visi
              </h1>
              <div className="lg:pr-[60px]">
                <p>
                  Menjadi platform terdepan yang menginspirasi dan mendukung
                  perkembangan komunitas teknologi global, dengan menyediakan
                  wawasan, alat, dan sumber daya berkualitas tinggi untuk
                  pembelajaran dan inovasi.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-20 mx-auto">
            <h1 className="text-lg text-primaryDark text-center font-semibold lg:text-2xl pb-8">
              Primary Goals
            </h1>
            <div className="pl-10 lg:pl-0">
              <p>
                1.Meningkatkan Literasi Teknologi: Membantu pembaca memahami
                tren teknologi terbaru dan konsep pemrograman melalui artikel
                yang mudah dipahami.
              </p>
              <p>
                2.Membangun Komunitas: Menghubungkan pembaca dengan individu dan
                organisasi yang berbagi minat di bidang teknologi dan
                pemrograman.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Planning;
