import { SET_ALL_QUOTES, SET_RANDOM_QUOTE } from "./actions";

const initialState = {
    all_quotes: [],
    quote_body: {
        sentence: '',
        character: {
            name: '',
            house: {
                name: ''
            }
        }
    }
};

export default function Quote(state = initialState, action) {
    switch (action.type) {
        case SET_ALL_QUOTES:
            return {
                ...state,
                all_quotes: action.payload
            };
        case SET_RANDOM_QUOTE:
            return {
                ...state,
                quote_body: action.payload
            };
    };
};

export const allQuotes = (data) => {
    return {
        type: SET_ALL_QUOTES,
        payload: data
    };
};

export const randomQ = (data) => {
    return {
        type: SET_RANDOM_QUOTE,
        payload: data
    };
};