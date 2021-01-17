import React from 'react';
import { withRouter } from 'react-router-dom';

class BenchIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }  
    handleClick() {
        this.props.history.push(`/benches/${this.props.bench.id}`);
    }
    render() {
        const { bench: { id, description, lat, lng } } = this.props;
        const photoUrl = this.props.bench.photoUrl ? 
            <img className="index-img" src={this.props.bench.photoUrl} alt=""/> : ''
        return (
            <li onClick={this.handleClick}>
                {id}: {description} ({lat}, {lng})
                {photoUrl}
            </li>
        )
    }
} 

export default withRouter(BenchIndexItem);