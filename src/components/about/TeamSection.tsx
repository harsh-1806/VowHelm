import Image from 'next/image';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  imageSrc: string;
  linkedIn: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Shamik Guha",
    position: "Co-Founder & CEO",
    imageSrc: "https://ext.same-assets.com/4226829879/3255381899.jpeg",
    linkedIn: "https://in.linkedin.com/in/shamik-guha"
  },
  {
    id: 2,
    name: "Aninda Ghosh",
    position: "Director & CTO",
    imageSrc: "https://ext.same-assets.com/4226829879/1241424573.jpeg",
    linkedIn: "http://www.linkedin.com/in/aninda-ghosh"
  },
  {
    id: 3,
    name: "Anamitra Ghosh",
    position: "CBO",
    imageSrc: "https://ext.same-assets.com/4226829879/1191992393.jpeg",
    linkedIn: "https://in.linkedin.com/in/anamitra-ghosh"
  },
  {
    id: 4,
    name: "Nirjan Munshi",
    position: "Head of Software",
    imageSrc: "https://ext.same-assets.com/4226829879/3425654474.jpeg",
    linkedIn: "https://in.linkedin.com/in/nirjanmunshi"
  },
  {
    id: 5,
    name: "Trinanku Mondal",
    position: "Head of Hardware",
    imageSrc: "https://ext.same-assets.com/4226829879/2662996740.jpeg",
    linkedIn: "https://in.linkedin.com/in/trinanku-mondal-9263471a8"
  },
  {
    id: 6,
    name: "Rajarshi Roy",
    position: "Senior Hardware Developer",
    imageSrc: "https://ext.same-assets.com/4226829879/2032727564.jpeg",
    linkedIn: "https://in.linkedin.com/in/roy-rajarshi)"
  }
];

const TeamSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">Meet the Team at</h2>
          <h3 className="text-5xl font-bold text-altor-light-blue">ALTOR</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <div className="relative w-56 h-56 rounded-full overflow-hidden bg-altor-light-blue p-1 mb-4">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    width={224}
                    height={224}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
              <p className="text-gray-400 mb-3">{member.position}</p>

              <a
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-altor-light-blue rounded-full"
              >
                <Image
                  src="https://ext.same-assets.com/4226829879/2127593361.png"
                  alt="LinkedIn"
                  width={16}
                  height={16}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
