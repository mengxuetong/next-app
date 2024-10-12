/*
 * @Author: 孟学桐 mengxuetong@bjy.powerchina.cn
 * @Date: 2024-09-18 17:50:45
 * @LastEditors: 孟学桐 mengxuetong@bjy.powerchina.cn
 * @LastEditTime: 2024-09-18 17:51:51
 * @FilePath: /test-app/app/about/layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <section>
        home layout
        {children}
    </section>)
  }