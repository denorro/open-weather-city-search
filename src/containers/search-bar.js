/**
 * Created by Denorro Stallworth on 6/4/2017.
 */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.props.fetchWeather('Birmingham');
    }

    onInputChange(event){
        this.setState({
            term: event.target.value
        });
    }

    onFormSubmit(event){
        event.preventDefault();
        if(this.state.term === ''){
            alert('Enter the name of a city to search!');
            return;
        }
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit} >
                <div className="form-group">
                    <label>Enter City and State to Search</label>
                    <input className="form-control margin-botton-5" placeholder="Example: Birmingham, AL" value={this.state.term } onChange={this.onInputChange} />
                    <button type="submit" className="btn btn-primary btn-block">Search</button>
                </div>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
