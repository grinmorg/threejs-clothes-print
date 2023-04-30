import { useState } from "react";
import Home from "./pages/Home";
import AIPicker from "./components/AIPicker";
import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import { ToastContainer } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="app transition-all ease-in">
      <ToastContainer />
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;
