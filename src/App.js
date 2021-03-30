import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import { userAtom } from "./atoms";
import { useRecoilState } from "recoil";
import axios from "./axios";
import { useHistory } from "react-router-dom";
import Blog from "./Blog";

function App() {
  const history = useHistory();

  const [user, setUser] = useRecoilState(userAtom);

  const checkAuth = async () => {
    try {
      if (!localStorage.getItem("token")) return;
      const res = await axios.get("/auth", {
        headers: {
          "X-Auth-Token": localStorage.getItem("token"),
        },
      });
      setUser({
        isAuth: true,
        user: res.data.user,
      });
    } catch (err) {
      localStorage.removeItem("token");
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/blog" component={Blog} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
