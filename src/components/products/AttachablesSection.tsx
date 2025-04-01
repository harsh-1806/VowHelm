import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Attachable {
  id: number;
  title: string;
  description: string[];
  imgSrc: string;
}

const attachables: Attachable[] = [
  {
    id: 1,
    title: "Mercury",
    description: [
      "Modern-day messenger",
      "Hands-free calls & voice assistants"
    ],
    imgSrc: "https://ext.same-assets.com/4226829879/1402947969.png"
  },
  {
    id: 2,
    title: "Sentinel",
    description: [
      "Vehicle Guardian",
      "Live Tracking",
      "Vehicle Anti-theft",
      "Overspeeding Detection"
    ],
    imgSrc: "https://ext.same-assets.com/4226829879/2902081821.png"
  },
  {
    id: 3,
    title: "Sentry",
    description: [
      "Ride Guardian",
      "Helmet Wear Detection",
      "Chin-Strap Locking Detection",
      "Vehicle Immobilization"
    ],
    imgSrc: "https://ext.same-assets.com/4226829879/53234220.png"
  }
];

const AttachablesSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Attachables</h2>
          <p className="text-xl text-altor-light-blue">
            Your Ride's Essential Safety Upgrade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attachables.map((item) => (
            <Card
              key={item.id}
              className="bg-gray-900 border-gray-800 text-white hover:bg-gray-800 transition-colors"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-altor-light-blue">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-48 flex items-center justify-center mb-6">
                  <Image
                    src={item.imgSrc}
                    alt={item.title}
                    width={200}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <ul className="space-y-1 text-sm">
                  {item.description.map((desc) => (
                    <li key={`${item.id}-${desc}`} className="flex items-start">
                      <span className="text-altor-light-blue mr-2">•</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttachablesSection;
