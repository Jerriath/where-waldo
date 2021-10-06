import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Game from "./components/pageComponents/Game";
import Leaderboard from "./components/pageComponents/Leaderboard";
import Home from "./components/pageComponents/Home";
import HomeLogo from "./components/subcomponents/homeComponents/HomeLogo";
import { Link } from "react-router-dom";
import "./index.css";

const Routes = () => {


    return (
        <Router>
            <Link to="/">
                <HomeLogo />
            </Link>
            <hr className="line"/>
            <Switch>
                <Route exact path="/leaderboard" component={Leaderboard} />
                <Route exact path="/Game" component={Game} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    )
}

export default Routes;