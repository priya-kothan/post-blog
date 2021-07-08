//action creator

import APIdata from "../apis/jsonPlaceholder";
import _ from "lodash";

// export const fetchPosts = () => {
//   return {
//     type: "POST_LIST",
//     payload: [],
//   };
// };

export const fetchPosts = () => async (dispatch) => {
  const response = await APIdata.get("posts");
  dispatch({
    type: "POST_LIST",
    payload: response.data,
  });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await APIdata.get(`users/${id}`);
  debugger;
  dispatch({ type: "FETCH_USER", payload: response.data });
};

export const fetchPostsAndUser = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // const UserIds = _.uniq(_.map(getState().post, "userId"));

  // UserIds.forEach((id) => dispatch(fetchUser(id)));

  _.chain(getState().post)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};
