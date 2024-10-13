 
export async function GET() {
  const res = await fetch('https://api.chucknorris.io/jokes/random', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()
 
  return Response.json({ data })
}