import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booleanActions from './../store/actions/popupActions';
import { WorkStep } from '../components/WorkStep/WorkStep';

const mapStateToProps = (state) => {
   return {
      boolean: state.popupReducer
   }
};

const mapDispatchToProps = dispatch => {
   const { popupShow } = bindActionCreators(booleanActions, dispatch);
   return {
      popupShow
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkStep);