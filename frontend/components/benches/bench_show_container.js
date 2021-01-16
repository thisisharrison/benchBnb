import { connect } from "react-redux";
import { fetchBenches } from "../../actions/bench_actions";
import { selectBench } from '../../reducers/selectors';
import BenchShow from './bench_show';

const mapStateToProps = (state, ownProps) => {
    const benchId = parseInt(ownProps.match.params.benchId);
    const bench = selectBench(state, benchId);
    return ({
        benchId,
        bench,
    })
};

const mapDispatchToProps = dispatch => ({
    fetchBench: id => dispatch(fetchBenches(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchShow);