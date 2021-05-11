import db from "../../lib/firebase.prod";

export const SigninQuery = ({
  x,
  setLoading,
  setUser,
  setFirstPage,
  setNotFound,
  setEmailOrPhoneError,
}) => {
  db.collection("users").onSnapshot((querySnapshot) => {
    querySnapshot.docs.map((user) => {
      if (user.data().gmail == `${x}@gmail.com`) {
        setLoading(false);
        setUser(user.data());
        setFirstPage(false);
        setNotFound(false);
      } else {
        setNotFound(true);
        setEmailOrPhoneError(false);
        setLoading(false);
      }
    });
  });
};
