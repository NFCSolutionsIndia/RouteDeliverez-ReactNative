
const request = async (url: any, func: any, that: any) => {
    var headers; 
      headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    
      fetch(url, { 
         // timeout: 30000,
          method: 'GET',
          headers: headers
          //body: JSON.stringify(value)
       
      }).then(response => response.json()).then((response) => {
        func(response, that);
    }).catch(function (error) {
        console.log('url',url,error);
  
          if(error.toString() === 'TypeError: Network request failed') {
            func(408, that);
          } else {    
            func(error.response.data.code);
          }
        });
  };
  
  export default request; 
  