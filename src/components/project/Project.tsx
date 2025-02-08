export interface ProjectProp {
  icon: string;
  name: string;
  about: string[];
  date: string;
  link: string;
  technologies: TechnologiesProp[];
}

interface TechnologiesProp {
  name: string;
  icon: string;
}

export default function Project(item: ProjectProp) {
  return (
    <>
      <div className="w-1/4 m-1 shadow-lg">
        <div className="bg-white border rounded-lg overflow-hidden">
          <img className="h-48 w-full object-cover" src={item.icon} />
          <div className="p-6">
            <div className="flex items-baseline">
              <span className="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full">
                Live
              </span>
              <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wider">
                Oh hi
              </div>
            </div>
            <h4 className="mt-1 font-semibold text-lg leading-tight truncate">
              Cruel Summer
            </h4>
            <div className="mt-1">
              Taylor Swift
              <span className="text-gray-600 text-sm"> Artist</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
