import React, { useState, useEffect } from "react";

const GetDataComponent = (props) => {
	const Url = props.url;
	const Component = props.component;
	const Headline = props.headline;
	const [Data, setData] = useState();
	const [RefreshData, setRefreshData] = useState(true);

	useEffect(() => {
		RefreshData && getData(Url);
	}, [RefreshData]);

	const getData = async (Url) => {
		const response = await fetch(Url);
		const data = await response.json();
		setData(data);
		setRefreshData(false);
	};

	return (
		<>
			{Data && (
				<Component
					headline={Headline}
					data={Data}
					needDataRefresh={(state) => {
						setRefreshData(state);
					}}
				/>
			)}
		</>
	);
};

export default GetDataComponent;
