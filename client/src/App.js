import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarComponent from "./components/general/NavbarComponent";
import Home from "./views/Home";
import showParticipant from "./views/participants/showParticipant";
import createParticipant from "./views/participants/createParticipant";
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
							path="/participant/new"
							component={createParticipant}
						/>
						<Route
							path="/participant/upload"
							component={createParticipant}
						/>
						<Route
							path="/participant/:id"
							component={showParticipant}
						/>
					</Switch>
				</Router>
			</div>
			<FooterComponent />
		</>
	);
}

export default App;
