import Card from "./component/card";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Layout from "./pages/common/Layout";
import Company from "./pages/Company";
import Newsletter from "./component/Newsletter";

function App() {
  return (
    <>
      <Layout />
      <Hero />
      <Company />
      <Newsletter />
      <Card />
      <Footer />
    </>
  );
}

export default App;
