const Stripe = ({ val }) => {
  return (
    <div className="w-[20%] h-[8vh] px-8 py-4 flex items-center justify-between border-zinc-600 border-t-[1px] border-b-[1px] border-r-[1px]">
      <img src={val.url} className="w-52 scale-75 object-cover" />
      <span className="text-xl">{val.number}</span>
    </div>
  );
};

export default Stripe;
