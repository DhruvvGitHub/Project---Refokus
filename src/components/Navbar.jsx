import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-lg h-[10vh] mx-auto py-3 flex items-center justify-between border-b-[1px] border-zinc-500">
      <div className="left flex items-center gap-10">
        <h5 className="text-lg">Refokus</h5>
        <div className="links flex items-center text-md gap-5">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) => {
            return elem.length === 0 ? (
              <span key={index} className="w-[1px] h-6 bg-slate-300"></span> // Render a span when elem is empty
            ) : (
              <a key={index} className="flex items-center gap-1">
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.4em #00FF19" }}
                    className="inline-block w-1.5 h-1.5 rounded-full bg-green-500"
                  ></span>
                )}
                {elem}
              </a>
            );
          })}
        </div>
      </div>
      < Button />
    </div>
  );
};

export default Navbar;
