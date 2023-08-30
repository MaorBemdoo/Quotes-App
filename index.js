
const serviceID = "service_u50j5ho";
const templateID = "template_397imxp";

const profilePic = document.querySelector("#profilePic")
const author = document.querySelector("#author")
const content = document.querySelector("#content")
const speechBtn = document.querySelector("#speechBtn")

fetch("https://api.quotable.io/quotes/random")
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log(data);
        console.log(data[0].content)
        
        author.textContent = data[0].author
        content.textContent = data[0].content

        const params = {
          name: "Bemdoo Maor",
          email: "bemdoo.maor1@gmail.com,",
          // message: document.querySelector("main p").getInnerHTML()
          message: data[0].content
        }

        const text = `${content.textContent} by ${author.textContent}`
        let utterance = new SpeechSynthesisUtterance(text);
        let fisrtTime = true
        utterance.onend = () => {
          speechBtn.classList.replace("bi-pause-circle", "bi-play-circle")
          fisrtTime = true
        }
        speechBtn.addEventListener("click", () => {
          // if(content.textContent !== ""){
          //   textToSpeech(text)
          // }
          if(speechBtn.classList.contains("bi-play-circle")){
            speechBtn.classList.replace("bi-play-circle", "bi-pause-circle")
            if(fisrtTime){
              speechSynthesis.speak(utterance)
            } else{
              speechSynthesis.resume()
            }
          } else{
            speechBtn.classList.replace("bi-pause-circle", "bi-play-circle")
            speechSynthesis.pause()
            fisrtTime = false
          }
        })

        // emailjs
        //   .send(serviceID, templateID, params)
        //   .then(res => {
        //     console.log(res);
        //     alert("Mail sent successfully🎉🎉🥳")
        //   })
        //   .catch(err => {
        //     alert(err)
        //   })
      })
      .catch(err => {
        console.log(err);
        content.textContent = err
        author.textContent = err

        const text = `${content.textContent} by ${author.textContent}`
        let utterance = new SpeechSynthesisUtterance(text);
        let fisrtTime = true
        utterance.onend = () => {
          speechBtn.classList.replace("bi-pause-circle", "bi-play-circle")
          fisrtTime = true
        }
        speechBtn.addEventListener("click", () => {
          // if(content.textContent !== ""){
          //   textToSpeech(text)
          // }
          if(speechBtn.classList.contains("bi-play-circle")){
            speechBtn.classList.replace("bi-play-circle", "bi-pause-circle")
            if(fisrtTime){
              speechSynthesis.speak(utterance)
            } else{
              speechSynthesis.resume()
            }
          } else{
            speechBtn.classList.replace("bi-pause-circle", "bi-play-circle")
            speechSynthesis.pause()
            fisrtTime = false
          }
        })
      })

// const text = `${content.textContent} by ${author.textContent}`

// const textToSpeech = (text) => {
//   let utterance = new SpeechSynthesisUtterance(text);
//   speechSynthesis.speak(utterance)
// }

// speechBtn.addEventListener("click", () => {
//   if(content.textContent !== ""){
//     textToSpeech(text)
//   }
// })
