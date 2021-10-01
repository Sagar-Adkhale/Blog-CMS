import Home from "./pages/home/Home";
import TopBar from "./components/topBar/Topbar";
import SinglePost from "./components/singlePost/SinglePost";
import Contact from "../src/pages/contact/contact";
import Shop from "./pages/shop/shop";
// import AboutUs from "./pages/aboutUs/aboutus";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <TopBar />
      <div style={{ "padding-top": "4.4rem" }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          {/* <Route path="/aboutUs" component={AboutUs}/>  */}
          <Route path="/shop" component={Shop} />

          <Route
            exact
            path="/post/:id"
            render={(props) => <SinglePost {...props} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
