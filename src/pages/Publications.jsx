import TitleText from "../components/TitleText";

const publications = [
  {
    title: "Gravity Wave Interaction with Cage Enveloped Breakwaters using DBEM",
    authors: "Chandra Shekhar Nishad, K.G. Vijay, S. Neelamani and J.T. Chen",
    year: 2023,
    publisher: "IEEE",
  },
  {
    title: "Gravity Wave Interaction with Cage Enveloped Breakwaters using DBEM",
    authors: "Chandra Shekhar Nishad, K.G. Vijay, S. Neelamani and J.T. Chen",
    year: 2023,
    publisher: "IEEE",
  },
];

export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white p-4 rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return (
    <div className={`flex flex-col h-full ${className}`}>
      {children}
    </div>
  );
}

export default function Publications() {
  return (
    <div className="flex flex-col items-start mt-8">
      <TitleText text="Publications" />
      {publications.map((pub, index) => (
        <Card key={index} className="mb-4 flex w-full">
          <CardContent className="flex-grow flex flex-col justify-between min-h-[150px] sm:min-h-[130px]">
            <div>
              <h2 className="sm:text-xl font-semibold text-left">{pub.title}</h2>
              <p className="text-gray-600 text-left max-sm:text-xs">By {pub.authors}</p>
            </div>
            <div className="flex gap-2">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                {pub.publisher}
              </span>
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                {pub.year}
              </span>
            </div>
          </CardContent>
          <div className="w-64 h-32 sm:w-32 sm:h-32 bg-gray-300 rounded-md"></div>
        </Card>
      ))}
    </div>
  );
}
