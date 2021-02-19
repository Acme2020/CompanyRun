import React from "react";
import CompaniesComponent from "../components/companies/CompaniesComponent";
import AboutSummaryComponent from "../components/about/AboutSummaryComponent";
import SliderComponent from "../components/general/SliderComponent";
import MoreButton from "../components/general/MoreButton";
import TeamsSliderComponent from "../components/teams/TeamsSliderComponent";
import ParticipantsSliderComponent from "../components/participants/ParticipantsSliderComponent";
import GetDataComponent from "../components/general/GetDataComponent";

const Home = () => {
	return (
		<>
			<div className="container-fluid px-0">
				<SliderComponent />
			</div>
			<div className="container">
				<div className="mt-5 mb-3">
					<h1>How it works</h1>
				</div>
				<AboutSummaryComponent />
				<MoreButton />
				<TeamsSliderComponent headline="The awesome team slider" />
				<MoreButton />
				<div className="mt-5 mb-3">
					<h1>Companies on the run</h1>
				</div>
				<CompaniesComponent />
				<MoreButton />
				<GetDataComponent
					component={ParticipantsSliderComponent}
					url="/participant"
					headline="Participants"
				/>
			</div>
		</>
	);
};

export default Home;
