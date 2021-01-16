import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postReview } from '../../util/bench_api_util';

const mapDistpatchToProps = dispatch => ({
    postReview: (review) => dispatch(postReview(review))
});

const ReviewForm = ({postReview, match}) => {
    const bench_id = parseInt(match.params.benchId);
    const [body, setBody] = useState('');
    const [rating, setRating] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        postReview({
            body,
            rating,
            author_id: 1,
            bench_id
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Rating: 
                    <input type="number"
                        value={rating}
                        onChange={e => setRating(e.currentTarget.value)}/>
                </label>
                <label>
                    Body:
                    <textarea cols="30" rows="10"
                        onChange={e => setBody(e.currentTarget.value)}>{body}</textarea>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default withRouter(connect(null, mapDistpatchToProps)(ReviewForm));