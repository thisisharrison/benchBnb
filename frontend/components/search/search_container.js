import { connect } from "react-redux";
import { fetchBenches } from "../../actions/bench_actions";
import { benchArray, getMaxSeating, getMinSeating } from '../../reducers/selectors';
import { updateFilter } from "../../actions/filter_actions";
import Search from './search';

const mapStateToProps = state => (
    {
        benches: benchArray(state),
        minSeating: getMinSeating(state),
        maxSeating: getMaxSeating(state)
    }
);

const mapDispatchToProps = dispatch => (
    {
        updateFilter: (filter, value) => dispatch(updateFilter(filter,value))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Search);