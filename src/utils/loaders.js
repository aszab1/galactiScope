export async function getPicOfDay(){
  const res = await fetch ('https://api.nasa.gov/planetary/apod?api_key=pW4NzGSYWgso3Cx1tqSsFRffDSMVUxF8y9yuaezz')
  return res.json()
}