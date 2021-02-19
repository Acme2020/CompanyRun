import React from "react";

const FooterComponent = () => {
	return (
		<div className="container-fluid bg-dark pr-0 pl-0 pt-3 pb-3">
			<div className="row">
				<div className="d-flex justify-content-center align-items-center">
					<div className="col-2 text-white" href="#">
						Ev. Stiftung Alsterdorf 2021
					</div>
					<div className="col-1 text-white" href="#">
						Impressum
					</div>
					<div className="col-1 text-white" href="#">
						Datenschutz
					</div>
				</div>
			</div>
		</div>
	);
};

export default FooterComponent;
