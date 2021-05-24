import React from 'react'
import { Container } from 'semantic-ui-react'
import MyPlantsContainer from './MyPlantsContainer'
import WishListContainer from './WishListContainer'

export default class MainContainer extends React.Component{

    state = {
        plants: [],
        myGarden: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/plants')
        .then(res => res.json())
        .then(plants => this.setState({ plants }))
    }

    setWishListPlants = () => {
        let plants = this.state.plants.filter(plant => !this.state.myGarden.includes(plant))
        return plants
    }

    addPlantToMyGarden = plant => {
        this.setState({myGarden: [...this.state.myGarden, plant]})
    }

    removeFromMyGarden = plant => {
        let myGarden = this.state.myGarden.filter(oldPlant => oldPlant.id !== plant.id )
        this.setState({myGarden})
    }

    render(){
        return(
            <Container>
                <h1>My Garden</h1>
                <MyPlantsContainer plants={this.state.myGarden} movePlant={this.removeFromMyGarden} />
                <WishListContainer plants={this.setWishListPlants()} movePlant={this.addPlantToMyGarden} />
            </Container>
        )
    }
}