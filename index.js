
fetch("https://api.quotable.io/quotes/random")
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log(data);
        console.log(data[0].content)
        document.querySelector("main p").innerHTML = data[0].content
        // params.message = data[0].content
        const params = {
          name: "Bemdoo Maor",
          email: "bemdoo.maor1@gmail.com,",
          // message: document.querySelector("main p").getInnerHTML()
          message: data[0].content
        }
        console.log(params.message);

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
      })
      .catch(err => {
        console.log(err);
      })
