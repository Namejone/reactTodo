import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="wrapper bg-gradient-to-t from-gray-900 to-teal-900 min-h-screen pt-10">
      <div className="container">
        <Header></Header>
        <TodoForm></TodoForm>
        <TodoItem></TodoItem>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
