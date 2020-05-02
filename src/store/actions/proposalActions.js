import { PROPOSAL_CHANGE_STEP, PROPOSAL_CHANGE_SUCCESS, PROPOSAL_FORM_SHOW, PROPOSAL_FORM_HIDE } from "../types";

export function proposalChangeStep(newStep){
	return {
		type: PROPOSAL_CHANGE_STEP,
		payload: newStep
	}
}

export function proposalChangeSuccess(success){
	return {
		type: PROPOSAL_CHANGE_SUCCESS,
		payload: success
	}
}

export function proposalFormShow(){
	return {
		type: PROPOSAL_FORM_SHOW,
	}
}

export function proposalFormHide(){
	return {
		type: PROPOSAL_FORM_HIDE,
	}
}