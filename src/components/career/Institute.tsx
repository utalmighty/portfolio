import { TimelineProp } from "./Tab";

export default function Institute(item: TimelineProp) {

    const points = item.about.map((point, indx)=> (
        <li key={indx} className="text-lg md:text-sm">{point}</li>
    ));

    const position = item.position ? item.position + " | " + item.location : item.location;

  return (
    <>
    <div className="flex flex-row mt-5 mb-10">
        <div className="mt-2">
          <img src={item.icon} className="m-1 size-14 border border-gray-400 rounded-full object-contain"></img>
        </div>
        <div className="ml-10">
            <div className="text-sm text-gray-500 mb-1 md:mb-0">{item.date}</div>
            <div className="text-xl md:text-lg font-semibold leading-none mb-1 md:mb-0">{item.name}</div>
            <p className="text-md md:text-sm text-gray-500 mb-1">{position}</p>
            <div>{points}</div>
        </div>
      </div>
    </>
  );
}
