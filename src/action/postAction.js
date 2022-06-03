import React from 'react'
import { connect } from 'react-redux'
import { FETCH_BUTTON } from './type'
import { SELECT_POST } from './type'
import axios from 'axios'

// export const postAction = () => {
//     return {
//         type: FETCH_BUTTON,
//         payload: [
//             {
//                 "userId": 1,
//                 "id": 1,
//                 "title": "delectus aut autem",
//                 "completed": false
//             },
//             {
//                 "userId": 1,
//                 "id": 2,
//                 "title": "quis ut nam facilis et officia qui",
//                 "completed": false
//             },
//             {
//                 "userId": 1,
//                 "id": 3,
//                 "title": "fugiat veniam minus",
//                 "completed": false
//             },
//             {
//                 "userId": 1,
//                 "id": 4,
//                 "title": "et porro tempora",
//                 "completed": true
//             },
//             {
//                 "userId": 1,
//                 "id": 5,
//                 "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//                 "completed": false
//             },
//             {
//                 "userId": 1,
//                 "id": 6,
//                 "title": "qui ullam ratione quibusdam voluptatem quia omnis",
//                 "completed": false
//             },
//             {
//                 "userId": 1,
//                 "id": 7,
//                 "title": "illo expedita consequatur quia in",
//                 "completed": false
//             },
//             {
//                 "userId": 1,
//                 "id": 8,
//                 "title": "quo adipisci enim quam ut ab",
//                 "completed": true
//             },
//             {
//                 "userId": 1,
//                 "id": 9,
//                 "title": "molestiae perspiciatis ipsa",
//                 "completed": false
//             },
//             {
//                 "userId": 1,
//                 "id": 10,
//                 "title": "illo est ratione doloremque quia maiores aut",
//                 "completed": true
//             }
//         ]
//     }
// }

export const postAction = () => dispatch => {
    axios.get("https://jsonplaceholder.typicode.com/todos/")
        .then(res => {
            dispatch({
                type: "FETCH_BUTTON",
                payload: res.data
            })
        })
}

export const selectPost = (post) => {
    return {
        type: "SELECT_POST",
        payload: post
    }
}