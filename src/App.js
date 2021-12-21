import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import "./App.css";
import Body from "./Body";
import Header from "./Header";
import { db } from "./firebase";
import { Box, Button, Input } from "@mui/material";
import { styled } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "5px",
  p: 2,
  px: 4,
  pb: 3,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(
    () =>
      onSnapshot(collection(db, "post"), (snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      ),
    []
  );

  const handleSignUp = () => {
    console.log({
      username: username,
      email: email,
      password: password,
    });

    setOpen(false);
  };

  console.log(posts);

  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={() => setOpen(false)}
        BackdropComponent={Backdrop}
      >
        <Box sx={style} className="modal__box">
          <center>
            <img
              className="header__image"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
              alt=""
            />
          </center>
          <Input
            placeholder="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="signup__input"
          ></Input>
          <Input
            placeholder="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signup__input"
          ></Input>
          <Input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup__input"
          ></Input>
          <button className="signup__button" onClick={handleSignUp}>
            Sign up
          </button>
        </Box>
      </StyledModal>
      <Button onClick={() => setOpen(true)}>Sign up</Button>
      <Body posts={posts} />
    </div>
  );
}

export default App;
