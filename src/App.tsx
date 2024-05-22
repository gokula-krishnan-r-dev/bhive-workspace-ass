import Banner from "./components/shared/banner";
import Footer from "./components/shared/footer";
import Hero from "./components/shared/hero";
import ListWorkspace from "./components/shared/list-workspace";
import WhyChooseUs from "./components/shared/why-choose-us";

function App() {
  return (
    <div className="App ">
      <Hero />
      <WhyChooseUs />
      <ListWorkspace />
      <Banner />
      <Footer copyrightText="Bhive Private Limited" />
    </div>
  );
}

export default App;
