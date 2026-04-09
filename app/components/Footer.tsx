export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-6 px-4 md:px-10">
      <p className="text-sm md:text-base text-center leading-relaxed max-w-6xl mx-auto">
        Disclaimer: We act as a marketing service partner only. Shoolini University hold full rights to request change or removal of any non-relevant content. Images used are for illustrative purposes and do not directly represent the respective colleges or universities.{" "}
        
        <a
          href="#"
          className="text-blue-400 hover:underline ml-1"
        >
          Privacy-Policy
        </a>{" "}
        &{" "}
        <a
          href="#"
          className="text-blue-400 hover:underline"
        >
          terms-conditions
        </a>
      </p>
    </footer>
  );
}