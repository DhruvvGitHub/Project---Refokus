import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full py-32">
      <div className="max-w-screen-lg mx-auto flex gap-3">
        <Card first={true} width={"basis-1/3"} lastline={true} />
        {/* Pass hover class statically */}
        <Card second={true} width={"basis-2/3"} start={true} button={true} hover={true} />
      </div>
    </div>
  );
};

export default Cards;
