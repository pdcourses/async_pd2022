const btn = document.getElementById('loadUsers');

const store = {
    users: null,
    isFetching: false,
    error: null,
};

const request = new XMLHttpRequest();

btn.onclick = function () {
    request.open('GET', '../../assets/data/users.json', true);
    request.send();
    console.log(store.users);
}

request.onloadstart = function(){
    store.isFetching = true;
}

request.onloadend = function() {
    store.isFetching = false;
    if(this.status >=200 && this.status < 300){
        store.users = JSON.parse(this.responseText);
    } else {
        store.error = new Error(this.statusText)
    }

}