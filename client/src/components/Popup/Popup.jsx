import React, {Fragment} from 'react';
import './Popup.css';
import { connect } from 'react-redux';
import {popupHide} from '../../store/actions/popupActions';
import { useEffect } from 'react';

const Popup = ({form, popupHide, success}) => {
	let popupClasses = (success)? "popup popup--success" : "popup";

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, false);

		return () => {
			document.removeEventListener('click', handleClickOutside, false);
		}
	})

	const handleClickOutside = e => {
		const popupBlock = document.getElementsByClassName(`${popupClasses}`)[0];

		if (!e.path.includes(popupBlock)) {
			popupHide();
		}
	}

	return (
	<Fragment>
		<div className="popup-overlay">
			<div className={popupClasses}>
				<div className="popup__close" onClick={popupHide}></div>
				<div className="popup__content">
					{form}
				</div>
			</div>
		</div>
	</Fragment>
	)
}

const mapDispatchToProps = (dispatch) => {
    return {
        popupHide: () => {
        	dispatch(popupHide())
      },
    }
}

const mapStateToProps = state => {
	return {
		isShow: state.popup.isShow,
		success: state.proposalForm.success
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);