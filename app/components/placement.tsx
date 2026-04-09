import Image from "next/image";

export default function Placement() {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      
      {/* Heading */}
      <h2 className="text-[#ff2b57] text-4xl md:text-5xl font-bold mb-12 text-center">
        THINK PLACEMENT
      </h2>

      {/* Images Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center">

        {/* Image 1 */}
        <div className="flex justify-center">
          <div className="relative w-[220px] h-[220px]">
            <Image src="/shoolini-placment1-.webp" alt="logo1" fill className="object-contain   transition duration-300" />
          </div>
        </div>

        {/* Image 2 */}
        <div className="flex justify-center">
          <div className="relative w-[220px] h-[220px]">
            <Image src="/shoolini-placment2.webp" alt="logo2" fill className="object-contain  transition duration-300" />
          </div>
        </div>

        {/* Image 3 */}
        <div className="flex justify-center">
          <div className="relative w-[220px] h-[220px]">
            <Image src="/shoolini-placment3.webp" alt="logo3" fill className="object-contain transition duration-300" />
          </div>
        </div>

        {/* Image 4 */}
        <div className="flex justify-center">
          <div className="relative w-[220px] h-[220px]">
            <Image src="/shoolini-placment4.webp" alt="logo4" fill className="object-contain  transition duration-300" />
          </div>
        </div>

        {/* Image 5 */}
        <div className="flex justify-center">
          <div className="relative w-[220px] h-[220px]">
            <Image src="/shoolini-placment5.webp" alt="logo5" fill className="object-contain  transition duration-300" />
          </div>
        </div>

        {/* Image 6 */}
        <div className="flex justify-center">
          <div className="relative w-[220px] h-[220px]">
            <Image src="/shoolini-placment6.webp" alt="logo6" fill className="object-contain  transition duration-300" />
          </div>
        </div>

        {/* Image 7 */}
        <div className="flex justify-center">
          <div className="relative w-[220px] h-[220px]">
            <Image src="/shoolini-placment7.webp" alt="logo7" fill className="object-contain  transition duration-300" />
          </div>
        </div>

        {/* Image 8 */}
        <div className="flex justify-center">
          <div className="relative w-[220px] h-[220px]">
            <Image src="/hind.webp" alt="hind" fill className="object-contain  transition duration-300" />
          </div>
        </div>

        {/* Image 9 */}
        <div className="flex justify-center">
          <div className="relative w-[220px] h-[220px]">
            <Image src="/ici.webp" alt="ici" fill className="object-contain  transition duration-300" />
          </div>
        </div>

        {/* Image 10 */}
        <div className="flex justify-center">
          <div className="relative w-[220px] h-[220px]">
            <Image src="/ig.webp" alt="ig" fill className="object-contain  transition duration-300" />
          </div>
        </div>

        {/* Image 11 */}
        <div className="flex justify-center">
          <div className="relative w-[2220px] h-[220px]">
            <Image src="/nes.webp" alt="nes" fill className="object-contain  transition duration-300" />
          </div>
        </div>
       
       {/* Image 12 */}
        <div className="flex justify-center">
          <div className="relative w-[220px] h-[220px]">
            <Image src="/bio-DES.webp" alt="bio-DES" fill className="object-contain  transition duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}