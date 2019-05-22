/** 
* EasyHTTP Library
* Library for making HTTP requests
*
* @version 3.0.0
* @author Philip Andes
* @license MIT
*
**/

// This time we are going to use ES6 classes
class EasyHTTP {
    // Make an HTTP GET Request
    async get(url) {
        // return new Promise((resolve, reject) => {
        //     fetch(url)
        //     .then(res => res.json())
        //     .then(data => resolve(data))
        //     .catch(err => reject(err));
        // });
        // Old code above commented out, lets make it better:
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    // Make an HTTP Post Request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }

    // Make an HTTP Put Request
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }

    // Make an HTTP Delete Request
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        const resData = await 'User Deleted...';
        return resData;
    }
}

export const http = new EasyHTTP();
