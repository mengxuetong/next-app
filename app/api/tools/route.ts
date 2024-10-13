
import db from '@/db/product'
// 强制动态，不缓存
export const dynamic = 'force-dynamic' // defaults to auto
export async function GET() {
    // db.read()
    return new Response(JSON.stringify({ 
        code: 0,
        data: db.data,
        msg: 'success'
     }), {
        status: 200,
        headers: { 'Set-Cookie': `token=556677` }
     })
  }
export async function POST() {
const post = { id: Math.random().toString().slice(-8), title: 'Runway ML', desc: ' A creative suite that uses AI to help creators generate and edit videos with advanced tools.', url: 'runwayml.com' }
await db.update(({ list }) => list.push(post))
// return new Response(JSON.stringify({ 
//     code: 0,
//     data: db.data,
//     msg: 'success'
//     }), { status: 200})
return Response.json({ 
    code: 0,
    data: db.data,
    msg: 'success'
    })
}