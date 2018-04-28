class Doctor {
  constructor() {
  }

  findDoctor(userInput) {
    return new Promise(function(resolve, reject) {
      let doctorRequest = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${userInput}&location=45.523062%2C-122.676482%2C100&user_location=45.523062%2C-122.676482&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;

      doctorRequest.onload = function() {
        if (this.status === 200) {
          resolve(doctorRequest.response);
          console.log(resolve(doctorRequest.response));
        } else {
          reject(Error(doctorRequest.statusText));
        }
      }
      doctorRequest.open("GET", url, true);
      doctorRequest.send();
    });
  }

  findSpecificDoctor(userInput) {
    return new Promise(function(resolve, reject) {

    let locateDoctor = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${userInput}&location=45.523062%2C-122.676482%2C100&user_location=45.523062%2C-122.676482&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;

      locateDoctor.onload = function() {
        if (this.status === 200) {
          resolve(locateDoctor.response);
        } else {
          reject(Error(locateDoctor.statusText));
        }
      }
      locateDoctor.open("GET", url, true);
      locateDoctor.send();
    });
  }
}

    // promise.then(function(response) {
    //   let body = JSON.parse(response);



    //   $('#results').append("Call one of these doctors to help you" + "<br>" + body.data.name);
    //   // $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    // }, function(error) {
    //   $('#results').text(`There was an error processing your request: ${error.message}`);


export { Doctor };
