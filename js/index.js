
let weather = {
    "apikey":"7d44e7df4ee78763b32a0d0d1b937180",
    fetchweather:function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+ this.apikey)
        .then((res => res.json()))
        .then((data => this.displayweather(data)))
    },
    displayweather : function(data){
        const { name }= data;
        const { icon , description } = data.weather[0];
        const { temp , humidity } = data.main;
        const { speed } =data.wind; 
        console.log( name , icon ,description ,temp ,humidity ,speed  );
        document.querySelector(".city").innerText = "Weather In " + name;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+ icon +"@2x.png";
        document.querySelector(".description").innerText = "It Is "+ description;
        document.querySelector(".humidity").innerText = "the Humidity Is "+ humidity + "%";
        document.querySelector(".wind").innerText = "And Wind Speed Is "+ speed + " km/h";
        document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?"+ name +"')"
    },
    search : function(){
        this.fetchweather(document.querySelector(".form-control").value)
    }
}
document.querySelector('.search button').addEventListener("click",function(){
 weather.search();
}),
document.querySelector('.card').addEventListener("keyup",function(e){
    if(e.key == "Enter"){
        weather.search();
    }else{}
})
