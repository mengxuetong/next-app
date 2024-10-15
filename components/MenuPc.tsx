/*
 * @Author: 孟学桐 mengxuetong@bjy.powerchina.cn
 * @Date: 2024-10-15 18:06:39
 * @LastEditors: 孟学桐 mengxuetong@bjy.powerchina.cn
 * @LastEditTime: 2024-10-15 21:21:45
 * @FilePath: /test-app/components/NavPc.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import Subscribe from '@/components/Subscribe'

export default function NavPc() {
  return (
    <nav className="max-md:hidden md:flex justify-start items-center">
     <a className="text-white mx-8 font-bold" href="#">
      Tools
     </a>
     <a className="text-white mx-8 font-bold" href="#">
      About Us
     </a>
     <Subscribe />
    </nav>
  )
}
