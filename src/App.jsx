import Header from "./components/Header";
import Footer from "./components/Footer";
import Food from "./components/Food";
import Card from "./components/Card";
import Button from "./components/Button/Button";
import Student from "./components/Student";

function App() {
  return (
    <>
      <Header />
      <Food />
      <div>
        <Card />
      </div>
      <div>
        <Student name="Spongebob" age={30} isStudent={true}/>
        <Student name="Patrick" age={42} isStudent={false} />
        <Student name="Squidward" age = {50} isStudent={false} />
        <Student name="Sandy" age={27} isStudent={true}/>
      </div>
      <Button />
      <Footer />
    </>
  );
}

export default App;
