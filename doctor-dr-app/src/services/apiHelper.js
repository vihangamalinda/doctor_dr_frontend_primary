
const validateResponse = (response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
};

const getData = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
    });
    validateResponse(response);

    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error', error);
  }
};

const updateData = async ({ url, obj }) => {
  try {
    console.log(url);
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(obj),
      headers: { 'Content-Type': 'application/json' },
    });

    validateResponse(response);
    return await response.json();
  } catch (error) {
    console.log('error', error);
  }
};

const deleteData = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'DELETE',
    });
    validateResponse(response);
    return await response.json();
  } catch (error) {
    console.log('error', error);
  }
};

const createMultiPartFormData = async ({url,obj})=>{
    try{
      const response =await fetch(url,{
        method:'POST',
        body:obj,
      });
      validateResponse(response);
    }catch(error){
      console.log(error);
    }

}

const createData = async ({ url, obj }) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: { 'Content-Type': 'application/json' },
    });

    validateResponse(response);
    // const data = await response.json();
    // return data;
  } catch (error) {
    console.log('error', error);
  }
};

export { getData, updateData, deleteData, createData ,createMultiPartFormData};

