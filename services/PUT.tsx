
const request = (url: any, value: any, func: any, that: any) => {

    fetch(url, {
        //  timeout: 30000,
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(value)

    }).then(response => response.json()).then((response) => {
        func(response, that);
    }).catch(function (error) {
        console.log('url' + error.value);

        if (error.toString() === 'TypeError: Network request failed') {
            func(408, that);
        } else {
            func(error.response.data.code);
        }
    });
};

export default request; 
