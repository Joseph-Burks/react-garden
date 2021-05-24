import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const PlantCard = ({ plant, movePlant }) => {


	return (
		<Card onClick={() => movePlant(plant)}>
			<Image src={plant.image} wrapped ui={false} />
			<Card.Content>
				<Card.Header>{plant.name}</Card.Header>
				<Card.Description>{plant.type}</Card.Description>
			</Card.Content>
		</Card>
	);
};

export default PlantCard;
