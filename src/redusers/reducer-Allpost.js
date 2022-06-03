import { FETCH_BUTTON } from '../action/type'

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_BUTTON:
            return action.payload;
            break;
    }
    return state
}