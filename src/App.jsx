import Navbar from "./components/Navbar"
import Stripes from "./components/Stripes"
import Work from "./components/Work"

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white font-["satoshi"]'>

      <Navbar />
      <Work />
      <Stripes />
    </div>
  )
}

export default App