function Newsletter() {
  return (
    <>
      <section className="w-full py-16 md:py-32 px-4">
        <section className="max-w-[--max-width] mx-auto grid lg:grid-cols-3 gap-10">
          <section className="lg:col-span-2">
            <h1 className="text-2xl md:text-4xl font-bold py-2">
              Want tips & tricks to optimize your flow?
            </h1>
            <p className="text-sm md:text-xl">
              Sign up to our newletter and stay up to date.
            </p>
          </section>
          <section className="border-t border-gray-600 md:border-none">
            <input
              type="email"
              placeholder="email"
              className="w-[200px] md:w-[250px] p-2 rounded-md text-[--bg-black] mt-10 md:mt-0"
            />
            <button className="bg-[--text-green] text-[--bg-black] px-4 py-2 rounded-md ml-2 button-hover-effects">
              Notify me
            </button>
            <p className="my-4">
              We care about the protection of your data. Read our{" "}
              <span className="text-[--text-green]">Privacy Policy</span>.
            </p>
          </section>
        </section>
      </section>
    </>
  );
}

export default Newsletter;
