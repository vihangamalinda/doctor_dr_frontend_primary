import { USER_CREDENTIALS_API_URLs } from "../apiConfigs";
import { getData, createDataAndReturnResponse } from "../apiHelper";

const getAllUserNames = async () => {
  return await getData(
    USER_CREDENTIALS_API_URLs.USER_CREDENTIALS_PERFORM_GET_ALL_USER_NAMES,
  );
};

const createJwtTokenByUserLogin = async (userCredentials) => {
  console.log("api ", USER_CREDENTIALS_API_URLs.USER_CREDENTIALS_PERFORM_LOGIN);
  const data = {
    obj: userCredentials,
    url: USER_CREDENTIALS_API_URLs.USER_CREDENTIALS_PERFORM_LOGIN,
  };
  // const response=await createDataAndReturnResponse(data);
  // console.log(response);
  return await createDataAndReturnResponse(data);
};

const getCurrentLoggedUser = async () => {
  return await getData(
    USER_CREDENTIALS_API_URLs.USER_CREDENTIALS_PERFORM_GET_CURRENT_LOGGED_USER,
  );
};

export { getAllUserNames, createJwtTokenByUserLogin, getCurrentLoggedUser };
