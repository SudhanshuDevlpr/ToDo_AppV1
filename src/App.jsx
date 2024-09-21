import Heading from "./components/Heading";
import EnterTodo from "./components/EnterTodo";
import TodoItem from "./components/TodoItem";
import Card from "./components/card";
function App() {
  let Item = [
    {
      name: "Reading Book",
      date: "25/01/2024",
    },
    {
      name: "Learning Ract",
      date: "20/10/2024",
    },
    {
      name: "create React Project",
      date: "20/10/2024",
    },
    {
      name: "Tough Project In react",
      date: "12/11.2024",
    },
  ];
  return (
    <>
      {/* <div className="container">
    <div className="row d-flex justify-content-center mt-5">
      <div className="col-6">
        <div className="card">
          <div className="card-body"> */}
      <Card>
        <Heading></Heading>
        <EnterTodo></EnterTodo>
        <TodoItem item={Item}></TodoItem>
      </Card>
      {/* </div>
        </div>
      </div>
    </div>
  </div> */}
    </>
  );
}
export default App;
