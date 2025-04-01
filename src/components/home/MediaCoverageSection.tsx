import Image from "next/image";
import Link from "next/link";

interface MediaItem {
  id: number;
  imgSrc: string;
  url: string;
  alt: string;
}
const mediaItems: MediaItem[] = [
    {
        id: 1,
        imgSrc: 'https://placehold.co/600x400/EEE/31343C',
        url: 'https://www.republicworld.com/info/food-delivery-giant-introduce-bluetooth-enabled-helmets-with-ai-powered-features',
        alt: 'Republic World',
    },
    {
        id: 2,
        imgSrc: 'https://placehold.co/600x400/EEE/31343C',
        url: 'https://www.medianews4u.com/zomato-celebrates-10000-emergency-heroes-across-india/',
        alt: 'Media News',
    },
    {
        id: 3,
        imgSrc: 'https://placehold.co/600x400/EEE/31343C',
        url: 'https://www.thehindu.com/sci-tech/technology/zomato-to-train-delivery-partners-in-first-aid-and-cpr-will-distribute-3-lakh-bluetooth-helmets/article67775885.ece',
        alt: 'The Hindu',
    },
    {
        id: 4,
        imgSrc: 'https://placehold.co/600x400/EEE/31343C',
        url: 'https://inc42.com/features/30-startups-to-watch-the-startups-that-caught-our-eye-in-june-2020/',
        alt: 'Inc42',
    },
    {
        id: 5,
        imgSrc: 'https://placehold.co/600x400/EEE/31343C',
        url: 'https://startuphyderabad.com/altor-the-smart-helmet/',
        alt: 'Startup Hyderabad',
    },
    {
        id: 6,
        imgSrc: 'https://placehold.co/600x400/EEE/31343C',
        url: 'https://www.sinceindependence.com/tech/startup/altor-smart-helmet-startups-idea-came-after-friends-death-in-accident',
        alt: 'Since Independence',
    },
    {
        id: 7,
        imgSrc: 'https://placehold.co/600x400/EEE/31343C',
        url: 'https://www.magzter.com/stories/technology/Exhibit/ALTOR-TACKLES-PUBLIC-SAFETY-WITH-INNOVATION',
        alt: 'Magzter',
    },
    {
        id: 8,
        imgSrc: 'https://placehold.co/600x400/EEE/31343C',
        url: 'https://www.deccanchronicle.com/technology/in-other-news/110220/venture-catalysts-backs-iot-and-ai-enabled-smart-helmet-maker-altor.html',
        alt: 'Deccan Chronicle',
    },
    {
        id: 9,
        imgSrc: 'https://placehold.co/600x400/EEE/31343C',
        url: 'https://yourstory.com/2020/02/startup-funding-venture-catalysts-smart-helmet-altor',
        alt: 'Your Story',
    },
]


const MediaCoverageSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-grotesk font-bold mb-12 text-altor-light-blue text-center">
          Media Coverage
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {mediaItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-900 hover:bg-gray-800 transition-colors rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-4 h-48 flex items-center justify-center">
                <Image
                  src={item.imgSrc}
                  alt={item.alt}
                  width={240}
                  height={120}
                  className="object-contain max-h-full"
                />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/aboutus"
            className="inline-block text-altor-light-blue hover:text-white transition-colors text-lg font-medium"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MediaCoverageSection;
