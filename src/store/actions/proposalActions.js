import { PROPOSAL_CHANGE_STEP, 
	PROPOSAL_CHANGE_SUCCESS, 
	PROPOSAL_FORM_SHOW, 
	PROPOSAL_FORM_HIDE,
	PROPOSAL_REQUEST_STARTED,
	PROPOSAL_REQUEST_SUCCESS,
	PROPOSAL_REQUEST_FAILURE,
 } from "../types";

export const proposalChangeStep = (newStep) =>{
	return {
		type: PROPOSAL_CHANGE_STEP,
		payload: newStep
	}
}

export const proposalChangeSuccess = (success) =>{
	return {
		type: PROPOSAL_CHANGE_SUCCESS,
		payload: success
	}
}

export const proposalFormShow = () =>{
	return {
		type: PROPOSAL_FORM_SHOW,
	}
}

export const proposalFormHide = () =>{
	return {
		type: PROPOSAL_FORM_HIDE,
	}
}

// export const proposalRequest = (formData) =>{
// 	// return dispatch => {
// 	// 	dispatch(addTodoStarted());
	
// 	// 	axios
// 	// 	  .post(`https://jsonplaceholder.typicode.com/todos`, {
// 	// 		title,
// 	// 		userId,
// 	// 		completed: false
// 	// 	  })
// 	// 	  .then(res => {
// 	// 		dispatch(addTodoSuccess(res.data));
// 	// 	  })
// 	// 	  .catch(err => {
// 	// 		dispatch(addTodoFailure(err.message));
// 	// 	  });
// 	//   };
// 	const options = {
// 		method: 'POST',
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(formData),
// 	}
// 	return dispatch => {
// 		fetch('http://api.bastronva.beget.tech/request', options).then(response=>{
// 			console.log(response);
// 		})
// 	}
// }

// export const proposalRequest = async (url, method = "POST", data = null) => {
// 	try {
// 		const headers = {};
// 		let body

// 		if(data) {
// 			headers['Content-Type'] = 'application/json';
// 			body = JSON.stringify(data);
// 		}

// 		const response = await fetch(url, {
// 			method,
// 			headers,
// 			body
// 		});
// 		return await response.json();
// 	} catch (e) {
// 		console.warn('Error', e.message);
// 	}
// }

// export const proposalRequest = async (formData) => {
// 	try {
// 		console.log("run request");
// 		const options = {
// 			method: 'POST',
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			body: JSON.stringify(formData),
// 		}

// 		const response = await fetch('http://api.bastronva.beget.tech/request', options);
// 		return await response.json();
// 	} catch (e) {
// 		console.warn('Error', e.message);
// 	}
// }

export const proposalRequest = (formData) => {
	console.log("run request ", formData);
	const body = {
		status: false,
		data: formData,
	}
	const dataReady = '{contact_name: "Коля", contact_phone: "+79876543210", contact_email: "nikolay@mail.ru", inn: "123456789012", request_subject: "значение 1", subject_description: "танк", subject_purpose: "значение 2"}';
	const dataReadyJson = '{"contact_name":"Коля","contact_phone":"+79876543210","contact_email":"nikolay@mail.ru","inn":"123456789012","request_subject":"значение 1","subject_purpose":"значение 2","subject_description":"танк","advance_payment":"3","credit_period":"1"}';
	const options = {
		method: 'POST',
//		mode: 'no-cors',
		headers: {
			// 'Content-Type': 'application/json;charset=utf-8',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
//			'Access-Control-Allow-Methods': "POST",
			'Accept': 'application/json',
		},
		// body: JSON.stringify(formData),
		body: dataReadyJson,
		// body: formData,
		// {"status":false,"data":{"contact_name":["Необходимо заполнить «Contact Name»."],"contact_phone":["Необходимо заполнить «Contact Phone»."],"contact_email":["Необходимо заполнить «Contact Email»."],"inn":["Необходимо заполнить «Inn»."],"request_subject":["Необходимо заполнить «Request Subject»."],"subject_purpose":["Необходимо заполнить «Subject Purpose»."],"subject_description":["Необходимо заполнить «Subject Description»."],"advance_payment":["Необходимо заполнить «Advance Payment»."],"credit_period":["Необходимо заполнить «Credit Period»."]}},
	}

	console.log("data ", options.body);

	return dispatch => fetch('/api/request/create-request-entry', options)
	.then(response => console.log(response))
    .catch(error => console.log("Error ", error))

}

const proposalRequestStarted = () => {
	return {
		type: PROPOSAL_REQUEST_STARTED
	}
}

const proposalRequestSuccess = () => {
	return {
		type: PROPOSAL_REQUEST_SUCCESS
	}
}

const proposalRequestFailure = () => {
	return {
		type: PROPOSAL_REQUEST_FAILURE
	}
}