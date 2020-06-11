import {TOGGLE_ANSWER_SHOW, FAQ_LOAD_REQUEST, FAQ_LOAD_SUCCESS, FAQ_LOAD_FAILURE} from './../types';

export const toggleAnswerShow = id => {
	return {
        type: TOGGLE_ANSWER_SHOW,
        payload: id,
	}
}

export const faqLoadRequest = () => {
	return {
        type: FAQ_LOAD_REQUEST,
	}
}

export const faqLoadSuccess = data => {
	return {
        type: FAQ_LOAD_SUCCESS,
        payload: data,
	}
}

export const faqLoadFailure = error => {
	return {
        type: FAQ_LOAD_FAILURE,
        payload: error,
	}
}

export const loadFaq = () => {
    return async (dispatch) => {
        try {
            dispatch (faqLoadRequest ());
            const result = await fetch ('/api/faq/get-faq');
            dispatch (faqLoadSuccess (await result.json()));
        } catch (e) {
            dispatch (faqLoadFailure (e));
        }
    }
}