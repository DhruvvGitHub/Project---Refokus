const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-lg mx-auto py-10 flex text-white">
        <div className="left basis-1/2">
          <h1 className="text-[8vw] leading-none tracking-tight mb-3">refokus.</h1>
          <div className="flex gap-6 text-zinc-500">
          {          ["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map((item, index) => {
            return <h5 key={index} className="">{item}</h5>
          })}
          </div>
        </div>
        <div className="right basis-1/2 flex items-start justify-start gap-32">
          <div className="socials">
            <h5 className="mb-5">Socials</h5>
            {["Instagram", "Twitter (X)", "LinkedIn"].map((elem, index) => {
              return <a key={index} className="block mb-1 text-zinc-500">{elem}</a>;
            })}
          </div>
          <div className="sitemap">
            <h5 className="mb-5">Sitemap</h5>
            {["Home", "Works", "Careers", "Contact"].map((elem, index) => {
              return <a key={index} className="block mb-1 text-zinc-500">{elem}</a>;
            })}
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
