import { combineReducers } from "redux";
import reducerAllpost from "./reducer-Allpost";
import reducerSelectedPost from "./reducer-selectedPost";


const rootReducer = combineReducers({
    allPosts: reducerAllpost,
    selectPost: reducerSelectedPost
})
export default rootReducer;