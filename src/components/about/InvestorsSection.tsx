import Image from 'next/image';

interface Investor {
  id: number;
  name: string;
  position: string;
  company: string;
  imageSrc: string;
  logoSrc: string;
}

const investors: Investor[] = [
  {
    id: 1,
    name: "Aman Gupta",
    position: "Co-Founder & CMO",
    company: "boAt Lifestyle",
    imageSrc: "https://ext.same-assets.com/4226829879/1554893142.jpeg",
    logoSrc: "https://ext.same-assets.com/4226829879/3615415898.png"
  },
  {
    id: 2,
    name: "Namita Thapar",
    position: "Executive Director",
    company: "Emcure Pharmaceuticals",
    imageSrc: "https://ext.same-assets.com/4226829879/3090393605.jpeg",
    logoSrc: "https://ext.same-assets.com/4226829879/2408571767.png"
  },
  {
    id: 3,
    name: "Venture Catalysts",
    position: "India's 1st Multi-Stage VC",
    company: "Startup Developers",
    imageSrc: "https://ext.same-assets.com/4226829879/3268309419.jpeg",
    logoSrc: "https://ext.same-assets.com/4226829879/2723972142.png"
  },
  {
    id: 4,
    name: "Vega",
    position: "Leading motorcycle helmet manufacturer",
    company: "",
    imageSrc: "https://ext.same-assets.com/4226829879/281075889.jpeg",
    logoSrc: "https://ext.same-assets.com/4226829879/1828503579.png"
  },
  {
    id: 5,
    name: "ICE Ventures",
    position: "Where Budding Entrepreneurs Meet Investors",
    company: "",
    imageSrc: "https://ext.same-assets.com/4226829879/3268309419.jpeg",
    logoSrc: "https://ext.same-assets.com/4226829879/1828503579.png"
  },
  {
    id: 6,
    name: "IIIT Hyderabad",
    position: "International Institute of Information Technology",
    company: "",
    imageSrc: "https://ext.same-assets.com/4226829879/17526463.jpeg",
    logoSrc: "https://ext.same-assets.com/4226829879/1828503579.png"
  }
];

const InvestorsSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Investors</h2>
          <p className="text-center text-gray-300 max-w-3xl mx-auto">
            The visionaries who believe in ALTOR's mission to redefine smart mobility. Our esteemed
            investors, reflecting the trust and collaboration fueling our journey towards a safer,
            smarter, and more connected future. Together, we're accelerating the next wave of mobility
            innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {investors.map((investor) => (
            <div
              key={investor.id}
              className="bg-altor-blue rounded-xl p-4 flex flex-col items-center"
            >
              <div className="h-48 w-48 relative mb-4">
                <Image
                  src={investor.imageSrc}
                  alt={investor.name}
                  width={192}
                  height={192}
                  className="object-cover rounded-lg"
                />
              </div>

              <h3 className="text-xl font-bold mb-1">{investor.name}</h3>

              <div className="h-8 mb-2">
                {investor.logoSrc && (
                  <Image
                    src={investor.logoSrc}
                    alt={`${investor.name} logo`}
                    width={120}
                    height={30}
                    className="object-contain h-full"
                  />
                )}
              </div>

              <p className="text-sm text-center">{investor.position}</p>
              {investor.company && (
                <p className="text-sm text-center">{investor.company}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;
