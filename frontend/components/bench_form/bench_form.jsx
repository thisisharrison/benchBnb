import React from 'react';

class BenchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            seats: '',
            lat: this.props.lat,
            lng: this.props.lng
        }
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(prop){
        return (e) => this.setState({[prop] : e.target.value});
    } 
    render() {
        return (
            <div>
                <h1>Add Bench</h1>
                <form>
                <label>
                    Description: 
                    <input type="text"
                        value={this.state.description}
                        onChange={this.handleInput('description')}/>
                </label>
                <label>
                    Seats:
                    <input type="text"
                        value={this.state.seats} 
                        onChange={this.handleInput('seats')}/>
                </label>
                <label>
                    Lat:
                    <input type="text"
                        disabled
                        value={this.state.lat} />
                </label>
                <label>
                    Lng:
                    <input type="text"
                        disabled
                        value={this.state.lng} />
                </label>
                <input type="submit"
                    value="Submit"/>
                </form>
            </div>
        )
    }
}

export default BenchForm;