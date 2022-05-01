export const toastReducer = (state, action) => {
  //   if (action.type === "SET_STORIES") {
  //     return action.payload;
  //   } else if (action.type === "REMOVE_STORY") {
  //     return state.filter((story) => action.payload.objectID !== story.objectID);
  //   } else {
  //     throw new Error();
  //   }

  switch (action.type) {
    case "TOAST_SUCCESS":
      return {
        ...state,
        showResultToast: true,
        isResultSuccess: true,
      };
    case "TOAST_ERROR":
      return {
        ...state,
        showResultToast: true,
        isResultSuccess: false,
      };
    case "TOAST_CLOSE":
      return {
        ...state,
        showResultToast: false,
        isResultSuccess: false,
      };

    default:
      throw new Error();
  }
};
