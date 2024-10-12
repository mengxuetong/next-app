/*
 * @Author: 孟学桐 mengxuetong@bjy.powerchina.cn
 * @Date: 2024-09-19 22:51:20
 * @LastEditors: 孟学桐 mengxuetong@bjy.powerchina.cn
 * @LastEditTime: 2024-09-19 22:52:23
 * @FilePath: /test-app/app/about/errot.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client'
import { useEffect } from "react"
export default function Error({
    error,
    reset,
  }: {
    error: Error & { digest?: string }
    reset: () => void
  }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
      }, [error])

      return (
        <div>
          <h2>Something went wrong!</h2>
          <button
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try again
          </button>
        </div>
      )
}