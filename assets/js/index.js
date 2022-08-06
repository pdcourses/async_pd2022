function getNumber(resolve, reject){
    const num = Math.random();
    if(num >= 0.5) {
        resolve('ok');
    } else{
        reject(new Error(`${num}:error get number > 0.5`));
    }
}

const setPromises = [];
for(let i=0; i<10; i++){
    setPromises[i]=new Promise(getNumber);
}
console.log(setPromises);

makePromises();

/*
async function makePromises(){
    try{
        const result = await Promise.all(setPromises);
        console.log(result);
    } catch(error){
        console.log(error);
    }
}
*/

/*
param - set promises

Promise.all() ждет когда все выполнятся успешно. если нет - преращает выполнение

Promise.race() ждет когда первый (ближайший) промис выполнится

Promise.allSettled()  вернет весь набор промисов со статусами 
и ему не важно успешно или нет

*/
