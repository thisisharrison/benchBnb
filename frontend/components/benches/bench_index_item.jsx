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
        return (
            <li onClick={this.handleClick}>
                {id}: {description} ({lat}, {lng})
            </li>
        )
    }
} 

export default withRouter(BenchIndexItem);