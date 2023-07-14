import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Layout from './hocs/Layout'
import Register from './containers/Register'
import Login from './containers/Login'
import DashBoard from './containers/DashBoard'
import Home from './containers/Home'
import {Provider} from 'react-redux';
import store from './store';
const App = () => {

    return (
        <Provider store={store}>
        <Router>
           <Layout>
                <Routes>
               <Route exact="true" path = '/' element = {<Home/>}/>
               <Route exact="true" path = '/register' element = {<Register/>}/>
               <Route exact="true" path = '/login' element = {<Login/>}/>
               <Route exact="true" path = '/dashboard' element = {<DashBoard/>}/>
                </Routes>
           </Layout>
        </Router>
        </Provider>
    );
}

export default App;

/*import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/todos/")
      .then((res) => {
        setTodos(res.data)
      }).catch(() => {
        alert("Something went wrong");
      })
  }, [])

  return (
    <div>
      <Navbar bg="light" style={{ marginBottom: "20px" }}>
        <Container>
          <Navbar.Brand href="#">
            Todo App
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <TodoForm todos={todos} setTodos={setTodos} />
           <TodoList todos={todos} setTodos={setTodos} />
      </Container>
    </div>
  );
}

export default App;*/