const xhr = new XMLHttpRequest();
const url = 'https://www.youtube.com/';
xhr.responseType = 'json';
xhr.onreadystatechange = () =>{
    if(xhr.readyState === XMLHttpRequest.DONE){
        return xhr.response;
    }
};
xhr.open('GET',url);
xhr.send();