import IconCart from "../images/icon-cart.svg";
import mobile from "../images/image-product-mobile.jpg";
import desktop from "../images/image-product-desktop.jpg";

function App() {
  return (
    <div className="App flex">
      <div className="card lg:card-side bg-white">
        <figure className="lg:h-[45rem]">
          <img src={desktop} className="hidden lg:block" />
          <img src={mobile} className="block lg:hidden" />
        </figure>
        <div className="card-body lg:w-96 text-left w-72">
          <p className="tracking-[4px] -translate-y-4 lg:-translate-y-0 text-[#6c7289]">
            PERFUME
          </p>
          <h1 className="card-title text-2xl lg:text-5xl -translate-y-2 lg:translate-y-4">
            Gabrielle <br className="hidden lg:inline" />
            Essence Eau <br className="hidden lg:inline" /> De Parfum
          </h1>
          <p className="lg:text-2xl lg:mt-10 lg:leading-9 text-[14px] w-64 lg:w-80 lg:translate-y-8 text-[#6c7289] ">
            A floral,solar and voluptuous interpretation composed by Olivier
            Polge,Perfumer-Creator for the House of CHANEL
          </p>
          <div className="flex lg:mt-32 translate-y-2">
            <h1 className="text-[#3c8067] text-4xl text-left lg:-translate-y-10">
              $149.99
            </h1>
            <p className="mt-2 ml-6 line-through lg:-translate-y-10 text-[#6c7289]">
              $169.99
            </p>
          </div>
          <button className="btn normal-case btn-primary m-auto w-full bg-[#3c8067] border-none lg:mt-4 hover:bg-green-900 translate-y-4 lg:-translate-y-8">
            <img src={IconCart} className="-translate-x-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
