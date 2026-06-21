//  export const signup = async (
//   firstName: string,
//   lastName: string,
//   email: string,
//   phoneNumber: string,
//   password: string
// ) => {
//   console.log(firstName, lastName, email, phoneNumber, password);

//   return {
//     firstName,
//     lastName,
//     email,
//     phoneNumber,
//   };
// };

// export const login = async (
//   email: string,
//   password: string
// ) => {
//   console.log(email, password);

//   return {
//     email,
//   };
// };

import axios from "axios";

const BACKEND_URL = "https://make-my-trip-clone-springboot-4-qxnn.onrender.com";

export const signup = async (
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  password: string
) => {
  const res = await axios.post(`${BACKEND_URL}/user/signup`, {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
  });

  return res.data;
};

export const login = async (
  email: string,
  password: string
) => {
  const res = await axios.post(
    `${BACKEND_URL}/user/login?email=${email}&password=${password}`
  );

  return res.data;
};
 