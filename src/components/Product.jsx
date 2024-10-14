import Button from "./Button"

const Product = ({data}) => {
  return (
    <div className='wrapper w-full h-64 border-b-2 px-5 text-white flex items-center'>
        <div className='content-div max-w-screen-lg mx-auto flex items-center justify-between'>
            <h1 className="title text-5xl font-medium">{data.title}</h1>
            <div className="details w-1/3 flex flex-col gap-5">
                <h5>{data.description}</h5>
                <div className=" buttons flex items-center gap-3">
                    {data.live && <Button title="Live Website" />}
                    {data.case && <Button title="Case Study" />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product