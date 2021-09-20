import Home from "./pages/home/Home";
import TopBar from "./components/topBar/Topbar";
import SinglePost from "./components/singlePost/SinglePost";
import Contact from "./pages/contact/contact";
import AboutUs from "./pages/aboutUs/aboutus";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/> 
        <Route path="/aboutUs" component={AboutUs}/> 
        
        <Route exact path="/post/:id" render={props => <SinglePost {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
