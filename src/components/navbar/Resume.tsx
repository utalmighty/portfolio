import document from "../../assets/document.svg";

export default function resume() {
  return (
    <div>
      <a href="https://drive.google.com/file/d/1-Gd6AW1vQE4dfUwJ-pTdR-GT-tZEpZpB/view?usp=sharing" target="blank">
        <div className="flex flex-row bg-slate-400 shadow-lg hover:shadow-md rounded-full p-4 mr-[0.1rem]
        hover:scale-105 transition duration-700">
          <img src={document} className="mr-1 w-4"></img>
          Resume
        </div>
      </a>
    </div>
  );
}
