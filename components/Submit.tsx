'use client'
async function getList() {
    const res = await fetch(`http://localhost:3000/api/tools`)
    const data = await res.json()
    return data
}
async function handleSub() {
    await getList()
}
export default function Submit() {
    return (
    <a className="text-white mx-2" href="#" onClick={() => handleSub()}>
      Submit
     </a>
    )
}