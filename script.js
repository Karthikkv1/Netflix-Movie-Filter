let movies=[     //Array of objects concept used here

    {
        name:"Avengers Endgame",
        poster:"https://rukminim2.flixcart.com/image/850/1000/jxhv1jk0/poster/c/x/v/medium-thor-avengers-endgame-new-poster-for-room-office-endgame-original-imafgyfefdnvuvjh.jpeg?q=90",
        rating:8.7
    },

    {
        name:"Lagan",
        poster:"https://upload.wikimedia.org/wikipedia/en/b/b6/Lagaan.jpg",
        rating:9.1

    },

    {
        name:"OppenHeimer",
        poster:"https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
        rating:9.1

    },

    {
        name:"MoonLight",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStBaomVy3XSjQcewdF6DCZNIbAv2mHYiBLQw&usqp=CAU",
        rating:9

    },

    {
        name:"bohemian rhapsody ",
        poster:"https://www.themoviedb.org/t/p/original/xymhMpaPUlaWOc3dmHrhjZxOtQD.jpg",
        rating:8

    },

    {
        name:"captainAmerica",
        poster:"https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_FMjpg_UX1000_.jpg",
        rating:9

    },

    {
        name:"Kgf",
        poster:"https://m.media-amazon.com/images/M/MV5BMjI2Njg2Y2EtZjgwMC00ZGVkLWJmMWYtYjVhYjk2ZTkwNWE1XkEyXkFqcGdeQXVyMTMxMjA5NDU1._V1_.jpg",
        rating:9.8

    },

    {
        name:"ugram",
        poster:"https://m.media-amazon.com/images/M/MV5BMTc2MDkwNzk3OF5BMl5BanBnXkFtZTgwMTQ3NTcyMTE@._V1_.jpg",
        rating:9.5

    },

    {
        name:"kabza",
        poster:"https://m.media-amazon.com/images/M/MV5BNzk0OGI4ZDItZTNhZC00MzA4LThiOWEtNmM0NGQ0N2RmMjUxXkEyXkFqcGdeQXVyOTY3OTAzOTQ@._V1_.jpg",
        rating:9.3

    },

    {
        name:"salar",
        poster:"https://m.media-amazon.com/images/M/MV5BZGE5N2QyOGQtYjc4ZC00YTRhLWFiZDMtMmUzNWFmNjdiMzVkXkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_.jpg",
        rating:9.7

    },

    {
        name:"Varisu",
        poster:"https://pbs.twimg.com/media/Ff7fHlaWYAUegKe?format=jpg&name=4096x4096",
        rating:9.6

    },

];


function searchMovie(){
//    let MovieName= document.getElementById('search').value; //To get the movie name
//    console.log(MovieName) //To print the movie name which was taken from user


let movieName = document.getElementById('search').value;


    if(movieName!=="")
    {
       let result = movies.filter(function(movie)
        {

            return movie.name.toUpperCase().includes(movieName.toUpperCase()) //whatever we searched in search bar it is converted into uppercase letters to avoid confusion while fetching data

        })

        displayMovies(result);
    }

    else{
        displayMovies(movies); //To display all movies when our search ends and we didnot find required movie
    }

}

function displayMovies(data){        // data is parameter
          
    document.getElementById("movies").innerHTML=""; //To make no movie before loop starts

   

    let htmlString=``;

    for(let i=0;i<data.length;i++)
    {
        htmlString=htmlString+`
        <div class="movie">

        <div class="overlay">

          <div class="video">

           </div>

          <div class="details">

         <h1>${data[i].name}</h1>
         <h2>${data[i].rating}</h2>
         <p>Rami Malek,John Jacobs</p>

          </div>

         </div>
     
     <img class="poster" src="${data[i].poster}" alt="poster">

     </div> 
        `
    }

    document.getElementById("movies").innerHTML=htmlString;

    console.log(htmlString);


   

}

displayMovies(movies);


// function displayMovies(){

//     let movieDIV = document.createElement("div");
//     movieDIV.classList.add("movie");

//     let overlayDIV =document.createElement("div");
//     overlayDIV.classList.add("overlay")

//     movieDIV.appendChild(overlayDIV);   //To place "overlayDIV" as child div inside "movieDIV"


//     console.log(movieDIV);

// }