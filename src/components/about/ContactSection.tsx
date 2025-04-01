import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-altor-light-blue">Contact Us</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Your gateway to connecting with ALTOR. Reach out to explore how we can collaborate to drive innovation in smart mobility, enhance road safety, or bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white">First Name</Label>
                  <Input id="firstName" placeholder="First Name" className="bg-gray-800 border-gray-700 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white">Last Name</Label>
                  <Input id="lastName" placeholder="Last Name" className="bg-gray-800 border-gray-700 text-white" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="organization" className="text-white">Organisation Name</Label>
                <Input id="organization" placeholder="Organisation Name" className="bg-gray-800 border-gray-700 text-white" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Phone</Label>
                  <Input id="phone" placeholder="Phone" className="bg-gray-800 border-gray-700 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input id="email" type="email" placeholder="Email" className="bg-gray-800 border-gray-700 text-white" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="designation" className="text-white">Designation</Label>
                <Input id="designation" placeholder="Designation" className="bg-gray-800 border-gray-700 text-white" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements" className="text-white">Requirements</Label>
                <textarea
                  id="requirements"
                  placeholder="Requirements"
                  rows={3}
                  className="w-full rounded-md bg-gray-800 border-gray-700 text-white p-2"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="solution" className="text-white">Required Kind of Solution</Label>
                <select
                  id="solution"
                  className="w-full rounded-md bg-gray-800 border-gray-700 text-white p-2 h-10"
                >
                  <option value="" disabled selected>Select solution</option>
                  <option value="smart-helmet">Smart Helmet</option>
                  <option value="app-integration">App Integration</option>
                  <option value="fleet-management">Fleet Management</option>
                  <option value="custom-solution">Custom Solution</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="units" className="text-white">No. of Units</Label>
                <Input id="units" type="number" placeholder="No. of Units" className="bg-gray-800 border-gray-700 text-white" />
              </div>

              <Button
                type="submit"
                className="w-full bg-altor-light-blue hover:bg-altor-blue text-white font-bold py-3"
              >
                Submit
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Map */}
            <div className="h-64 sm:h-80 bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/2794139860/42212080.svg"
                alt="Map"
                width={800}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Address Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Address:</h3>
                <h4 className="font-bold mb-2">Kolkata</h4>
                <p className="text-gray-300 text-sm">
                  Tower C3- 4A, One Rajarhat, BG 9, Service Rd,<br />
                  Action Area 1B,<br />
                  Kolkata, New Town,<br />
                  West Bengal 700156, India
                </p>
                <a
                  href="mailto:contact@altor.tech"
                  className="text-altor-light-blue hover:underline mt-2 inline-block"
                >
                  contact@altor.tech
                </a>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="font-bold mb-2">Bengaluru</h4>
                <p className="text-gray-300 text-sm">
                  3rd Floor, Nasscom, CoE IOT<br />
                  29/A, 27th Main Rd, Sector 5, 1st Sector,<br />
                  HSR Layout, Bengaluru,<br />
                  Karnataka 560102, India
                </p>
                <p className="text-gray-300 mt-2">
                  +91 7003811239
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
