import React from 'react'

export default class CountryList extends React.Component{

    //state will contain a simple list of countries with each country's name,
    //currency name, and currency code
    state = {
        countries: '',
        loaded: false
    }

    componentDidMount(){
        //fetching to the rails backend
        fetch('http://localhost:3000/countries')
            .then(res => res.json())
            .then(list => this.setState({countries: list, loaded: true }))
    }

    createList = () => {
        return this.state.countries.map(country => <li key={country.id}>{country.name} - 
                    {country.currency_name} - {country.currency_code}</li>)
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <ol>
                    {this.state.loaded ? this.createList() : 'Loading'}
                </ol>
            </div>
        )
    }

}