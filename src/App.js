import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/CovidTable";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact render={(props) => <Home {...props} />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
