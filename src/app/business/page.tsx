import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function BusinessPage() {
  return (
    <MainLayout>
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-altor-light-blue">
              For Business
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Upgrade your fleet's safety with Altor's cutting-edge smart helmet technology and
              comprehensive mobility solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Enterprise Solutions</h2>
              <p className="text-lg mb-6">
                Our smart helmet technology provides real-time monitoring, enhanced safety, and improved
                efficiency for delivery fleets, ride-sharing companies, and logistics operators.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-altor-light-blue mr-2">•</span>
                  <span>Fleet management and tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-altor-light-blue mr-2">•</span>
                  <span>Rider behavior monitoring and analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-altor-light-blue mr-2">•</span>
                  <span>Accident detection and emergency response</span>
                </li>
                <li className="flex items-start">
                  <span className="text-altor-light-blue mr-2">•</span>
                  <span>Custom branding and solutions</span>
                </li>
              </ul>
              <Link href="/aboutus#contact">
                <Button className="bg-altor-blue text-white hover:bg-altor-light-blue">
                  Contact Sales
                </Button>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/4226829879/889386468.png"
                alt="Enterprise Solutions"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-black rounded-lg">
                <h3 className="text-xl font-bold mb-3">Zomato Partnership</h3>
                <p className="mb-4">
                  Equipped 10,000+ delivery partners with smart helmets, reducing accident rates by 30%
                  and improving emergency response times.
                </p>
                <Image
                  src="https://ext.same-assets.com/4226829879/2265957685.png"
                  alt="Zomato Partnership"
                  width={200}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="p-6 bg-black rounded-lg">
                <h3 className="text-xl font-bold mb-3">Fleet Management</h3>
                <p className="mb-4">
                  Implemented rider safety and tracking solution for corporate fleet, resulting in 25%
                  improvement in route efficiency and safety compliance.
                </p>
              </div>
              <div className="p-6 bg-black rounded-lg">
                <h3 className="text-xl font-bold mb-3">Custom Solutions</h3>
                <p className="mb-4">
                  Developed bespoke safety systems for logistics companies, incorporating specific
                  requirements and branded experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
