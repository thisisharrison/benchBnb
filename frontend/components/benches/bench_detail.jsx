import React from 'react';
import ReviewItemContainer from '../reviews/review_item_container';
import { Link } from 'react-router-dom';

const reviewList = (reviews) => (
    reviews.map(review => <ReviewItemContainer key={review} review={review}/>)
);

const BenchDetail = ({bench, reviews}) => {
    return (
        <div>
            <h1>{bench.description}</h1>
            <img src={bench.photoUrl} alt=""/>
            <ul>
                <li>Rating: {bench.average_rating || 'No reviews yet'}</li>
                <li>Seats: {bench.seating}</li>
                <li>Latitude: {bench.lat}</li>
                <li>Longitude: {bench.lng}</li>
            </ul>
            <h3>Reviews</h3>
            {reviewList(reviews)}
        </div>
    )
}

export default BenchDetail;