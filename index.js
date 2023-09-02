
const serviceID = "service_u50j5ho";
const templateID = "template_397imxp";

const profilePic = document.querySelector("#profilePic")
const author = document.querySelector("#author")
const content = document.querySelector("#content")
const speechBtn = document.querySelector("#speechBtn")
const generateBtn = document.querySelector("#generateBtn")
const unknownPP = "https://icon-library.com/images/unknown-person-icon/unknown-person-icon-4.jpg"

const getQuotesStore = JSON.parse(sessionStorage.getItem("quotesStore"))
if(getQuotesStore !== null){
  author.textContent = getQuotesStore.author
  content.textContent = getQuotesStore.content
  profilePic.src = getQuotesStore.image
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

const debounce = (fn, delay) => {
  let id;
  console.log(`id at immediate log: ${id}`)
  return(...args) => {
    console.log(`previous id: ${id}`);
    if(id) clearTimeout(id)
    id = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

const fetchQuote = () => {
  fetch("https://api.quotable.io/quotes/random")
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log(data);
        console.log(data[0].content)
        
        author.textContent = data[0].author
        content.textContent = data[0].content
        fetch("authors.json")
            .then(response => {
              return response.json()
            })
            .then(author => {
              Object.keys(author).forEach(authorData => {
                // console.log(authorData);
                if(authorData == data[0].author){
                  console.log(author[authorData]);
                  if(author[authorData].length == 1){
                    if(author[authorData][0].trim() != "") profilePic.src = author[authorData][0];
                    else profilePic.src = unknownPP;
                  }
                  else if(author[authorData].length >= 2){
                    const randomIdx = Math.floor(Math.random()*author[authorData].length)
                    console.log(randomIdx);
                    profilePic.src = author[authorData][randomIdx]
                  }
                }
              })
              profilePic.alt = data[0].author

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

              const objQuotes = {
                author: data[0].author,
                content: data[0].content,
                image: profilePic.getAttribute("src")
              }
              sessionStorage.setItem("quotesStore", JSON.stringify(objQuotes))
            })
            .catch(err => {
              console.log(err);
              profilePic.src = unknownPP

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

              const objQuotes = {
                author: data[0].author,
                content: data[0].content,
                image: profilePic.getAttribute("src")
              }
              sessionStorage.setItem("quotesStore", JSON.stringify(objQuotes))
            })

        const params = {
          name: "Bemdoo Maor",
          email: "bemdoo.maor1@gmail.com,",
          // message: document.querySelector("main p").getInnerHTML()
          message: data[0].content
        }

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
}

generateBtn.addEventListener("click", debounce(fetchQuote, 2000))

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
