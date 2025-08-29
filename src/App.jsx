import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-12 px-4 md:px-0 ">
        <div className="col-span-12 col-start-1 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8 bg-red-600">
          
        </div>
      </div>
    </>
  );
}

export default App;
