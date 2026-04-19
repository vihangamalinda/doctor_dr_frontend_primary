const validateResponse = (response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
};

const getData = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      credentials: "include",
    });

    isAuthenticated(response);
    validateResponse(response);

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error", error);
    throw new Error("Failed to retrieve data. Please try again later.");
  }
};

const updateData = async ({ url, obj }) => {
  try {
    console.log(url);
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(obj),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    isAuthenticated(response);
    validateResponse(response);
    // return await response.json();
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to update data. Please try again later.");
  }
};

const deleteData = async (url) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      credentials: "include",
    });
    isAuthenticated(response);
    validateResponse(response);
    // return await response.json();
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to delete data. Please try again later.");
  }
};

const createMultiPartFormData = async ({ url, obj }) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: obj,
      credentials: "include",
    });
    isAuthenticated(response);
    validateResponse(response);
    return await response.json();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create data. Please try again later.");
  }
};

const createData = async ({ url, obj }) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    isAuthenticated(response);
    validateResponse(response);
    // const data = await response.json();
    // return data;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to create data. Please try again later.");
  }
};

const createDataAndReturnResponse = async ({ url, obj }) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    isAuthenticated(response);
    validateResponse(response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to create data. Please try again later.");
  }
};

const createDataWithoutResponseBody = async(url) =>{
  try{
    const response = await fetch(url, {
      method: "POST",
      credentials: "include",
    });
    isAuthenticated(response);
    validateResponse(response);
  }catch(error){
    console.log("error", error);
    throw new Error("Failed to create data. Please try again later.");
  }
}

const isAuthenticated = (response) => {
  if (response.status === 401 || response.status === 403) {
    window.location.href = "/login";
    return;
  }
};

export {
  getData,
  updateData,
  deleteData,
  createData,
  createMultiPartFormData,
  createDataAndReturnResponse,
  createDataWithoutResponseBody,
};
