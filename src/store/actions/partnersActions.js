import { SHOW_ALL_PARTNERS } from "../types";

export function showAllPartners(value){
	return {
        type: SHOW_ALL_PARTNERS,
        payload: value
	}
}