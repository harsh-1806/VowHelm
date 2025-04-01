import MainLayout from "@/components/layout/MainLayout";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CommunityPost {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
}

const communityPosts: CommunityPost[] = [
  {
    id: 1,
    title: "My First Ride with the Altor Smart Helmet",
    description: "I've been using the Altor Smart Helmet for a month now, and I'm blown away by the features. The accident detection gives me peace of mind on every ride.",
    image: "https://ext.same-assets.com/4226829879/227574190.png",
    author: "Rohit Sharma",
    date: "March 15, 2024"
  },
  {
    id: 2,
    title: "How Altor Saved My Ride",
    description: "The SOS feature on my Altor helmet literally saved me when I had a minor accident on a remote highway. Help arrived within minutes!",
    image: "https://ext.same-assets.com/4226829879/981778133.png",
    author: "Priya Patel",
    date: "February 28, 2024"
  },
  {
    id: 3,
    title: "Group Ride with #friendsofaltor",
    description: "Just completed an epic 300km ride with fellow Altor users. The helmet-to-helmet communication made it so much easier to coordinate.",
    image: "https://ext.same-assets.com/4226829879/623651818.png",
    author: "Ajay Mehta",
    date: "March 10, 2024"
  },
  {
    id: 4,
    title: "Safety First: My Altor Experience",
    description: "As a daily commuter in Bangalore traffic, the smart features of my Altor helmet have transformed my riding experience completely.",
    image: "https://ext.same-assets.com/4226829879/2167124154.png",
    author: "Lakshmi Rao",
    date: "March 22, 2024"
  }
];

export default function CommunityPage() {
  return (
    <MainLayout>
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-altor-light-blue">
              #friendsofaltor
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Join our community of smart riders who are revolutionizing road safety.
              Share your experiences, stories, and connect with fellow Altor users.
            </p>
          </div>

          <div className="mb-20">
            <div className="flex justify-center gap-6 mb-10">
              <Button className="bg-altor-blue text-white hover:bg-altor-light-blue">
                Share Your Story
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Join Community
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {communityPosts.map((post) => (
                <Card key={post.id} className="bg-gray-900 border-gray-800 overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-64 md:h-auto relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="flex-1 p-6">
                      <h3 className="text-xl font-bold mb-2 text-altor-light-blue">{post.title}</h3>
                      <p className="text-gray-300 mb-4">{post.description}</p>
                      <div className="mt-auto">
                        <p className="text-sm text-gray-400">Posted by: {post.author}</p>
                        <p className="text-sm text-gray-400">{post.date}</p>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Join the Conversation</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <span className="text-altor-light-blue text-lg cursor-pointer hover:text-white transition-colors">#AllorSafety</span>
              <span className="text-altor-light-blue text-lg cursor-pointer hover:text-white transition-colors">#SmartRider</span>
              <span className="text-altor-light-blue text-lg cursor-pointer hover:text-white transition-colors">#RideSafe</span>
              <span className="text-altor-light-blue text-lg cursor-pointer hover:text-white transition-colors">#AltorHelmet</span>
              <span className="text-altor-light-blue text-lg cursor-pointer hover:text-white transition-colors">#FriendsOfAltor</span>
            </div>
            <p className="text-gray-300">
              Follow us on social media and tag us in your posts to be featured!
            </p>
            <div className="flex justify-center space-x-6 mt-6">
              <a href="https://www.instagram.com/altorsmarthelmet/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://ext.same-assets.com/4226829879/499349214.png"
                  alt="Instagram"
                  width={30}
                  height={30}
                />
              </a>
              <a href="https://www.facebook.com/altorsmarthelmet" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://ext.same-assets.com/4226829879/2454383028.png"
                  alt="Facebook"
                  width={30}
                  height={30}
                />
              </a>
              <a href="https://www.linkedin.com/company/altortech/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://ext.same-assets.com/4226829879/3796878745.png"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
