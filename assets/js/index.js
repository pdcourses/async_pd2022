
const btn = document.getElementById('loadUsers');

const store = {
    users: null,
    isFetching: false,
    error: null,
};

btn.onclick = function () {
    fetch('../../assets/data/users.json').then(loadResolve).then(logData).catch(loadReject);
}

// data to console
function logData(data){
    console.log(data);
}

// good!
function loadResolve(response){
    console.log(response.json());
    return response.json();
}

// error , bad ((
function loadReject(response){
    console.log(response);
}