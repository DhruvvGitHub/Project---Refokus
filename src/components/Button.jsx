import { FaAngleRight } from "react-icons/fa";

const Button = () => {
  return (
    <div className="px-5 py-2 text-black rounded-full bg-zinc-100 flex items-center gap-3">
        <span className="text-sm font-medium">Get Started</span>
        <FaAngleRight />
    </div>
  )
}

export default Button