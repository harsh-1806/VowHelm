import Image from 'next/image';

interface HelmetModel {
  id: number;
  name: string;
  imgSrc: string;
}

const models: HelmetModel[] = [
  {
    id: 1,
    name: "LITE Founder's Edition",
    imgSrc: "https://ext.same-assets.com/4226829879/623651818.png"
  },
  {
    id: 2,
    name: "PRO Founder's Edition",
    imgSrc: "https://ext.same-assets.com/4226829879/2167124154.png"
  }
];

const PreviousModelsSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Founder's Edition</h2>
          <p className="text-xl text-altor-light-blue">
            (Previous Models)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {models.map((model) => (
            <div
              key={model.id}
              className="flex flex-col items-center"
            >
              <div className="h-64 w-full bg-gray-900 rounded-lg p-6 flex items-center justify-center">
                <Image
                  src={model.imgSrc}
                  alt={model.name}
                  width={300}
                  height={300}
                  className="object-contain max-h-full"
                />
              </div>
              <h3 className="mt-4 text-xl font-medium">{model.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousModelsSection;
