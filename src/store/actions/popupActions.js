import { POPUP_SHOW, POPUP_HIDE } from "../types";

export function popupShow(){
	return {
		type: POPUP_SHOW,
	}
}

export function popupHide(){
	return {
		type: POPUP_HIDE,
	}
}