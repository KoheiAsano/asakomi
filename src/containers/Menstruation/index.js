import { connect } from 'react-redux';
import Menstruation from 'components/Menstruation';

const mapStateToProps = state => ({
  cuid: null
})

const mapDispatchToProps = dispatch => ({
  null: null
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menstruation)
