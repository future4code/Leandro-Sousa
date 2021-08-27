import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AdminHomePage } from "../pages/AdminHomePage";
import { HomePage } from "../pages/HomePage"
import { ListTrips } from "../pages/ListTripsPage"
import { LoginPage } from "../pages/LoginPage";
import { ListTripsDetails } from "../pages/TripDetailsPage";


export const Router = () => {

    return(
        <BrowserRouter>
        <Switch>
        <Route exact path={"/"}>
            <HomePage/>
        </Route>

        <Route exact path={"/listtrips"}>
            <ListTrips/>
        </Route>

        <Route exact path={"/loginpage"}>
            <LoginPage/>
        </Route>

        <Route exact path={"/admpage"}>
            <AdminHomePage/>
        </Route>

        <Route exact path={"/tripdetails"}>
            <ListTripsDetails/>
        </Route>

        </Switch>
        </BrowserRouter>

    )
}