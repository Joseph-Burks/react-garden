import React from 'react';
import { Segment, Header, Card } from 'semantic-ui-react';
import PlantCard from './PlantCard';

export default class MyPlantsContainer extends React.Component {
	makeCards = () => {
		return this.props.plants.map(plant => {
			return <PlantCard key={plant.id} plant={plant} movePlant={this.props.movePlant} />;
		});
	};
	render() {
		return (
			<Segment>
				<Header>My Plants</Header>
				<Card.Group>{this.makeCards()}</Card.Group>
			</Segment>
		);
	}
}
