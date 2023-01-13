// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useModal } from "../modal/modal-context";
// import {
//   addUserToStore,
//   closePortForm,
//   getUsers,
//   openPortForm,
// } from "./user-slice";

// export const useUserService = () => {
//   const dispatch = useDispatch();
//   const [loadingUser, setLoading] = useState(false);
//   const [activePage, setActivePage] = useState("User list");
//   const users = useSelector((state) => state?.userSlice?.users);

//   const { showModal } = useModal();
//   const processFailedRequest = () => {};

//   const closeUserForm = () => {
//     dispatch(closePortForm());
//   };

//   const openUserForm = () => {
//     dispatch(openPortForm());
//   };

//   const closeUser = () => {
//     showModal("Do you really want to close this user?", (response) => {});
//   };

//   return {};
// };
