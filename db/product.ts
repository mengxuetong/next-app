/*
 * @Author: 孟学桐 mengxuetong@bjy.powerchina.cn
 * @Date: 2024-10-13 11:15:26
 * @LastEditors: 孟学桐 mengxuetong@bjy.powerchina.cn
 * @LastEditTime: 2024-10-15 23:28:50
 * @FilePath: /test-app/db/product.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { JSONFilePreset } from 'lowdb/node'
export interface IProduct {
    id: string
    title: string
    desc?: string
    url?: string
}
type ProductListType = {
    list: IProduct[]
}
const defaultData: ProductListType = { list: []}
const db = await JSONFilePreset(`${process.env.TMP_DIR}/product.json`, defaultData)
export default db