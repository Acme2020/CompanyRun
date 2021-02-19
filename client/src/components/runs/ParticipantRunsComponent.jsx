import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ParticipantAddRunModalComponent from "./ParticipantAddRunModalComponent";
import ParticipantAggregateRunsComponent from "./ParticipantAggregateRunsComponent";

const PerticipantRunsComponent = (props) => {
	const { id } = useParams();
	const [show, setShow] = useState(false);

	const handleShow = (state) => setShow(state);

	const handleDelete = (run_id) => {
		fetch(`/participant/${id}/run/${run_id}`, {
			method: "DELETE",
			mode: "cors",
		})
			.then(async (response) => response.text())
			.then((data) => console.log(data));
		props.needDataRefresh(true);
	};
	return (
		<div className="pt-3">
			{show && (
				<ParticipantAddRunModalComponent
					handleShow={(state) => handleShow(state)}
					needDataRefresh={(state) => props.needDataRefresh(state)}
				/>
			)}
			<ParticipantAggregateRunsComponent
				acc_data={props.data.data.sums}
			/>
			<h4 className="mt-4">Runs</h4>
			<Table responsive>
				<thead>
					<tr>
						<th>Date</th>
						<th>Distance</th>
						<th>Time</th>
						<th>
							<Button
								size="sm"
								className="p-2"
								onClick={() => handleShow(true)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="26"
									height="26"
									fill="currentColor"
									className="bi bi-plus"
									viewBox="0 0 16 16"
								>
									<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
								</svg>
							</Button>
						</th>
					</tr>
				</thead>
				<tbody>
					{props.data.data.response.map((el) => {
						return (
							<tr key={el.id}>
								<td>
									{new Date(el.run_date).toLocaleDateString(
										"de-DE"
									)}
								</td>
								<td>{el.distance.toLocaleString() + " km"}</td>
								<td>{el.time}</td>
								<td>
									<Button
										variant="outline-secondary"
										onClick={() => {
											handleDelete(el.id);
										}}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-trash"
											viewBox="0 0 16 16"
										>
											<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
											<path
												fillRule="evenodd"
												d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
											/>
										</svg>
									</Button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};

export default PerticipantRunsComponent;
