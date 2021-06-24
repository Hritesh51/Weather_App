
const api = {
    key: "a6c82065b6463b3d9393f298978549ab",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  
  
 
  const searchbox = document.querySelector('.search-box');
  searchbox.addEventListener('keypress', setQuery);
  
  function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value);
    }
  }
  
  
  
 
  function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }
  
  
  
  
  function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
  
   
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
  
  

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
    
   
    let weather_eg = document.querySelector('.current .weather');
    weather_eg.innerText = weather.weather[0].main;
  
  

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.floor(weather.main.temp_min)}°c / ${Math.ceil(weather.main.temp_max)}°c`;

    // if(${Math.round(weather.main.temp)} < 20)
    // {
    //   document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1572339152651-c3f1995ab1f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVtcGVyYXR1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    // }

    // else if(temp.innerHTML > 20 )
    // {
    //   document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1585594219497-c16198d7792f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRlbXBlcmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    // }

    if(weather.weather[0].main === "Rain")
    {
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1438449805896-28a666819a20?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    }
    else if(weather.weather[0].main === "clouds")
    {
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1592210454359-9043f067919b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    }
    else if(`${Math.round(weather.main.temp)}` > 10)
    {
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1469122312224-c5846569feb1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3Vubnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    }
  }
  
  
  
  

  function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }

  


  