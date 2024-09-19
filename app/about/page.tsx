/*
 * @Author: 孟学桐 mengxuetong@bjy.powerchina.cn
 * @Date: 2024-09-18 17:41:59
 * @LastEditors: 孟学桐 mengxuetong@bjy.powerchina.cn
 * @LastEditTime: 2024-09-19 17:21:56
 * @FilePath: /test-app/app/home/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Metadata } from 'next'
interface IProps {
    params: { id: string },
    searchParams: { [key: string]: string | string[] | undefined }
}
export default function About(props: IProps) {
    return (
        <div>about page{JSON.stringify(props)}
            
        </div>
    )
}
 
// either Static metadata
export const metadata: Metadata = {
    title: 'static about page title',
    keywords: 'static about page keywords',
    description: 'static about page description'
}
 
// or Dynamic metadata
// export async function generateMetadata({ params }) {
    // to do some fetch to config data
//   return {
//     title: 'about page title',
//     keywords: 'about page keywords',
//     description: 'about page description'
//   }
// }