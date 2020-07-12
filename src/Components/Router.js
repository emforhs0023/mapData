import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "../Routes/Home";

// import ModalPage from "../Routes/ModalPage"
// import Serverside from "../Routes/Serverside"

export default () => (
	<Router>
		<div>
			<div>
				<Switch>
					<Route path="/" exact component={Home} /> 
					<Redirect from="*" to="/" />
				</Switch>	
			</div>
		</div>
	</Router>
)