// import {ADD_PARTNER, SHOW_ALL_PARTNERS} from "../types";

const initialState = {
    faq: [
        {id: 0, question: "Вопрос номер раз", answer: "Ответ на вопрос номер один", open: true},
        {id: 1, question: "Вопрос номер два", answer: "Ответ на вопрос номер 2", open: false},
        {id: 2, question: "Вопрос номер тры", answer: "Ответ на вопрос номер 3", open: false},
        {id: 3, question: "Вопрос номер четыре", answer: "Ответ на вопрос номер 4", open: false},
    ],
};

export const faqReducer = (state = initialState, action) => {
	switch (action.type) {
		// case ADD_PARTNER:
        //     return {
        //         ...state, 
        //         faq: {
        //             ...state.faq,
        //         }
        //     }
		default: return state;
	}
}