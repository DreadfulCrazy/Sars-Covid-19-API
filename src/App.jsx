import React, { Component } from 'react';

import { Cards, Chart, CountryPicker} from './components';
import Styles from './App.module.css';
import { fetchData } from './api';

class App extends Component {

    state = {
        data: {},
        country:''
    }

    async componentDidMount(){
        const data = await fetchData();
        this.setState({data});
    }

    handleCountryChange = async (country) =>{
        //fetch the data
        const data = await fetchData(country);
        //set state
        this.setState({data, country});
    }

    render() {
        const { data, country } = this.state;
        return (
            <div className = {Styles.container}>
                <img src="https://i.ibb.co/7QpKsCX/image.png" alt="COBID-19" className ={Styles.image}/>
               <Cards data= {data}/>
               <CountryPicker handleCountryChange={this.handleCountryChange}/>
               <Chart data = {data} country = {country} />
            </div>
        );
    }
}

export default App;