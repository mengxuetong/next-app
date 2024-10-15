/*
 * @Author: 孟学桐 mengxuetong@bjy.powerchina.cn
 * @Date: 2024-10-15 17:24:06
 * @LastEditors: 孟学桐 mengxuetong@bjy.powerchina.cn
 * @LastEditTime: 2024-10-15 21:04:15
 * @FilePath: /test-app/components/Menu.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client'
import { useState } from 'react'

function Menu() {
  const [showMenu, setShowMenu] = useState(false)
  const handleMenu = () => {
    setShowMenu((state) => {
        return !state
    })
  }
  return (
    <nav className="max-md:flex md:hidden">
      <div className="menu-toggle relative" onClick={handleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
      </div>
      {/* <ul className={`${showMenu ? 'flex' : 'hidden'} absolute w-[100%] bg-gray-600 text-gray-50`}>
            <li><a href="#">首页</a></li>
            <li><a href="#">关于</a></li>
            <li><a href="#">服务</a></li>
            <li><a href="#">联系</a></li>
        </ul> */}
    </nav>
  )
}

export default Menu