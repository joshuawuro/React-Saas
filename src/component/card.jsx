import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

function Card() {
  return (
    <>
      <section className="w-full py-[10rem] px-4 bg-[--text-white] text-[--bg-black]">
        <section className="max-w-[--max-width] mx-auto grid md:grid-cols-3 gap-8">
          <section className="shadows w-full flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img className="w-20 mx-auto pt-10" src={single} alt="single" />
            <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
            <p className="text-center text-4xl font-bold">$149</p>
            <section className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
              <p className="py-2 border-b mx-8">1 Granted User</p>
              <p className="py-2 border-b mx-8">Send up to 2GB</p>
            </section>
            <button className="bg-[--text-green] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-[--bg-black] hover:text-[--text-green]">
              Start Trial
            </button>
          </section>

          {/* Second card */}
          <section className="shadows w-full flex flex-col p-4 my-4 md:my-0 rounded-lg hover:scale-105 duration-300 bg-gray-100 pt-10">
            <img className="w-20 mx-auto" src={double} alt="single" />
            <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
            <p className="text-center text-4xl font-bold">$149</p>
            <section className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
              <p className="py-2 border-b mx-8">1 Granted User</p>
              <p className="py-2 border-b mx-8">Send up to 2GB</p>
            </section>
            <button className="bg-[--bg-black] text-[--text-green] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-[--text-green] hover:text-[--bg-black]">
              Start Trial
            </button>
          </section>

          {/* third card */}
          <section className="shadows w-full flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 pt-10">
            <img className="w-20 mx-auto" src={triple} alt="single" />
            <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
            <p className="text-center text-4xl font-bold">$149</p>
            <section className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
              <p className="py-2 border-b mx-8">1 Granted User</p>
              <p className="py-2 border-b mx-8">Send up to 2GB</p>
            </section>
            <button className="bg-[--text-green] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-[--bg-black] hover:text-[--text-green]">
              Start Trial
            </button>
          </section>
        </section>
      </section>
    </>
  );
}

export default Card;
