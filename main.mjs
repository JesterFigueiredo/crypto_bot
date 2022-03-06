import fetch from "node-fetch";
import { api_key,telegram_link } from "./keyAndlinks.mjs";
import {getnews} from "./cryptonews.mjs"


function hourly_news(){
let prom=new Promise(async(resolve,reject)=>{
    let news=await getnews();
    if(news.ok){
        resolve(news)
    }

    else{
        reject("There was an error")
    }
})

function get_random_news(news){
    let array_length=news.length;
    let random_num=Math.floor(Math.random()*array_length);
    return new Promise((resolve)=>{
        resolve({title:news[random_num]["title"],url:news[random_num]["url"]});
    })
}


function send(news){
    fetch(telegram_link+api_key+"/sendMessage?chat_id=1636761388&text="+news.title+"\r\n "+news.url);
}

prom.then((news)=>{
    return news.json();
}).then((news)=>{
    return get_random_news(news)
}).then((news)=>{
    send(news);
}).catch((err)=>{
    fetch(telegram_link+api_key+"/sendMessage?chat_id=1636761388&text="+err);
})

//1636761388
}

setInterval(hourly_news, 3600000);
 


