import Resume from "./Resume";
import Username from "./Username";

export default function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="mt-0 sm:mt-2 fixed top-0 h-20 w-full sm:w-5/6 rounded-b-xl sm:rounded-2xl bg-neutral-500/10 backdrop-blur-sm px-4 flex justify-between items-center z-50 opacity-100">
          <Username />
          <Resume />
        </div>
        <div className="mt-0 sm:mt-2 w-full top-0 h-20 static"></div>
      </div>
    </>
  );
}
