import Image from 'next/image';

const StorySection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">Our Story</h2>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic non culpa quasi, ipsum molestias! Alias expedita reiciendis harum molestiae quasi doloremque error quidem repellat, tempora iste? Laudantium, dolor totam.
            Perspiciatis id perferendis dignissimos quos eligendi quis sequi ea expedita, repellat commodi quo, iusto ad sunt odit fuga voluptates incidunt eaque dolore veritatis atque? Omnis vel repellendus saepe unde est!
            Pariatur, accusantium enim architecto provident soluta nostrum eos praesentium excepturi deserunt, incidunt corporis error? Harum voluptatem rem enim perspiciatis ducimus, at omnis aperiam repudiandae vitae officiis laborum deleniti est vel!
            Sit, enim quia nam aliquam laudantium architecto earum cupiditate iste maxime, magnam at cum assumenda error modi laboriosam explicabo repellendus quasi quaerat ullam culpa odio beatae nostrum ex! Ipsa, esse.
            Vero repellat nisi eum exercitationem quisquam impedit beatae ex eveniet, recusandae illo corrupti nemo tenetur? Labore fugiat, nobis veniam animi magnam iusto asperiores reprehenderit, minima consequatur illo, adipisci dignissimos temporibus.
          </p>

          <p className="text-lg">
            Think of us as the Avengers of safety, but instead of fighting aliens, we're battling bad
            road habits and unfortunate accidents.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <Image
              src="https://ext.same-assets.com/4226829879/4161568687.jpeg"
              alt="Altor Journey"
              width={1200}
              height={675}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
            <h3 className="text-6xl font-bold mb-4">JOURNEY</h3>
          </div>
        </div>

        {/* This would typically be a timeline component but we'll represent it as text for simplicity */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="p-4">
              <h4 className="text-2xl text-altor-light-blue font-bold mb-2">2019</h4>
              <p className="text-sm">Founders assembled with mission of safer roads</p>
            </div>

            <div className="p-4">
              <h4 className="text-2xl text-altor-light-blue font-bold mb-2">2020</h4>
              <p className="text-sm">First prototype developed</p>
            </div>

            <div className="p-4">
              <h4 className="text-2xl text-altor-light-blue font-bold mb-2">2021</h4>
              <p className="text-sm">Secured first round of funding and partnerships</p>
            </div>

            <div className="p-4">
              <h4 className="text-2xl text-altor-light-blue font-bold mb-2">2022</h4>
              <p className="text-sm">Product launch and market entry</p>
            </div>

            <div className="p-4">
              <h4 className="text-2xl text-altor-light-blue font-bold mb-2">2023</h4>
              <p className="text-sm">Expansion and development of new product lines</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
