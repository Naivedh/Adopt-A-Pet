export const adopt =
  () =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    const uid = await firebase.auth().currentUser.uid;
    let data = [];
    let email = "";

    dispatch({ type: "ADOPT_START" });
    try {
      //get email
      await firestore
        .collection("users")
        .doc(uid)
        .get()
        .then((snapshot) => (email = snapshot.data().email));
      //fetch data
      await firestore
        .collection("users")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            if (doc.data().email !== email) {
              doc.data().pets.forEach((pet) => {
                data.push(pet)
              });
            }
          });
        });

      dispatch({ type: "ADOPT_SUCCESS", payload: data });
    } catch (err) {
      dispatch({ type: "ADOPT_FAIL", payload: err.message });
      console.log(err.message);
    }
    dispatch({ type: "ADOPT_END" });
  };
