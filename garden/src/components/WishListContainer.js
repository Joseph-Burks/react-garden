import React from 'react';
import { Segment, Card, Header } from 'semantic-ui-react';
import PlantCard from './PlantCard';

export default class WishListContainer extends React.Component {
	render() {
		return (
			<Segment>
                <Header>Wish List</Header>
				<Card.Group>
					{this.props.plants.map(plant => {
						return <PlantCard key={plant.id} plant={plant} movePlant={this.props.movePlant} />;
					})}
				</Card.Group>
			</Segment>
		);
	}
}
