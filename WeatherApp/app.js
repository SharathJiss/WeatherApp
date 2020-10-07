function search(){
 
  console.log("inside method");
  const apiKey = "4d8fb5b93d4af21d66a2948710284366";
  var inputVal=document.getElementById('search').value;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
fetch(url)
  .then(response => response.json())
  .then(data => {
    // do stuff with the data
    const { main, name, sys, weather,wind } = data;
    var temp=main.temp;
    var hum =main.humidity;
    wind_val=wind.speed;
    var country=sys.country;
    document.getElementById("country").innerHTML=country;
    
    
    
    
    document.getElementById("city").innerHTML = name;
    document.getElementById("temperature").innerHTML = temp +"&#x2103;";
    document.getElementById("humidity_val").innerHTML=hum;
    
    console.log(JSON.stringify(data));
    console.log(data);
    console.log("inside loop");
   var weather1 = (data.weather[0].main);
   document.getElementById("clouds").innerHTML= weather1 ;
   document.getElementById("wind").innerHTML= wind_val+" "+"km/h";
  });
if (inputVal=null){
  alert("Oops something went wrong");
}
}
