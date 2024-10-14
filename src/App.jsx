import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Stripes from "./components/Stripes";
import Work from "./components/Work";

const App = () => {
  return (
    <div className='w-full h-fit bg-zinc-900 text-white font-["satoshi"]'>
      <Navbar />
      <Work />
      <Stripes />
      <Products />
    </div>
  );
};

export default App;
