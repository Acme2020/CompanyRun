import React from "react";
import { useParams } from "react-router-dom";
import GetDataComponent from "../../components/general/GetDataComponent";
import ParticipantDetailsComponent from "../../components/participants/ParticipantDetailsComponent";

const ShowParticipant = () => {
	const { id } = useParams();
	return (
		<div>
			<GetDataComponent
				component={ParticipantDetailsComponent}
				url={"/participant/" + id}
				headline="Participants"
			/>
		</div>
	);
};

export default ShowParticipant;
