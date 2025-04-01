import Image from "next/image";
import Link from "next/link";

const SmartHelmetsSection = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side with helmet image */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <Image
              src="https://placehold.co/600x600"
              alt="VowHelm Helmet"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>

          {/* Right side with text content */}
          <div className="lg:w-1/2 px-6 lg:pl-12">
            <h2 className="text-5xl font-bold mb-4 text-altor-light-blue">
              Syed Ka<br />Helmet
            </h2>
            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi neque dicta quidem ea soluta eius non, corrupti architecto! Nisi corporis fuga repellat rem similique magni cum pariatur quae maxime doloremque.
              Aperiam vero unde dolorum tempora numquam optio officiis ullam eum, magni fuga, voluptatem nisi, nihil hic a consequatur repudiandae laborum non? Deserunt officiis deleniti cupiditate pariatur, maiores ratione modi aut?
            </p>
            <Link
              href="#"
              className="inline-flex items-center text-altor-light-blue hover:text-white transition-colors"
            >
              View More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartHelmetsSection;
