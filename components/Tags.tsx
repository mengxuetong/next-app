/*
 * @Author: 孟学桐 mengxuetong@bjy.powerchina.cn
 * @Date: 2024-10-15 21:10:50
 * @LastEditors: 孟学桐 mengxuetong@bjy.powerchina.cn
 * @LastEditTime: 2024-10-15 21:16:44
 * @FilePath: /test-app/components/Tags.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'

export default function Tags() {
  const tags = [
    {
        label: 'Monetization'
    },
    {
        label: 'Community'
    },
    {
        label: 'Growth'
    },
    {
        label: 'Tools'
    },
    {
        label: 'Automation'
    }
  ]
  return (
    <div className="flex flex-wrap justify-center space-x-4 mb-4">
        {tags.map(item => {
            return (
            <button key={item.label} className="border border-gray-500 text-white px-4 py-2 rounded-md mt-4">
                {item.label}
            </button>
      )
        })}
     </div>
  )
}
