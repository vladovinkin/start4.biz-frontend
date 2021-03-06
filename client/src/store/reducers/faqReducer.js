import {TOGGLE_ANSWER_SHOW, FAQ_LOAD_REQUEST, FAQ_LOAD_SUCCESS, FAQ_LOAD_FAILURE} from './../types';

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
		case TOGGLE_ANSWER_SHOW:
            const id = action.payload;
            const currentIndex = state.faq.findIndex(
                (item) => item.id == id
            );
            const opened = state.faq[currentIndex].open;

            return {
                ...state,
                faq: [
                    ...state.faq.slice (0, currentIndex),
                    {
                        ...state.faq[currentIndex],
                        open: !opened,
                    }, 
                    ...state.faq.slice (currentIndex+1),
                ]
            }
        case FAQ_LOAD_REQUEST:
            return {
                ...state,
            }
        case FAQ_LOAD_SUCCESS:
            const result = action.payload.data;
            const data = result.map (elem => {
                return {
                    ...elem,
                    id: elem.id,
                    question: elem.question,
                    answer: elem.answer,
                    open: false,
                }
            })
            return {
                ...state,
                faq: data,
            }
        case FAQ_LOAD_FAILURE:
            return {
                ...state,
            }
		default: return state;
	}
}