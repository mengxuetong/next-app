
import { redirect } from "next/navigation";
import Image from "next/image";
import { IProduct } from '@/db/product'
// import Link from "next/link"
// import { useRouter } from "next/navigation";
import Submit from '@/components/Submit'

export const dynamic = 'force-dynamic' // defaults to auto
export const revalidate = 100 //5s后如果有请求，则重新生成该页面
async function getList() {
  const res = await fetch(`/api/tools`)
  const data = await res.json()
  return data
}
export default async function Home({ searchParams }: {searchParams: {toPage: string}} ) {
  const data = await getList()
  const { data: {list}} = data
  // const router = useRouter()
  if (searchParams.toPage === 'about') {
    redirect('/about')
  }
  if (!data) {
    return `no data yet`
  }
  return (
    <div className="container mx-auto px-4 w-[1218px]">
   <header className="flex justify-between items-center py-4">
    <div className="flex items-center">
    <Image alt="Logo" className="mr-2" width={40} height={40}  src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-UEfazH47pUH8uT5L67RtwMPB/user-tVR4rHUU0ssYhVqAvG6DjDDc/img-z9tcWOfjB8eAwO1xiCEwlrAe.png?st=2024-10-12T13%3A48%3A11Z&amp;se=2024-10-12T15%3A48%3A11Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-10-11T23%3A07%3A29Z&amp;ske=2024-10-12T23%3A07%3A29Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=dgAUejPPA/vIcMtT7XCXE1hSZ%2Br065SUPsvOYgdOwR0%3D"/>
     <h1 className="text-xl font-bold">
      MuseIn Tools
     </h1>
    </div>
    {/* pc navigator */}
    <nav className="flex items-center">
     <a className="text-white mx-2" href="#">
      Discover
     </a>
     <Submit />
     <a className="text-white mx-2" href="#">
      Log in
     </a>
     <button className="bg-blue-500 text-white px-4 py-2 rounded">
      Sign up
     </button>
    </nav>
    {/* mobile navigator */}
    {/* <nav>
      <div className="menu-toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
      </div>
      <ul className="nav-list" id="nav-list">
            <li><a href="#">首页</a></li>
            <li><a href="#">关于</a></li>
            <li><a href="#">服务</a></li>
            <li><a href="#">联系</a></li>
        </ul>
    </nav> */}
   </header>
   <main>
    <section className="text-center my-8">
     <h2 className="text-3xl font-bold">
      Discover the best MuseIn Tools and their alternatives
     </h2>
    </section>
    <section>
     <div className="flex justify-center space-x-4 mb-4">
      <button className="bg-gray-800 text-white px-4 py-2 rounded">
       Monetization
      </button>
      <button className="bg-gray-800 text-white px-4 py-2 rounded">
       Community
      </button>
      <button className="bg-gray-800 text-white px-4 py-2 rounded">
       Growth
      </button>
      <button className="bg-gray-800 text-white px-4 py-2 rounded">
       Tools
      </button>
      <button className="bg-gray-800 text-white px-4 py-2 rounded">
       Automation
      </button>
     </div>
     <div>
      <h3 className="section-title">
       Monetization
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {list?.map((product: IProduct) => {
          return (
            <div className="card" key={product.id}>
            <Image  alt="Patreon logo"  src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-UEfazH47pUH8uT5L67RtwMPB/user-tVR4rHUU0ssYhVqAvG6DjDDc/img-CcLSiKvU4ycJw6AhWilwJFoK.png?st=2024-10-12T13%3A48%3A08Z&amp;se=2024-10-12T15%3A48%3A08Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-10-11T23%3A09%3A33Z&amp;ske=2024-10-12T23%3A09%3A33Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=iS4ToiNJRyvlV8pbWZszTWgmgk7P2A1Qrj0qUQjJJds%3D" width="40" height="40" />
            <div>
            <h3>
              {product.title}
            </h3>
            <p>
              {product.desc}
            </p>
            </div>
       </div>
          )
        })}
       {/* <div className="card">
        <Image  alt="Patreon logo"  src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-UEfazH47pUH8uT5L67RtwMPB/user-tVR4rHUU0ssYhVqAvG6DjDDc/img-CcLSiKvU4ycJw6AhWilwJFoK.png?st=2024-10-12T13%3A48%3A08Z&amp;se=2024-10-12T15%3A48%3A08Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-10-11T23%3A09%3A33Z&amp;ske=2024-10-12T23%3A09%3A33Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=iS4ToiNJRyvlV8pbWZszTWgmgk7P2A1Qrj0qUQjJJds%3D" width="40" height="40" />
        <div>
         <h3>
          Patreon
         </h3>
         <p>
          Monetize your audience with memberships.
         </p>
        </div>
       </div>
       <div className="card">
       <Image  alt="Ko-fi logo"  src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-UEfazH47pUH8uT5L67RtwMPB/user-tVR4rHUU0ssYhVqAvG6DjDDc/img-aS2BD6BCz8gsKJxUrBM16zpO.png?st=2024-10-12T13%3A48%3A07Z&amp;se=2024-10-12T15%3A48%3A07Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-10-11T22%3A50%3A43Z&amp;ske=2024-10-12T22%3A50%3A43Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=fVn8cYIw57kN9qlSaoDE0t3bcH4srBWJnFUJ6JUYl2c%3D" width="40" height="40"/>
        <div>
         <h3>
          Ko-fi
         </h3>
         <p>
          Receive donations and offer commissions.
         </p>
        </div>
       </div>
       <div className="card">
       <Image  alt="Buy Me a Coffee logo"  src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-UEfazH47pUH8uT5L67RtwMPB/user-tVR4rHUU0ssYhVqAvG6DjDDc/img-gwKYnxoNsKd6gTWAUfrzos4U.png?st=2024-10-12T13%3A48%3A06Z&amp;se=2024-10-12T15%3A48%3A06Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-10-11T23%3A10%3A33Z&amp;ske=2024-10-12T23%3A10%3A33Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=JN8tQSU36AShFOqAopGeDy5KMvUQ8c/laqb8leGdmgI%3D" width="40" height="40" />
        <div>
         <h3>
          Buy Me a Coffee
         </h3>
         <p>
          Support creators with one-time donations.
         </p>
        </div>
       </div> */}
      </div>
     </div>
     <div>
      <h3 className="section-title">
       Automation
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
       <div className="card">
       <Image  alt="Zapier logo"  src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-UEfazH47pUH8uT5L67RtwMPB/user-tVR4rHUU0ssYhVqAvG6DjDDc/img-mOs5P85r0ECay2Aa2fGCbzbc.png?st=2024-10-12T13%3A48%3A07Z&amp;se=2024-10-12T15%3A48%3A07Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-10-11T22%3A52%3A40Z&amp;ske=2024-10-12T22%3A52%3A40Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=6EFhB0P9t7R4WJ%2BlIAoXIvmwLWeFn38yiT21d8GuejA%3D" width="40" height="40" />
        <div>
         <h3>
          Zapier
         </h3>
         <p>
          Automate workflows by connecting apps.
         </p>
        </div>
       </div>
       <div className="card">
       <Image  alt="IFTTT logo" width={40} height={40}  src="https://placehold.co/40x40"/>
        <div>
         <h3>
          IFTTT
         </h3>
         <p>
          Create automated tasks with applets.
         </p>
        </div>
       </div>
       <div className="card">
       <Image  alt="Integromat logo" width={40} height={40}  src="https://placehold.co/40x40"/>
        <div>
         <h3>
          Integromat
         </h3>
         <p>
          Automate complex workflows with ease.
         </p>
        </div>
       </div>
      </div>
     </div>
     <div>
      <h3 className="section-title">
       Essentials
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
       <div className="card">
       <Image  alt="Google Analytics logo" width={40} height={40} src="https://placehold.co/40x40"/>
        <div>
         <h3>
          Google Analytics
         </h3>
         <p>
          Track and analyze website traffic.
         </p>
        </div>
       </div>
       <div className="card">
       <Image  alt="Canva logo" width={40} height={40} src="https://placehold.co/40x40"/>
        <div>
         <h3>
          Canva
         </h3>
         <p>
          Create stunning graphics and designs.
         </p>
        </div>
       </div>
       <div className="card">
       <Image  alt="Notion logo" width={40} height={40} src="https://placehold.co/40x40"/>
        <div>
         <h3>
          Notion
         </h3>
         <p>
          All-in-one workspace for notes and tasks.
         </p>
        </div>
       </div>
      </div>
     </div>
     <div>
      <h3 className="section-title">
       {`Starter's Pack`}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
       <div className="card">
       <Image  alt="Slack logo" width={40} height={40} src="https://placehold.co/40x40"/>
        <div>
         <h3>
          Slack
         </h3>
         <p>
          Team communication and collaboration.
         </p>
        </div>
       </div>
       <div className="card">
       <Image  alt="Trello logo" width={40} height={40} src="https://placehold.co/40x40"/>
        <div>
         <h3>
          Trello
         </h3>
         <p>
          Organize tasks and projects visually.
         </p>
        </div>
       </div>
       <div className="card">
       <Image   alt="Zoom logo" width={40} height={40} src="https://placehold.co/40x40"/>
        <div>
         <h3>
          Zoom
         </h3>
         <p>
          Video conferencing and online meetings.
         </p>
        </div>
       </div>
      </div>
     </div>
    </section>
    <section className="text-center">
     <div className="submit-button">
      <i className="fas fa-plus text-2xl">
      </i>
     </div>
     <p>
      Submit your favourite tool
     </p>
     <p>
      {`Have a great tool? Let us know and we'll add it to the list.`}
     </p>
     <button className="bg-blue-500 text-white px-4 py-2 rounded">
      Submit
     </button>
    </section>
   </main>
   <footer className="text-center py-4">
    <p>
     © 2023 MuseIn Tools
    </p>
   </footer>
  </div>
  );
}
