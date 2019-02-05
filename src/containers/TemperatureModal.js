import { connect } from 'react-redux';
import TemperatureModal from 'components/TemperatureModal';

const mapStateToProps = state => ({
  cuid: null
})

const mapDispatchToProps = dispatch => ({
  null: null
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TemperatureModal)
