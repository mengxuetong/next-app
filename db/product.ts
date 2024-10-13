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
const db = await JSONFilePreset('product.json', defaultData)
export default db