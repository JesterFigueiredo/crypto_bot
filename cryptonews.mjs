
import fetch from "node-fetch";

export async function getnews(){
	 let news= await fetch("https://crypto-news-live3.p.rapidapi.com/news", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "crypto-news-live3.p.rapidapi.com",
		"x-rapidapi-key": "0277572751mshca2da7ef724624ep146312jsn73db465fe63d"
	}

})
return news;
}

getnews();
 
// })
// .then(response => {
// 	response.json().then(news=>{news1=news});
// })
// .catch(err => {
// 	console.error(err);
// });
// return news1
// }

