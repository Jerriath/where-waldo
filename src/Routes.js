import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Game from "./components/pageComponents/Game";
import Leaderboard from "./components/pageComponents/Leaderboard";
import Home from "./components/pageComponents/Home";
import HomeLogo from "./components/subcomponents/HomeLogo";
import "./index.css";

const Routes = () => {


    return (
        <Router>
            <HomeLogo />
            <hr className="line"/>
            <Switch>
                <Route exact path="/leaderboard" component={Leaderboard} />
                <Route exact path="/Map" component={Game} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    )
}

export default Routes;