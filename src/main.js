import { Doctor } from "./doctor.js"
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './doctor.js';

function acceptPatients(newPatients) {
  let counter = 0;
  if (newPatients) {
    if (counter > 0) {
      return;
    }else {
     $('#results').append("We are accepting new patients." + "<br>");
     counter += 1;
     }
  }
}

function getData(response) {
  for (let i=0; i<response["data"].length; i++) {
    const image = response["data"][i]["profile"]["image_url"];
    const firstName = response["data"][i]["profile"]["first_name"];
    const lastName = response["data"][i]["profile"]["last_name"];
    const street = response["data"][i]["practices"][0]["visit_address"]["street"];
    const street2 = response["data"][i]["practices"][0]["visit_address"]["street2"];
    const city = response["data"][i]["practices"][0]["visit_address"]["city"];
    const state = response["data"][i]["practices"][0]["visit_address"]["state_long"];
    const number = response["data"][i]["practices"][0]["phones"][0]["number"];
    const website = response["data"][i]["practices"][0]["website"];
    const newPatients = response["data"][i]["practices"][0]["accepts_new_patients"];

    $('#results').append("<br>" + "<img src=" + image + ">");
    $('#results').append("<br>" + firstName + " " + lastName);
    $('#results').append("<br>" + street);
    if (street2) {
      $('#results').append("<br>" + street2);
      }
    $('#results').append("<br>" + city);
    $('#results').append("<br>" + state);
    $('#results').append("<br>" + number + "<br");
    for (let w=0; w<response["data"][i]["practices"].length; w++) {
      let counter = 0;
      if (website) {
        $('#results').append("<br>" + '<a href="' + website + '">' + website + '</a>' + "<br>");
      }else {
        $('#results').append("<br>");
      }
    }
    acceptPatients(newPatients);
  }
}

$(document).ready(function() {
  $('#find').click(function() {
    let symptom = $('#symptom-checker').val();
    $('#symptom-checker').val("");

    let doctor = new Doctor();
    let promise = doctor.findDoctor(symptom);
    promise.then(function(response) {
      response = JSON.parse(response);
      getData(response);
      }), function(Error) {
      console.log("sorry, there is an error loading your requested information.");
      }
  });
});
