import { connect } from 'react-redux';
import MenstruationModal from 'components/MenstruationModal';

const mapStateToProps = state => ({
  cuid: null
})

const mapDispatchToProps = dispatch => ({
  null: null
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenstruationModal)
