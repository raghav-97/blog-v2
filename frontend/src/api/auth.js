import axios from "axios";

const API_URL = "http://localhost:3000";



export const SignUpRequest = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/user/signup`, user);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error, "Failed to signup");
  }
};

export const SignInRequest = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/user/signin`, user, {
      withCredentials: true,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error, "Failed to signin");
  }
};
