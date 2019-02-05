import { connect } from 'react-redux';
import Home from 'components/Home';

const mapStateToProps = state => ({
  cuid: null
})

const mapDispatchToProps = dispatch => ({
  null: null
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
