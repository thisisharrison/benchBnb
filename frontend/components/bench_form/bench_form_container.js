import { connect } from 'react-redux';
import BenchForm from './bench_form';

const mapStateToProps = (state, {location}) => ({
    lat: new URLSearchParams(location.search).get('lat'),
    lng: new URLSearchParams(location.search).get('lng')
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(BenchForm);