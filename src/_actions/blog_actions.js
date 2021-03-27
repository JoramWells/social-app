import axios from "axios";
import {
  BLOG_DETAILS_FAIL,
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_SUCCESS,
} from "./types";

const listBlogs = () => async (dispatch) => {
  try {
    dispatch({ type: BLOG_DETAILS_REQUEST });
    const { data } = await axios.get("/api/blog/getBlogs");
    dispatch({ type: BLOG_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: BLOG_DETAILS_FAIL, payload: error.message });
  }
};

export { listBlogs };
