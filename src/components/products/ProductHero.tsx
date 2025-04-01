import Image from "next/image";

const ProductHero = () => {
  return (
    <section className="relative w-full h-[90vh] bg-black text-white flex items-center justify-center">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-60" />
      </div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-altor-light-blue">
          WORLD'S FIRST<br />
          <span className="text-white">GESTURE-CONTROLLED<br />SMART HELMET</span>
        </h1>

        <div className="mt-10 relative w-full max-w-3xl mx-auto">
          <Image
            src="https://ext.same-assets.com/4226829879/227574190.png"
            alt="Smart Helmet"
            width={800}
            height={500}
            className="object-contain mx-auto"
          />
        </div>

        <div className="mt-8 flex items-center justify-center space-x-2">
          <Image
            src="https://ext.same-assets.com/4226829879/1301121003.png"
            alt="Axor Logo"
            width={100}
            height={30}
            className="object-contain"
          />
          <Image
            src="https://ext.same-assets.com/4226829879/229421472.png"
            alt="Altor"
            width={100}
            height={50}
            className="object-contain"
          />
        </div>

        <div className="mt-6 text-center">
          <h3 className="text-2xl font-bold mb-2">Smart Helmet</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>Accident Detection and SOS Alerts</li>
            <li>Bluetooth 5.1</li>
            <li>Hands-free communication</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
