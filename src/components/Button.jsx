import { FaAngleRight } from "react-icons/fa";

const Button = ({title = "Get Started"}) => {
  return (
    <div className="w-40 py-3 text-black rounded-full bg-zinc-100 flex items-center justify-center gap-3">
        <span className="text-sm font-medium">{title}</span>
        <FaAngleRight />
    </div>
  )
}

export default Button