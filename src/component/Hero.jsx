import Navbar from "../pages/common/Navbar";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <>
      <section>
        <Navbar />
        <section className="max-w-[800px] mt-[-96px] w-full h-screen m-auto text-center flex flex-col justify-center items-center">
          <p className="text-[--text-green] font-bold p-2">
            GROWING WITH DATA ANALYTICS
          </p>
          <h1 className="md:text-7xl sm:6xl text-4xl font-bold md:py-6">
            Grow with data.
          </h1>
          <div className="flex flex-row md:text-2xl text-1x py-4">
            <p>Fast, flexible finacing for </p>
            <ReactTyped
              className="pl-1 text-[--text-green] "
              strings={["B2B.", "BTC.", "SAAS."]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className="md:text-2xl text-xl text-gray-600 px-2">
            Monitor your data analytics to increase revenue for B2B, BTC, & SAAS
            platforms.
          </p>
          <button className="bg-[--text-green] py-2 px-6 rounded-lg my-6 mx-auto text-[--bg-black]">
            Get Started
          </button>
        </section>
      </section>
    </>
  );
}

export default Hero;
