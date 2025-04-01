import Image from 'next/image';

const AppSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">ALTOR Ride App</h2>
          <p className="text-xl text-altor-light-blue">
            Your smart safety copilot
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-auto">
              <Image
                src="https://ext.same-assets.com/4226829879/391620695.png"
                alt="Altor Mobile App"
                width={280}
                height={560}
                className="object-contain"
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-altor-light-blue">
                Mobile App & SDK
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-altor-light-blue mr-2">•</span>
                  <span>Smart Safety CoPilot</span>
                </li>
                <li className="flex items-start">
                  <span className="text-altor-light-blue mr-2">•</span>
                  <span>Accident detection & SOS Alert</span>
                </li>
                <li className="flex items-start">
                  <span className="text-altor-light-blue mr-2">•</span>
                  <span>Rider behaviour detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-altor-light-blue mr-2">•</span>
                  <span>Live Tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-altor-light-blue mr-2">•</span>
                  <span>Altor Ride Score</span>
                </li>
                <li className="flex items-start">
                  <span className="text-altor-light-blue mr-2">•</span>
                  <span>Post-accident Services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-altor-light-blue mr-2">•</span>
                  <span>Live Dashboard</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
