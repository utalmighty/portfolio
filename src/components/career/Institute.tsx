import { TimelineProp } from "./Tab";

export default function Institute(item: TimelineProp) {
  const points = item.about.map((point, indx) => (
    <li key={indx} className="text-lg md:text-sm">
      {point}
    </li>
  ));

  return (
    <>
      <div className="flex flex-row mt-5 mb-10">
        <div className="mt-2">
          <span className="mt-1 relative flex shrink-0 overflow-hidden rounded-full size-12 md:size-14 border border-gray-400 bg-white">
            <img src={item.icon} className="aspect-square h-full w-full bg-background object-contain"></img>
          </span>
        </div>
        <div className="ml-5 md:ml-10 ">
          <div className="text-sm text-gray-500 mb-1 md:mb-0">{item.date}</div>
          <a href={item.link} target="_blank">
            <div className="text-xl md:text-lg font-semibold leading-none mb-1 md:mb-0">
              {item.name}
            </div>
          </a>
          <p className="text-md md:text-sm text-gray-500 mb-1">
            {item.position} &bull; {item.location}
          </p>
          <div>
            <ul className="ml-4 list-outside list-disc">{points}</ul>
          </div>
        </div>
      </div>
    </>
  );
}
