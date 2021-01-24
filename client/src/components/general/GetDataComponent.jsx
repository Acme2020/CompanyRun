import React, { useState, useEffect } from "react";


    const GetDataComponent = (props) => {
        const Url = props.url
        const Component = props.component
        const Headline = props.headline
        const [Data, setData] = useState();
        
        useEffect(() => {
            getData(Url)
                   }, []);


        const getData = async (Url) => {
            const response = await fetch(Url);
            const data = await response.json();
            setData(data)
        };

        return (
            <>
                {Data && 
                <Component headline={Headline} data={Data} />
                }
            </>
        )
    }   

export default GetDataComponent

