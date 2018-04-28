import { Doctor } from "./doctor.js"
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// function getData(userInput) {
//   $('#results').append(["body"]["data"]["profile"]["first_name"];
//   $('#results').append(body.data.profile.last_name);
//   $('#results').append(body.data.practices.visit_address.street.city.state);
//   $('#results').append( );
//   $('#results').append()
// }
function getData(response) {
  $('#results').append(body["data"][0]["profile"]["first_name"]);
}


$(document).ready(function() {
  $('#find').click(function() {
    let symptom = $('#symptom-checker').val();
    $('#symptom-checker').val("");

    let doctor = new Doctor();





  // let answer = doctor.findDoctor(symptom)
  //   .then(function(response) {
  //     let body = JSON.parse(response);
  //     let name = body.data;
  //     return doctor.findDoctor(name);
  //   })
  //   .then(function(response) {
      // let giphyResponse = JSON.parse(response);
      // let image = giphyResponse["data"][0]["images"]["downsized"]["url"];
      // $('.showImage').html(`<img src='${image}'>`);
  let promise = doctor.findDoctor(symptom);
  promise.then(function(response) {
    response = JSON.parse(response);
    getData(response);
    }, function(Error) {
    console.log("sorry, there is an error loading your requested information.");
  }

    });
  });
});



  // $('#results').append("Call one of these doctors to help you" + "<br>" + answer);
  // $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
  // }, function(error) {
  // $('#results').text(`There was an error processing your request: ${error.message}`);
  // });




  // let promise = doctor.stormGlassLogic(latInput, longInput);//run this instance on the method from the BL
  // promise.then(function(response){
  //   response = JSON.parse(response); //cleans code
    // console.log(response + "this is after the promise");
  //   getElementsStorm(response, longInput, latInput); //calls on the function outside document ready function
  // }, function(Error) { //display error
  //   console.log("Sorry, there is an Error loading your requested information!");
  // });


    // let promise = new Promise(function(resolve, reject) {
    //   let doctorRequest = new XMLHttpRequest();
    //   let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptoms}&location=45.523062%2C-122.676482%2C100&user_location=45.523062%2C-122.676482&skip=0&limit=10&user_key=${process.env.exports.apiKey}`

      // let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptoms}&location=45.523062, -122.676482&limit=10&user_key=${process.env.exports.apiKey}`;
    //   doctorRequest.onload = function() {
    //     if (this.status === 200) {
    //       resolve(doctorRequest.response);
    //       console.log(doctorRequest.response);
    //     } else {
    //       reject(Error(doctorRequest.statusText));
    //     }
    //   }
    //   doctorRequest.open("GET", url, true);
    //   doctorRequest.send();
    // });
    //
    // promise.then(function(response) {
    //   let body = JSON.parse(response);
    //   $('#results').append("Call one of these doctors to help you" + "<br>" + body.data.name);
    //   // $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    // }, function(error) {
    //   $('#results').text(`There was an error processing your request: ${error.message}`);
  //   // });
//    });
// });
// 45.523062, -122.676482
