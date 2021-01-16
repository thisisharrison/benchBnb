import React, { useState } from 'react';

const ReviewForm = ({ postReview, match }) => {
    const bench_id = parseInt(match.params.benchId);
    const [body, setBody] = useState('');
    const [rating, setRating] = useState(0);
    // author_id is handled in rails with current_user 
    const handleSubmit = (e) => {
        e.preventDefault();
        postReview({
            body,
            rating,
            bench_id
        })
        setRating(0);
        setBody('');
        this.props.history.push(`/api/benches/${bench_id}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Rating:
                    <input type="number"
                        value={rating}
                        onChange={e => setRating(e.currentTarget.value)} />
                </label>
                <label>
                    Body:
                    <textarea cols="30" rows="10"
                        onChange={e => setBody(e.currentTarget.value)}
                        value={body} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ReviewForm;

