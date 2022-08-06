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
    const showNewPhonePromise = await new Promise(showForFriends);
    function showForFriends(resolve, reject){
            const msg = `Hello, I have a new phone ${phone.model} ${phone.year}`;
            console.log(msg);
            resolve(msg);
    }
}
//connect ES7
async function buy(){
    try{
        const phone = await buyNewPhonePromise;
        const m = await showMyNewCoolPhone(phone);
        console.log(phone);
        console.log(m);
    } catch(error){
        console.log(error);
    }
}

// асинхронный вызов
//(async () => {await buy();})();
buy();
