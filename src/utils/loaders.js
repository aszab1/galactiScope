import axios from 'axios'

export async function getPicOfDay(){
  const res = await fetch ('https://api.nasa.gov/planetary/apod?api_key=pW4NzGSYWgso3Cx1tqSsFRffDSMVUxF8y9yuaezz')
  return res.json()
}

export async function getRandomPictures() {
  const response = await fetch ('https://api.nasa.gov/planetary/apod?api_key=pW4NzGSYWgso3Cx1tqSsFRffDSMVUxF8y9yuaezz&count=20')
  return response.json()
}

export async function getSinglePicture(date) {
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=pW4NzGSYWgso3Cx1tqSsFRffDSMVUxF8y9yuaezz&date${date}`)
  return response.json()
}