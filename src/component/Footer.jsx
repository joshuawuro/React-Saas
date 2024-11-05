import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <section className="max-w-[max-width] mx-auto py-16 px-4 grid lg:grid-cols-2 mt-6 gap-8">
        <section>
          <h1 className="w-full text-3xl font-bold text-[--text-green]">
            REACT.
          </h1>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            veritatis dolorem rem recusandae, quisquam voluptates. Suscipit
            fugiat aliquid libero perferendis.
          </p>
          <section className="flex  md:w-[75%] my-3">
            <FaFacebookSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </section>
          <section className="lg:col-span-3 flex justify-between">
            <section>
              <h6 className="font-bold">Solutions</h6>
              <ul>
                <li className="py-2 text-sm">Analytics</li>
                <li className="py-2 text-sm">Marketing</li>
                <li className="py-2 text-sm">Commerce</li>
                <li className="py-2 text-sm">Insights</li>
              </ul>
            </section>
            <section>
              <h6 className="font-bold">Support</h6>
              <ul>
                <li className="py-2 text-sm">Pricing</li>
                <li className="py-2 text-sm">Documentation</li>
                <li className="py-2 text-sm">Guides</li>
                <li className="py-2 text-sm">API Status</li>
              </ul>
            </section>
            <section>
              <h6 className="font-bold">Company</h6>
              <ul>
                <li className="py-2 text-sm">
                  <a href="#about">About</a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#">Blog</a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#">Jobs</a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#">Press</a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#">Careers</a>
                </li>
              </ul>
            </section>
            <section>
              <h6 className="font-bold">Legal</h6>
              <ul>
                <li className="py-2 text-sm">
                  <a href="#about">Claim</a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#">Policy</a>
                </li>
              </ul>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

export default Footer;
