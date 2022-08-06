// 1
const promise1 = new Promise(fun1);

function fun1(resolve, reject){
    console.log('hello');
}

//2
const promise2 = new Promise(
    function(resolve, reject){
        console.log('hello');
    }
);


// обещание об авторизации пользователя isAuthUser
const isAuth = true;
const error = null;
const currentUser = {name: 'Test', surname: 'Testovich'};

const getAuthUserPromise = new Promise(getAuthUser);

function getAuthUser(resolve, reject){
    if(isAuth){
        resolve(currentUser);
    } else{
        reject(error);
    }
}

// цепь из 2 обещаний
//1
const isIHaveEnoughMoney = true;
const buyNewPhonePromise = new Promise(getPhone);
function getPhone(resolve, reject){
    if(isIHaveEnoughMoney){
        const phone = {
            model: 'modelX',
            color: 'black',
            year: 2022
        };
        resolve(phone);
    } else{
        const reason = new Error('Try again...)');
        reject(reason);
    }
}
//2
async function showMyNewCoolPhone(phone){
    const showNewPhonePromise = new Promise(showForFriends);
    function showForFriends(resolve, reject){
        if(phone){
            const msg = `Hello, I have a new phone ${phone.model} ${phone.year}`;
            resolve(msg);
        } else {
            const promiseMsg = 'I will make this again';
            reject(promiseMsg);
        }
    }
}
//connect ES7
async function buy(){
    try{
        const phone = await buyNewPhonePromise;
        const msg = await showMyNewCoolPhone(phone);
    } catch(error){
        console.log(error);
    }
}

//вызов 
buy();

// асинхронный вызов
(async () => {await buy();})();

//ES6
/*
const buy = function(){
    buyNewPhonePromise
    .then(showMyNewCoolPhone)
    .catch(error => console.log(error))
};

buy();
*/