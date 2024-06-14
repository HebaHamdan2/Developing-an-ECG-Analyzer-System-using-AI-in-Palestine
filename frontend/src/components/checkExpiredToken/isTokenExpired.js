import { jwtDecode } from 'jwt-decode';

export const isTokenExpired = (token) => {
  if (!token) return true;

  const decodedToken = jwtDecode(token);
  const currentTime = Date.now() / 1000;
  
  const isExpired = decodedToken.exp < currentTime;
  const isOlderThan24Hours = (currentTime - decodedToken.iat) > 24 * 60 * 60;

  return isExpired || isOlderThan24Hours;
};
