import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import {
  getAuth,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updateEmail,
  updatePassword,
  deleteUser,
} from "firebase/auth";
import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
  collection,
} from "firebase/firestore";

const UserForm = ({ content }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp, signIn } = UserAuth();
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  // message error à gérer

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (window.location.pathname === "/signup") {
        await signUp(email, password);
        navigate("/");
        alert("Your account has been successfully created!");
      } else if (window.location.pathname === "/signin") {
        await signIn(email, password);
        navigate("/");
        alert("You are now logged in!");
      } else if (window.location.pathname === "/account") {
        const credential = EmailAuthProvider.credential(email, password);
        await reauthenticateWithCredential(user, credential);
        const oldEmail = user.email;
        //await deleteUser(user);
        //await deleteDoc(doc(db, "users", user.email));
        //await signUp(newEmail, newPassword);

        const docRef = doc(db, "users", user.email);
        const docSnap = await getDoc(docRef);
        let data;
        const newData = [];
        if (docSnap.exists()) {
          data = docSnap.data();
          data.savedCineShows.map((item) => newData.push(item));
        }

        await updateEmail(user, newEmail);
        await setDoc(doc(db, "users", newEmail), {
          savedCineShows: [...newData],
        });
        if (newEmail !== oldEmail) {
          await deleteDoc(doc(db, "users", oldEmail));
        }
        await updatePassword(user, newPassword);
        navigate("/");
        alert("You're account has been successfully updated!");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {error && <p className="text-[#e50914]">{error}</p>}
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col justify-center ${
          window.location.pathname === "/account" ? "h-4/5" : "h-3/5"
        }`}
      >
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="h-12 rounded-sm bg-[#0f0f0f] border border-[#888] mb-5 pl-2"
          placeholder={
            window.location.pathname === "/account"
              ? "Current Email Address ..."
              : "Email Address ..."
          }
          autoComplete="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="h-12 rounded-sm bg-[#0f0f0f] border border-[#888] mb-5 pl-2"
          placeholder={
            window.location.pathname === "/account"
              ? "Current Password ..."
              : "Password ..."
          }
          autoComplete="current-password"
        />
        {window.location.pathname === "/account" && (
          <>
            <input
              onChange={(e) => setNewEmail(e.target.value)}
              type="email"
              className="h-12 rounded-sm bg-[#0f0f0f] border border-[#888] mb-5 pl-2"
              placeholder="New Email Address ..."
              autoComplete="email Address"
            />

            <input
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
              className="h-12 rounded-sm bg-[#0f0f0f] border border-[#888] mb-10 pl-2"
              placeholder="New Password ..."
              autoComplete="current-password"
            />
          </>
        )}
        <div className="flex w-full justify-around">
          <button
            type="button"
            className="w-1/2 h-8 rounded-sm bg-[#888] hover:bg-[#8f8f8f] text-[#0f0f0f] mr-2 mb-5"
          >
            <Link to="../">Cancel</Link>
          </button>
          <button className="w-1/2 h-8 rounded-sm bg-[#e50914] hover:bg-[#f31217] ml-2 mb-5">
            {content}
          </button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
