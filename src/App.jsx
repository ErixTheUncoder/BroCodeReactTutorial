import Header from "./components/Header";
import Footer from "./components/Footer";
import Food from "./components/Food";
import Card from "./components/Card";
import Button from "./components/Button/Button";
import Student from "./components/Student";
import UserGreeting from "./components/UserGreeting";
import List  from "./components/List";

function App() {
  const fruits = [{id:0,name:"apple",calories: 95},
                  {id:1,name:"orange",calories:45},
                  {id:2,name: "banana",calories:45},
                  {id:3,name: "coconut", calories:159},
                  {id:4,name: "pineapple", calories: 37}];

  const vegetables= [{id:6,name:"potatos",calories: 110},
                    {id:7,name:"celery",calories:15},
                    {id:8,name: "carrots",calories:25},
                    {id:9,name: "corn", calories:63},
                    {id:10,name: "broccoli", calories: 50}];
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
        <Student />
      </div>
      <div>
        <UserGreeting isLoggedIn={true}  username="Erixtetris"/>
      </div>
      <Button />
      <List items={fruits} category="Fruits"/>
      <List items={vegetables} category="Vegetables"/>
      <Footer />
    </>
  );
}

export default App;
