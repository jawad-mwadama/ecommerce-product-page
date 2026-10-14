import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="text-shadow-indigo-500">
      <h1 className="p-5">
        <Navbar />
        <Hero />
      </h1>
    </div>
  );
}

export default App;
