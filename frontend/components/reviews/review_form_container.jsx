import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postReview } from '../../actions/review_actions';
import ReviewForm from  './review_form';

const mapDistpatchToProps = dispatch => ({
    postReview: (review) => dispatch(postReview(review))
});

export default withRouter(connect(null, mapDistpatchToProps)(ReviewForm));