weatherApp = {};
weatherApp.weathers = [];
weatherApp.url = "https://vejabi.firebaseio.com/";
weatherApp.AddWeather = function () {
    "use strict";
    //Post
    var weatherObject = {};
    weatherObject.temp = document.getElementById("temperature").value;
    weatherObject.city = document.getElementById("city").value;
    
    var request = new XMLHttpRequest();
    request.open("OPEN", weatherApp.url, true);
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            //Call Worked. Successfull
            console.log(this.response);
            weatherApp.showWeather();
        }
        else {
            //Server Error
            console.log("Error on Post: " + this.response);
        }
    };
    request.onerror = function () {
        console.log("Communication Error");

    };
    //This is for the Communication error
    

    request.send();
};

weatherApp.showWeather = function () {
//Get
    var request = new XMLHttpRequest();
    request.open("GET", weatherApp.url);
    request.onload = function () { };
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            //Success
            var data = JSON.parse(this.response);
            weatherApp.weathers = "";
            for (var w in data) {
                weatherApp.weathers.push(data[w]);

            }
            weatherApp.writeOutput();
        } else {
            alert("NOOOOO!!!!!!");

        }
    };
    request.onerror = function () { };
    console.log("Err on GET");
};
weatherApp.writeOutput = function () {
    //Outputs data from array to the output div
    holder = "";
    for (var w in weatherApp.weathers) {
        holder += weatherApp.weathers[w].city + ':' + weatherApp.weathers[w].temp + "<br/>";

    }
    document.getElementById("output").innerHTML = holder;
};
