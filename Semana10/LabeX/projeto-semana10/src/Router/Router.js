import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage"


export const Router = () => {

    return(
        <BrowserRouter>
        <Switch>
        <Route exact path={"/home"}>
            <HomePage/>

        </Route>

        </Switch>
        </BrowserRouter>

    )
}