"use client";

import Image from "next/image";

const Accreditation = () => {
  return (
    <section className="w-full">
      <div className="grid md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="bg-[#061a3a] text-white flex flex-col justify-center px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Ranking of{" "}
            <span className="text-red-500">Excellence</span>
            <br />
            in{" "}
            <span className="text-pink-500">
              Shoolini University Online
            </span>
          </h2>

          <p className="mt-6 text-gray-300 text-lg max-w-md">
            Shoolini University Online is recognised for its strong academic record.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#f5f5f5] px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center text-center">

            {/* ITEM 1 */}
            <div>
              <Image
                src="/Naac-A+.webp"
                alt="NAAC"
                width={220}
                height={220}
                className="mx-auto"
              />
             
            </div>

            {/* ITEM 2 */}
            <div>
              <Image
                src="/UGC.webp"
                alt="UGC"
                width={220}
                height={220}
                className="mx-auto"
              />
            
            </div>

            {/* ITEM 3 */}
            <div>
              <Image
                src="/nirf.png"
                alt="NIRF"
                width={220}
                height={220}
                className="mx-auto"
              />
             
            </div>

            {/* ITEM 4 */}
            <div>
              <Image
                src="/rank-23.webp"
                alt="THE Ranking"
                width={220}
                height={220}
                className="mx-auto"
              />
              
            </div>

            {/* ITEM 5 */}
            <div>
              <Image
                src="/the-ranking.webp"
                alt="THE Engineering"
                width={220}
                height={220}
                className="mx-auto"
              />
            
            </div>

            {/* ITEM 6 */}
            <div>
              <Image
                src="/qs.webp"
                alt="QS Ranking"
                width={220}
                height={220}
                className="mx-auto"
              />
              
             
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Accreditation;
