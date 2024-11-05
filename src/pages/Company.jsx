import laptop from "../assets/laptop.jpg";

function Company() {
  return (
    <>
      <section className="w-full px-6 py-4 bg-[--text-white]" id="company">
        <section className="grid md:grid-cols-2 max-w-[--max-width] mx-auto my-10 justify-center items-center gap-10">
          <img src={laptop} alt="laptop image" className="md:w-4/5" />
          <section className="flex flex-col justify-center items-center md:justify-normal md:items-start">
            <p className="text-[--text-green] font-bold text-left">
              DATA ANALYTICS DASHBOARD
            </p>
            <h2 className="text-[--bg-black] my-3 font-bold text-3xl">
              Manage Data Analytics Centrally
            </h2>
            <p className="text-[--bg-black] ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ea a rerum amet iste assumenda quod, officiis vitae
              soluta eius laudantium facilis, architecto nihil possimus eligendi
              maiores vel blanditiis sint.
            </p>
            <button className="text-[--text-green] bg-[--bg-black] py-2 px-6 rounded-md my-5 font-medium">
              Get Started
            </button>
          </section>
        </section>
      </section>
    </>
  );
}

export default Company;
