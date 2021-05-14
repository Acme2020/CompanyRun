import "./custom.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarComponent from "./components/general/NavbarComponent";
import Home from "./views/Home";
import ShowParticipant from "./views/participants/ShowParticipant";
import CreateParticipant from "./views/participants/CreateParticipant";
import LoginParticipant from "./views/participants/LoginParticipant";
import FooterComponent from "./components/general/FooterComponent";

function App() {
	return (
		<>
			<NavbarComponent />
			<div className="container-fluid bg-light pr-0 pl-0 pb-5">
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route
							path="/participant/login"
							component={LoginParticipant}
						/>
						<Route
							path="/participant/new"
							component={CreateParticipant}
						/>
						<Route
							path="/participant/:id"
							component={ShowParticipant}
						/>
					</Switch>
				</Router>
			</div>
			<FooterComponent />
		</>
	);
}

export default App;
