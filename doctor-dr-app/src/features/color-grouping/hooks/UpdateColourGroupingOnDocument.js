const removeAllClourGroupsFromDocumentObject=(allColourGroupsValueList)=>{
    allColourGroupsValueList.forEach(colourGroupValue => {
        document.documentElement.classList.remove(colourGroupValue);
    });
};

const addColourGroupToDocumentObject=(colourGroupValue)=>{
    document.documentElement.classList.add(colourGroupValue);
};

export {
    removeAllClourGroupsFromDocumentObject,
    addColourGroupToDocumentObject,
}