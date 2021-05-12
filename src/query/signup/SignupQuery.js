import db from "../../lib/firebase.prod";

export const IdentificationSignupQuery = ({x, setGmailThirdError, setFirstPage, gmailRef}) => {
    db.collection("users").onSnapshot((querySnapshot) => {
        querySnapshot.docs.map((item) => {
          if (item.data().gmail == `${x}@gmail.com`) {
            setGmailThirdError(true);
            gmailRef.current.focus();
          } else {
            setGmailThirdError(false);
            setFirstPage(false);
          }
        });
      });
}