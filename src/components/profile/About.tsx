import Name from "./Name";

export default function About() {
  return (
    <>
      <div className="m-10 text-center">
        <p>Hello, I'm</p>
        <Name/>
        <p className="text-xl sm:text-2xl sm:font-bold text-slate-400">India</p>
        <p className="text-xl sm:text-2xl sm:font-semibold">Full stack developer</p>
      </div>
    </>
  );
}
