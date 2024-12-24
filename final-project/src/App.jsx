import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import { TasksContext } from "./contexts/TaskContext";
import Login from "./pages/LoginPage";
import TaskPage from "./pages/TaskPage";
import Signup from "./pages/SignupPage";
import { TasksProvider } from "./contexts/TaskContext";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <Router>
      <TasksProvider>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/create" element={<CreatePage></CreatePage>}></Route>
          <Route path="/edit/:id" element={<EditPage></EditPage>}></Route>

          <Route path="/" element={<TaskPage></TaskPage>}></Route>
        </Routes>
      </TasksProvider>
    </Router>
  );
}

export default App;
