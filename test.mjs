// import {getnews} from "./cryptonews.mjs"
// import { api_key,telegram_link } from "./keyAndlinks.mjs";
 import fetch from "node-fetch";


// function start(){
// let prom =new Promise(async (resolve,reject)=>{
//     let news= await getnews();
//     if(news.ok){
//     resolve(news);
//     }

//     else{
//         reject("There was an error");
//     }
// })


// function delay(){ return new Promise(resolve=>{setTimeout(()=>resolve(''),2000)});}


// function extract_12(news){
//     return new Promise((resolve)=>{
//         let arr=[];
//         for (let i=0;i<10;i++){
//             arr[i]=news[i]["title"];
//         }
//         resolve(arr);
        
//     })
    
// }


// async function send(news){
//         for(let i=0; i<=news.length;i++){
//             await delay();
//         fetch(telegram_link+api_key+"/sendMessage?chat_id=1636761388&text="+news[i]);
//         }
// }


// prom.then((news)=>{
//     return news.json();
// }).then((news)=>{
//     return extract_12(news)
// }).then((news)=>{
//     send(news);
// }).catch((text)=>{
//     fetch(telegram_link+api_key+"/sendMessage?chat_id=1636761388&text="+text);
// })


// }

// setInterval(start, 2000);

