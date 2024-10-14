/*
 * @Author: 孟学桐 mengxuetong@bjy.powerchina.cn
 * @Date: 2024-10-13 13:49:15
 * @LastEditors: 孟学桐 mengxuetong@bjy.powerchina.cn
 * @LastEditTime: 2024-10-14 22:04:24
 * @FilePath: /test-app/app/api/tools/route.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import db from '@/db/product'
// 强制动态，不缓存
// export const dynamic = 'force-dynamic' // defaults to auto
export async function GET() {
    db.read()
    return new Response(JSON.stringify({ 
        code: 0,
        data: db.data,
        msg: 'success'
     }), {
        status: 200,
        headers: { 
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
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