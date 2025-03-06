import TitleText from "../components/TitleText";
import events from "../data/programs";

export default function Programs() {

  return (
    <div className="flex flex-col items-start" id="program">
      <TitleText text="Programs" />
      <div className="grid md:grid-cols-2 gap-6 max-w-2xl mt-3">
        {events.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={event.image} alt={event.title} className="w-full h-56 object-cover" />
            <div className="p-4 flex flex-col items-start">
              <h2 className="text-xl font-semibold text-left line-clamp-2 h-14">{event.title}</h2>
              <p className="text-gray-500 text-sm">{event.date}</p>
              <p className="mt-3 text-gray-700 text-left">{event.description}</p>
              {/* <a href={event.link} className="mt-4 inline-block text-blue-600 font-semibold hover:underline">
                  View Details →
                </a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}