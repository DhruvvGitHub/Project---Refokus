const Marquee = ({imagesURLs}) => {
  return (
    <div className="w-full flex gap-24 whitespace-nowrap overflow-x-hidden py-8">
        {imagesURLs.map((elem, index) => {
            return <img key={index} src={elem} className="scale-125" />
        })}
    </div>
  )
}

export default Marquee