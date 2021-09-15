import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import JoinPage from "./pages/JoinPage";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";

const App = () => {
    return (
        <BrowserRouter>
            <div className={"app"}>
                <h1>App</h1>

                <nav className={"navbar"}>
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/create"}>Create</Link></li>
                        <li><Link to={"/join"}>Join</Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path={"/"} component={HomePage}/>
                    <Route exact path={"/create"} component={CreatePage}/>
                    <Route exact path={"/join"} component={JoinPage}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
