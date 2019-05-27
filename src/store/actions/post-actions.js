import axios from 'axios';

// export const fetchPosts = async () => {
//   const url = 'https://jsonplaceholder.typicode.com/posts';
//   const response = await axios.get(url);

//   return {
//     type: 'FETCH_POSTS',
//     payload: {
//       posts: response
//     }
//   };
// };

export const fetchPosts = () => {
  return async dispatch => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const response = await axios.get(url);
    dispatch({
      type: 'FETCH_POSTS',
      payload: {
        posts: response
      }
    });
  };
};
