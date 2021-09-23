import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Game from "./components/pageComponents/Game";
import Leaderboard from "./components/pageComponents/Leaderboard";
import MapSelect from "./components/pageComponents/MapSelect";
import HomeLogo from "./components/subcomponents/HomeLogo";

const Routes = () => {


    return (
        <Router>
            <HomeLogo />
            <Switch>
                <Route exact path="/leaderboard" component={Leaderboard} />
                <Route exact path="Map" component={Game} />
                <Route path="/" component={MapSelect} />
            </Switch>
        </Router>
    )
}

export default Routes;