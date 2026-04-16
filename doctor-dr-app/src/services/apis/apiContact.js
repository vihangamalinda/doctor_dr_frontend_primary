import {CONTACTS_API_URLs} from "../apiConfigs.js";
import { getData, updateData, deleteData, createData } from "../apiHelper.js";

const getAllContacts = async ()=>{
    return await getData(CONTACTS_API_URLs.CONTACTS_PERFORM_GET_ALL);
}


export {
    getAllContacts,
}