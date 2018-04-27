import { } from "./business.js"
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#find').click(function() {
    let doctors = $('#symptom-checker').val();
    $('#symptom-checker').val("");

    let promise = new Promise(function(resolve, reject) {
      let doctorRequest = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/conditions?fields=toothache&user_key=${process.env.exports.apiKey}`;
      doctorRequest.onload = function() {
        if (this.status === 200) {
          resolve(doctorRequest.response);
          console.log(doctorRequest.response);
        } else {
          reject(Error(doctorRequest.statusText));
        }
      }
      doctorRequest.open("GET", url, true);
      doctorRequest.send();
    });

    promise.then(function(response) {
      let body = JSON.parse(response);
      $('#results').text(body);
      // $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    }, function(error) {
      $('#results').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
