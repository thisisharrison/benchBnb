import React from 'react';
import { connect } from 'react-redux';

const Review = ({review, author}) => {
    const { rating, body } = review;
    return (
        <div>
            <ul>
                <li>
                    Rating: {rating}
                </li>
                <li>
                    {body} - by {author.username}
                </li>
            </ul>
        </div>
    );
}

// single review passed from bench detail
// state users to find author name
const mapStateToProps = ({entities: {users}}, {review}) => ({
    author: users[review.author_id]
});

export default connect(mapStateToProps)(Review);