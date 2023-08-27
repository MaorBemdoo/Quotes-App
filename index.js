
fetch("https://type.fit/api/quotes")
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          // console.log(data);
          console.log(data[0].text)
          data[0].text
        })
        .catch(err => {
          console.log(err);
        })

const params = {
  name: "Bemdoo Maor",
  email: "bemdoo.maor1@gmail.com,",
  message: "Hey"
}

const serviceID = "service_u50j5ho";
const templateID = "template_397imxp";

emailjs
  .send(serviceID, templateID, params)
  .then(res => {
    console.log(res);
    alert("Mail sent successfully🎉🎉🥳")
  })
  .catch(err => {
    alert(err)
  })
