import {jwtDecode} from "jwt-decode";

export const isTokenExpired = (token) => {
  if (!token) return true;
  
  const decodedToken = jwtDecode(token,"login123");
  const currentTime = Date.now() / 1000;
  return decodedToken.exp < currentTime;
};
