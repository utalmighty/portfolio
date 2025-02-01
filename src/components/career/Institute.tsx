import { TimelineProp } from "./Tab";

export default function Institute(item: TimelineProp) {

    const points = item.about.map(point=> (
        <li className="text-sm">{point}</li>
    ));

  return (
    <>
    <div className="flex flex-row">
        <div>{item.icon}</div>
        <div className="ml-5">
            <div className="text-xs text-gray-500">{item.date}</div>
            <div className="font-semibold leading-none">{item.name}</div>
            <p className="text-sm text-gray-500">{item.position}</p> 
            <div>{points}</div>
        </div>
      </div>
    </>
  );
}
