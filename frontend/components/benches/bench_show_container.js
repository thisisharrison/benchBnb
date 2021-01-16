import { connect } from "react-redux";
import { fetchBench } from "../../actions/bench_actions";
import { selectBench, selectReviewsForBench } from '../../reducers/selectors';
import BenchShow from './bench_show';

const mapStateToProps = (state, ownProps) => {
    const benchId = parseInt(ownProps.match.params.benchId);
    const bench = selectBench(state, benchId);
    const reviews = selectReviewsForBench(state.entities, bench)
    return ({
        benchId,
        bench,
        reviews
    })
};

const mapDispatchToProps = dispatch => ({
    fetchBench: id => dispatch(fetchBench(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchShow);