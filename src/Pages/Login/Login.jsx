import React, { useState } from "react";
import SiqnIn from "./SignIn/SiqnIn";
import SiqnUp from "./SiqnUp/SiqnUp";
import { useSpring, animated } from "react-spring";

const Login = () => {
  const [registerFormStatus, setRegisterFormStatus] = useState(false);

  const siqnin = useSpring({
    opacity: registerFormStatus ? 0 : 1,
    display: registerFormStatus ? "none" : "flex",
    transform: registerFormStatus ? "translate(0, -100%)" : "translate(0, 0)",
    // left: registerFormStatus ? -100 : 0,
    config: { duration: 2000},
  });

  const siqnup = useSpring({
    opacity: registerFormStatus ? 1 : 0,
    display: registerFormStatus ? "flex" : "none",
    transform: registerFormStatus ? "translate(0, 0)" : "translate(0, -100%)",
    // left: registerFormStatus ? 0 : -100,
    config: { duration: 2000 },
  });

  const regClick = () => {
    setRegisterFormStatus(true);
  };
  const loginCliclk = () => {
    setRegisterFormStatus(false);
  };

  return (
    <div>
      <animated.div style={siqnup}>
        <SiqnUp loginCliclk={loginCliclk} />
      </animated.div>

      <animated.div style={siqnin}>
        <SiqnIn regClick={regClick} />
      </animated.div>
    </div>
  );
};

export default Login;

//  // animation spring
//   const styles = useSpring({
//     to: [
//       { opacity: 1 },
//       // { opacity: 0 },
//     ],

//     from: { opacity: 0 },
//   })
