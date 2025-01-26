import Tab from "./tab";

export default function Career() {
  return (
    <div className="flex">
      <div className="w-0 md:w-1/6"></div>
      <div className="w-full md:w-4/6 flex md:flex-row flex-wrap bg-slate-200 border md:rounded-md">
        <Tab />
      </div>
      <div className="w-0 md:w-1/6"></div>
    </div>
  );
}
