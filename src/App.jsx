import "./App.css";
import NavBar from "./components/NavBar";
import ContentCard from "./components/ContentCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-12 px-4 md:px-0 ">
        <div className="col-span-12 col-start-1 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8">
          <ContentCard/>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
