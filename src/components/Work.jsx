const Work = () => {
  var images = [
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8ccb75f918dc861c6c3_Layout%20Land%20-%204%203.webp",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8846629f4e91cbfc152_Cula%20-%204%203.webp",
      top: "55%",
      left: "42%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d7f33bdfd7f713ff552d_Singularity%20-%204%203.webp",
      top: "45%",
      left: "55%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d3cbf37cf4d6ddc1f21b_Umault%20-%204%203.webp",
      top: "54%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d86a8a9b4a0505553454_Arqitel%20-%204%203.webp",
      top: "56%",
      left: "55%",
      isActive: false,
    }
  ];

  return (
    <div className="w-full h-[70vh]">
      <div className="relative max-w-screen-lg h-full mx-auto flex items-center justify-center">
        <h1 className="text-[30vw] leading-none font-medium select-none">
          work
        </h1>
      <div className="absolute top-0 w-full h-full">
        {images.map((elem, index) => (elem.isActive && (<img key={index} className="absolute w-72 -translate-x-[50%] -translate-y-[50%]" src={elem.url} style={{top: elem.top, left: elem.left}} />)))}
      </div>
      </div>
    </div>
  );
};

export default Work;
