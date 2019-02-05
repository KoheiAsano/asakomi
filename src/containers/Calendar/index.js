import { connect } from 'react-redux';
import Calendar from 'components/Calendar';

const mapStateToProps = state => ({
  cuid: null
})

const mapDispatchToProps = dispatch => ({
  null: null
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar)
