// Promise

const promise1 = new Promise(test);

function test(resolve, reject){
    console.log('Hello, Vasya!');
    if(reject){
        new Error('Reject hello vasya')
    }
}

// делаем обещание что получим число больше 50 в интервале от 0 до 100

let promiseGetNumBiggerThan50 = new Promise(getNumFrom0To100);
console.log(promiseGetNumBiggerThan50);

function getNumFrom0To100(resolve, reject){
    const num = Math.round(Math.random() * 100);
    console.log(num);
    if(num >= 50){
        resolve(num);
    } else{
        reject(new Error(`Reject. Number ${num} is less than 50`))
    }
}


/*
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
*/