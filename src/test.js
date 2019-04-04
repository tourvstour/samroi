

dddd =() =>{

    return new Promise((resolve, reject) => {
        // console.log("criteria=>",criteria)
        dispatch({ type: BUSINESS_ENTITY_GET_ITEM });

      
                dispatch({ type: BUSINESS_ENTITY_GET_ITEM_SUCCESS, payload: v });
                resolve();
            })
            .catch((e) => {
                dispatch({ type: BUSINESS_ENTITY_GET_ITEM_FAIL });
                reject();
            });
    });
    }