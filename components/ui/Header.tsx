'use client'

import { useUser } from "@clerk/nextjs"
import Link from "next/link"
import Form from "next/form"
import { TrolleyIcon } from "@sanity/icons"
function Header() {
  const {user} = useUser()
  return <header className="flex flex-wrap justify-between items-center px-4 py-2 ">
    <div>
      <Link href="/" className="text-2xl font-bold text-blue-500 hover:opacity-45 cursor-pointer mx-auto sm:mx-0" > 

      Trend Cart
      </Link>
      <Form action="/search" className="w-full sm:flex-1 sm:mt-0 sm:w-auto mt-2 ">
        <input type="text"  name="query"  placeholder="Search for products" className=" bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border w-full max-w-4xl  " />
      </Form>
      <div>
        <Link href="/basket" className=" w-36  flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"><TrolleyIcon className="w-6 h-6" ></TrolleyIcon><span>My Basket</span>
        </Link>
      </div>
    </div>
  </header>
}

export default Header 