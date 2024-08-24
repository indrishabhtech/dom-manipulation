// let heading = document.querySelector("h1")
// heading.style.color = "red";

// document.querySelector("h1").style.color = "aqua";



// let heading = document.querySelector("h1");
// heading.innerText = "Hello Rishabh";
// heading.innerText = "<h6>Kya ho </h6>";


// heading.innerHTML = "<h6>Kya ho </h6>"

// let di = 0;
// let div = document.getElementById("cat")
// let btn = document.querySelector("button")
// // onclick="drk();"
// btn.addEventListener("click", () => {
    

//     if (di == 0) {
//         div.style.background = "black";
//         console.log("Black bg");
//         di = 1;
//     }
    
//     else {
//         div.style.background = "white";
//         console.log("white bg");

//         di = 0;
//     }


// })



// const url = "https://jsonplaceholder.typicode.com/todos/1";
// console.log("Data is received");
// let btn = document.querySelector("button")
// let img = document.querySelector(".img")

// btn.addEventListener("click",()=>{
//     fetch('https://jsonplaceholder.typicode.com/photos')
//         .then(response => response.json())
//         .then(json => console.log(json))
//         // img.style.src = response.json.url;
// })


// Chatgpt Response

// let btn = document.querySelector("button");
// let imgDiv = document.querySelector(".img");
// let titleDiv = document.querySelector(".title");

// btn.addEventListener("click", () => {
//     fetch('https://jsonplaceholder.typicode.com/photos')
//         .then(response => response.json())
//         .then(json => {
//             // Get the first item from the response
//             let firstItem = json[0];
            
//             // Create an image element
//             let img = document.createElement("img");
//             img.src = firstItem.url;
//             img.alt = firstItem.title;

//             // Clear any existing content in the imgDiv and append the new image
//             imgDiv.innerHTML = "";
//             imgDiv.appendChild(img);

//             // Update the titleDiv with the image title
//             titleDiv.textContent = firstItem.title;
//             console.log("Image anmd title fetched from the api");
//         })
//         .catch(error => console.error('Error fetching data:', error));
// });


//New german profile rapid api
// const url = 'https://dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com/?gender=b&cc=all&email=gmail.com%2Cyahoo.com&pwlen=12&ip=a&phone=l%2Ct%2Co&seed=helloworld&format=json&count=10&maxage=40&minage=30&uuid=true&color=true&lic=true&images=true';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '4c4c114646mshc45731ccd866c62p1ab0edjsn63ba7c219ce5',
// 		'x-rapidapi-host': 'dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com'
// 	}
// };

// try {
//     const  response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }