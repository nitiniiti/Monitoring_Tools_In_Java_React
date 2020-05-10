import { GET_TOOLS } from '../actions/types';

const initialState = {
    tools: []
};

export default function toolReducer(state = initialState.tools, action) {
    switch (action.type) {
        case GET_TOOLS:
            return { tools: action.payload }
        default:
            return state;
    }
}