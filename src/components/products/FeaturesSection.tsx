import Image from 'next/image';

interface Feature {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "World's First Gesture-Controlled Interface",
    description: "Control your helmet with simple swipes for an effortless riding experience.",
    imgSrc: "https://ext.same-assets.com/4226829879/1500311568.gif"
  },
  {
    id: 2,
    title: "Accident Detection & SOS Alert",
    description: "Automatically send alerts during accidents for quick action within the Golden Hour.",
    imgSrc: "https://ext.same-assets.com/4226829879/1965085841.gif"
  },
  {
    id: 3,
    title: "Voice Assistance",
    description: "Access Google Assistant or Siri hands-free while you ride.",
    imgSrc: "https://ext.same-assets.com/4226829879/3962561575.gif"
  },
  {
    id: 4,
    title: "Hands-Free Communication",
    description: "Easily manage calls—accept, decline, redial—all without lifting a finger.",
    imgSrc: "https://ext.same-assets.com/4226829879/1992436856.gif"
  },
  {
    id: 5,
    title: "Turn-by-Turn Audio Navigation",
    description: "Stay on course with clear, hands-free audio navigation.",
    imgSrc: "https://ext.same-assets.com/4226829879/3151311412.gif"
  },
  {
    id: 6,
    title: "Rider Behavior & Altor Riding Score",
    description: "Track, analyze, and improve your riding habits with smart data insights.",
    imgSrc: "https://ext.same-assets.com/4226829879/1288090708.gif"
  }
];

const FeaturesSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-altor-light-blue text-center">
          Explore our Range of Smart Safety Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-start"
            >
              <div className="w-full h-48 mb-6 overflow-hidden rounded-lg bg-gray-900 flex items-center justify-center">
                <Image
                  src={feature.imgSrc}
                  alt={feature.title}
                  width={200}
                  height={150}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-altor-light-blue">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
