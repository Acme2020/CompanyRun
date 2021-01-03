import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel'

const SliderComponent = () => {
    const [Participants, setParticipants] = useState();
	useEffect(() => {
		loadPartcipants();
	}, []);

	const loadPartcipants = async () => {
		const response = await fetch("/participant");
		const data = await response.json();
		setParticipants(data);
		console.log(data);
    };
return (
        <div className="fluid">
        {Participants && 
            <Carousel>
                {Participants.data.response_all.map((el) => {
                    return ( <Carousel.Item key={el.id}>
                            <img
                            className="d-block w-100"
                            src="https://d2z0k43lzfi12d.cloudfront.net/blog/vcdn315/wp-content/uploads/2019/10/Thumbnail1_thumbnail_1200x800-1024x683.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>{el.first_name}</h3>
                            <p>{el.last_name}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        }
        </div>
    )
}

export default SliderComponent