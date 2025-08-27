import Header from "./components/Header";
import Footer from "./components/Footer";
import Food from "./components/Food";
import Card from "./components/Card";
import Button from "./Button/Button";

function App() {
  return (
    <>
      <Header />
      <Food />
      <div>
        <Card />
      </div>
      <Button />
      <Footer />
    </>
  );
}

export default App;
