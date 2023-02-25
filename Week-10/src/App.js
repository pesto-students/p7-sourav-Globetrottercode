import "./styles.css";
import { Navbar } from "./Navbar.js";
import { InputArea } from "./InputArea";
import { UpperSection } from "./UpperSection";
import { Footer } from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <UpperSection />
      <InputArea />
      <Footer />
    </div>
  );
}
