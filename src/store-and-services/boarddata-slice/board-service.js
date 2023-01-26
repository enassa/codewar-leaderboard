import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { END_POINTS } from "./../../constants/urls";
import { API } from "../../App";
import {
  addUsersToBoard,
  changeUserFormState,
  setLanguages,
} from "./boarddata-slice";
import { errorToast, successToast } from "../../components/toast/toastify";

export const useBoardService = () => {
  const boardList = useSelector((state) => state?.boardDataSlice?.boardList);
  const languages = useSelector((state) => state?.boardDataSlice?.languages);
  const userFormState = useSelector(
    (state) => state?.boardDataSlice?.userFormState
  );
  const dispatch = useDispatch();

  const [loadingBoard, setLoading] = useState(false);

  const getUsersByHonor = async (data) => {
    setLoading(true);
    return API.GET_WITH_TOKEN(END_POINTS.getLeaderBoardByHonor)
      .then(async (response) => {
        return response?.data;
      })
      .then(async (response) => {
        if (!Array.isArray(response)) return;
        dispatch(addUsersToBoard(response));
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  const getUsersByOverall = async (data) => {
    setLoading(true);
    return API.GET_WITH_TOKEN(END_POINTS.getLeaderBoardOverAll)
      .then(async (response) => {
        return response?.data;
      })
      .then(async (response) => {
        console.log(response.scores);
        if (!Array.isArray(response.scores)) return;
        dispatch(addUsersToBoard(response.scores));
        dispatch(setLanguages(response.scores));
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  const getUsersByLanguage = async (data) => {
    setLoading(true);
    return API.GET_WITH_TOKEN(END_POINTS.getLeaderBoardByLanguage(data))
      .then(async (response) => {
        console.log(response);
        return response?.data;
      })
      .then(async (response) => {
        if (!Array.isArray(response)) return;
        dispatch(addUsersToBoard(response));
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  const addUserToBoard = async (data) => {
    setLoading(true);
    return API.POST_WITH_TOKEN(END_POINTS.addUserToLearderBoard, data)
      .then(async (response) => {
        console.log(response);
        if (response.status === 404) {
          errorToast("User not found");
          return;
        }

        if (response.status === 409) {
          errorToast("User already exist");
          return;
        } else {
          successToast("User has been  added");
          dispatch(changeUserFormState(false));
          getUsersByHonor();
        }
      })

      .catch((error) => {
        errorToast("?Uknown error, please check your internet connection");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const addComment = async (data) => {
    setLoading(true);
    return API.POST_WITH_TOKEN(END_POINTS.addComment, data)
      .then(async (response) => {
        console.log(response);
        // return response?.data;
      })
      .then(async (response) => {
        // console.log(response);
        // if (!Array.isArray(response)) return;
        // dispatch(addUsersToBoard(response));
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };
  const deleteUser = async (data) => {
    setLoading(true);
    return API.POST_WITH_TOKEN(END_POINTS.deleteCodeWarUser(data.username))
      .then(async (response) => {
        console.log(response);
        // getUsersByHonor();
        // return response?.data;
      })
      .then(async (response) => {
        // console.log(response);
        // if (!Array.isArray(response)) return;
        // dispatch(addUsersToBoard(response));
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  const toggleUserFormState = (boardState) => {
    dispatch(changeUserFormState(boardState));
  };

  const changeBoardTypeMock = (data) => {
    console.log(data.length);
    setLoading(true);
    setTimeout(() => {
      dispatch(addUsersToBoard(data));
      setLoading(false);
    }, 3000);
  };
  return {
    getUsersByHonor,
    getUsersByOverall,
    getUsersByLanguage,
    boardList,
    loadingBoard,
    userFormState,
    toggleUserFormState,
    addUserToBoard,
    addComment,
    deleteUser,
    changeBoardTypeMock,
  };
};
