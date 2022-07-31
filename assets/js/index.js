
const btn = document.getElementById('loadUsers');

const store = {
    users: null,
    isFetching: false,
    error: null,
};

btn.onclick = function () {
    fetch('../../assets/data/users1.json').then(loadResolve).then(logData).catch(loadReject);
}

// data to console
function logData(data){
    store.isFetching = false;
    store.users = data;
    console.log(store.users);
}

// good!
function loadResolve(response){
    store.isFetching = true;
    return response.json();
}

// error , bad ((
function loadReject(response){
    store.error = new Error(`${response.status} ${response.statusText} `);
    console.log(response);

}