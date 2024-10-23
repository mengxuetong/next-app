
import { redirect } from "next/navigation";
import Image from "next/image";
import { IProduct } from '@/db/product'
// import Link from "next/link"
// import { useRouter } from "next/navigation";
import Menu from '@/components/Menu';
import MenuPc from "@/components/MenuPc";
import Subscribe from '@/components/Subscribe'
import Tags from '@/components/Tags'

// export const dynamic = 'force-dynamic' // defaults to auto
export const revalidate = 2 * 60 // 则重新生成该页面
async function getList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/tools`)
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
    <div className="mx-auto px-1 lg:px-4">
   <header className="w-full box-border flex justify-between items-center max-lg:ml-2 lg:ml-8 lg:mr-32 py-4">
    <div className="flex items-center">
    <Image alt="Logo" className="mr-2" width={40} height={40}  src="https://b0.bdstatic.com/95ba098f212409a664620726d8ade001.jpg@h_1280" />
     <h1 className="text-xl font-bold">
      {process.env.NEXT_PUBLIC_APP_NAME}
     </h1>
    </div>
    {/* pc navigator */}
    <MenuPc />
    {/* mobile navigator */}
    <Menu />
   </header>
   <main className="mx-auto lg:w-[1216px]">
    <section className="text-center my-8">
     <h2 className="text-3xl font-bold">
      Discover the best MuseIn Tools and their alternatives
     </h2>
    </section>
    <section>
     <Tags />
     <div>
      <h3 className="section-title">
       Monetization
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {list?.map((product: IProduct) => {
          return (
            <div className="card" key={product.id}>
            <Image alt="Patreon logo"  src="https://b0.bdstatic.com/95ba098f212409a664620726d8ade001.jpg@h_1280" width="40" height="40" />
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
        <img  alt="Patreon logo"  src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-UEfazH47pUH8uT5L67RtwMPB/user-tVR4rHUU0ssYhVqAvG6DjDDc/img-CcLSiKvU4ycJw6AhWilwJFoK.png?st=2024-10-12T13%3A48%3A08Z&amp;se=2024-10-12T15%3A48%3A08Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-10-11T23%3A09%3A33Z&amp;ske=2024-10-12T23%3A09%3A33Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=iS4ToiNJRyvlV8pbWZszTWgmgk7P2A1Qrj0qUQjJJds%3D" width="40" height="40" />
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
       <img  alt="Ko-fi logo"  src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-UEfazH47pUH8uT5L67RtwMPB/user-tVR4rHUU0ssYhVqAvG6DjDDc/img-aS2BD6BCz8gsKJxUrBM16zpO.png?st=2024-10-12T13%3A48%3A07Z&amp;se=2024-10-12T15%3A48%3A07Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-10-11T22%3A50%3A43Z&amp;ske=2024-10-12T22%3A50%3A43Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=fVn8cYIw57kN9qlSaoDE0t3bcH4srBWJnFUJ6JUYl2c%3D" width="40" height="40"/>
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
       <img  alt="Buy Me a Coffee logo"  src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-UEfazH47pUH8uT5L67RtwMPB/user-tVR4rHUU0ssYhVqAvG6DjDDc/img-gwKYnxoNsKd6gTWAUfrzos4U.png?st=2024-10-12T13%3A48%3A06Z&amp;se=2024-10-12T15%3A48%3A06Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-10-11T23%3A10%3A33Z&amp;ske=2024-10-12T23%3A10%3A33Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=JN8tQSU36AShFOqAopGeDy5KMvUQ8c/laqb8leGdmgI%3D" width="40" height="40" />
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
       <Image alt="Zapier logo"  src="https://b0.bdstatic.com/95ba098f212409a664620726d8ade001.jpg@h_1280" width="40" height="40" />
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
       <img  alt="IFTTT logo" width={40} height={40}  src="https://placehold.co/40x40"/>
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
       <img  alt="Integromat logo" width={40} height={40}  src="https://placehold.co/40x40"/>
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
       <img  alt="Google Analytics logo" width={40} height={40} src="https://placehold.co/40x40"/>
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
       <img  alt="Canva logo" width={40} height={40} src="https://placehold.co/40x40"/>
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
       <img  alt="Notion logo" width={40} height={40} src="https://placehold.co/40x40"/>
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
       <img  alt="Slack logo" width={40} height={40} src="https://placehold.co/40x40"/>
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
       <img  alt="Trello logo" width={40} height={40} src="https://placehold.co/40x40"/>
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
       <img   alt="Zoom logo" width={40} height={40} src="https://placehold.co/40x40"/>
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
    <section className="text-center mt-8">
     <div className="Subscribe-button">
      <i className="fas fa-plus text-2xl"></i>
     </div>
     <p>
      Subscribe your favourite tool
     </p>
     <p>
      {`Have a great tool? Let us know and we'll add it to the list.`}
     </p>
     <div className="mt-4">
      <Subscribe />
     </div>
    </section>
   </main>
   <footer className="text-center py-4 mt-8">
    <p>
     © 2023 {process.env.NEXT_PUBLIC_APP_NAME}
    </p>
   </footer>
  </div>
  );
}
