import Image from "next/image";

export default function ThreeEasySteps() {
  const cards = [
    {
      img: "/loving-home-icon.png",
      title: "REACH OUT",
      text: "Fill out the form online, call or text us, and we’ll collect your property details.",
    },
    {
      img: "/new_contact-icon.jpg",
      title: "RECEIVE YOUR OFFER",
      text: "We’ll review your property details and provide you with a fair cash offer or other options that best suit your situation.",
    },
    {
      img: "/money-icon.jpg",
      title: "GET YOUR FUNDS",
      text: "We’ll close the deal quickly and ensure you get paid, so you can move forward with your life.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-[350px] md:w-[300px] sm:w-full min-w-[250px] bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300"
        >
          {/* Icon */}
          <Image
            src={card.img}
            alt={card.title}
            width={150}
            height={150}
            className="mb-4"
          />

          {/* Title */}
          <h3 className="text-xl font-semibold dark:text-gray-800">{card.title}</h3>

          {/* Text */}
          <p className="text-gray-600 mt-2">{card.text}</p>
        </div>
      ))}
    </div>
  );
}