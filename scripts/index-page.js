// // // // define your list of comments
// // // //    -- what data is your in your list?

// const { response } = require("express");



// const opinionsData = [  {    picture: "avatar",    name: "Connor Walton",    date: "02/17/2021",    comment:      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",  },
//   {    picture: "avatar",    name: "Emilie Beach",    date: "01/09/2021",    comment:      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",  },
//     {    picture: "avatar",    name: "Miles Acosta",    date: "12/20/2020",    comment:      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",  },
//   ];

const opinionsList = document.getElementById("opinions__list");

function createComment(comment) {
  const opinionsItem = document.createElement("li");
  opinionsItem.classList.add("opinions__item");

  const opinionsBox1 = document.createElement("div");
  opinionsBox1.classList.add("opinions__box");

  const opinionsBox2 = document.createElement("div");
  opinionsBox2.classList.add("opinions__avatar");

  let opinionsImage = "";
  // if (comment.picture === undefined) {
    opinionsImage = document.createElement("div");
    opinionsImage.classList.add("opinions__image--indefined");
  // } else {
  //   opinionsImage = document.createElement("img");
  //   opinionsImage.classList.add("opinions__image");
  // }

  const opinionsBox3 = document.createElement("div");
  opinionsBox3.classList.add("opinions__info");

  const opinionsBox4 = document.createElement("div");
  opinionsBox4.classList.add("opinions__main");

  const opinionsName = document.createElement("p");
  opinionsName.innerText = comment.name;
  opinionsName.classList.add("opinions__name");

  // const opinionsDate = document.createElement("p");
  // opinionsDate.innerText = comment.date;
  // opinionsDate.classList.add("opinions__date");
  const opinionsDate = document.createElement("p");
  opinionsDate.innerText = new Date(comment.timestamp).toLocaleDateString();
  opinionsDate.classList.add("opinions__date");

  const opinionsText = document.createElement("p");
  opinionsText.innerText = comment.comment;
  opinionsText.classList.add("opinions__text");

  opinionsBox4.appendChild(opinionsName);
  opinionsBox4.appendChild(opinionsDate);
  opinionsBox2.appendChild(opinionsImage);
  opinionsBox3.appendChild(opinionsBox4);
  opinionsBox3.appendChild(opinionsText);
  opinionsBox1.appendChild(opinionsBox2);
  opinionsBox1.appendChild(opinionsBox3);
  opinionsItem.appendChild(opinionsBox1);
  opinionsList.appendChild(opinionsItem);
}

const apiKey = `e0eea5f0-0f8c-4b54-9fc4-ff50843766d4`;
const getRequest ="comments";
const commentsURL =`https://project-1-api.herokuapp.com`;

let opinionsData =[];
function getAPIData(){
  axios
  .get(`${commentsURL}/${getRequest}?api_key=${apiKey}`)
  .then((response)=>{
    opinionsData=response.data;
    // call back data
    let newData = opinionsData.sort(
      (a, b) => {
        // console.log("a:",a.timestamp)
        // console.log("b:",b.timestamp)
        return b.timestamp - a.timestamp
        
      }
    );

    console.log(opinionsData);
    console.log(newData);
    opinionsData.forEach((comment)=>{
      displayComments(
        comment.comment,
        comment.name,
        comment.timpestamp,
        opinionsList
      );
     // console.log(opinionsData);// it dose not work ?!

    });
  })
  .catch((error) => {
    console.log("error: ", error);
  });
}
getAPIData();

function displayComments() {
  opinionsList.innerText = "";
  for (let i = 0; i < opinionsData.length; i++) {
    createComment(opinionsData[i]);
  }
}

displayComments();

const form = document.querySelector(".comments__form");
const inputFields = document.querySelectorAll(".comments__text");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const now = new Date();

  const newEntry = {
    name: event.target.fullName.value,
    comment: event.target.yourComment.value,
   // date: `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`,
  };

  axios
  .post(`${commentsURL}/${getRequest}?api_key=${apiKey}`,newEntry)
  .then((response)=>{
    console.log(response);
    getAPIData();
    displayComments();
  })
  .catch((error) => {
   console.log("error: ",error);
  });
  event.target.reset();
  // opinionsData.push(newEntry);
  // displayComments();

  // event.target.reset();
}