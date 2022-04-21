import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import Config from "./config/Config";
function App() {
  return (
    <HelmetProvider>
      <Config />
    </HelmetProvider>
  );
}

export default App;
