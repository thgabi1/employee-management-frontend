import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import Layout from "./components/Layout";
import NoPage from "./components/NoPage";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <div className="container">
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index exact element={<ListEmployeeComponent />}></Route>
                <Route
                  path="employees"
                  element={<ListEmployeeComponent history={history} />}
                ></Route>
                <Route
                  path="add-employee"
                  element={<CreateEmployeeComponent history={history} />}
                ></Route>
              </Route>
              <Route path="*" element={<NoPage />}></Route>
            </Routes>
          </div>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
