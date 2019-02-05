import { connect } from 'react-redux';
import Condition from 'components/Condition';

const mapStateToProps = state => ({
  cuid: null
})

const mapDispatchToProps = dispatch => ({
  null: null
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Condition)
