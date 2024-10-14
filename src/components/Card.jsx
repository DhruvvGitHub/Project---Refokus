import { MdSubdirectoryArrowRight } from "react-icons/md";
import Button from "./Button";

const Card = ({ first, width, start, button, lastline, hover }) => {
  return (
    <div
      className={`${width} h-[30rem] bg-zinc-700 p-5 rounded-xl flex flex-col justify-between ${
        hover  ? "hover:bg-violet-600" : ""
      }`}
    >
      <div className="sec-1 flex flex-col gap-3">
        <div className="first w-full flex items-center justify-between">
          <h5>Up Next: News</h5>
          <MdSubdirectoryArrowRight />
        </div>
        <h3 className="text-2xl font-medium">
          {first ? "Insights and behind the scenes" : "Let's get to it, together."}
        </h3>
      </div>
      <div className="heading">
        {start && <h1 className="text-6xl font-semibold">Start a Project</h1>}
      </div>
      {button && <Button title="Contact Us" />}
      {lastline && <h5>Explore what drives our team.</h5>}
    </div>
  );
};

export default Card;
