import { connect } from "react-redux";
import { fetchBenches } from "../../actions/bench_actions";
import { updateFilter } from "../../actions/filter_actions";
import Search from './search';

const mapStateToProps = ({ entities: { benches } }) => (
    {
        benches: Object.keys(benches).map(key => benches[key])
    }
);

const mapDispatchToProps = dispatch => (
    {
        updateFilter: (filter, value) => dispatch(updateFilter(filter,value))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Search);