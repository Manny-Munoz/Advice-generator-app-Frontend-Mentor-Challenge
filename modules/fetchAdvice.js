import addText from "./changeText.js"

// DOM variables
const adviceId = document.getElementById("advice-number")
const adviceText = document.getElementById("advice-text")

// Advice Slip API
const url = "https://api.adviceslip.com/advice"


const fetchAdvice = async () => {
  // Cache: "no-cache added for firefox"
  try{
    const res = await fetch(url, {cache: "no-cache"} )
    const advice = await res.json()
    const {slip} = advice
    addText(adviceId, `#${slip.id}`)
    addText(adviceText, slip.advice)
  }catch(error){
    addText(adviceText, 'Oops, It seems that something went wrong, please try again later')
    addText(adviceId, '')
  }
}

export default fetchAdvice
