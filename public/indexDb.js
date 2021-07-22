    // IndexDB for offline browser
    const request= indexedDB.open("firstDatebase",1);
    
    request.onsuccess=event => {
      console.log(request.result);
    };