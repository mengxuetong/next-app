/*
 * @Author: 孟学桐 mengxuetong@bjy.powerchina.cn
 * @Date: 2024-10-13 23:08:29
 * @LastEditors: 孟学桐 mengxuetong@bjy.powerchina.cn
 * @LastEditTime: 2024-10-15 21:22:00
 * @FilePath: /test-app/components/Submit.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client'
async function getList() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/tools`)
    const data = await res.json()
    return data
}
async function handleSub() {
    await getList()
}
export default function Submit() {
    return (
    <a className="bg-gray-800 text-white px-4 py-2 mx-8 rounded" href="#" onClick={() => handleSub()}>
      Subscribe
     </a>
    )
}