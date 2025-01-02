'use client'

import { ClerkLoaded, SignedIn, SignInButton, SignOutButton, UserButton, useUser } from "@clerk/nextjs"
import Link from "next/link"
import Form from "next/form"
import { TrolleyIcon } from "@sanity/icons"
function Header() {
  const createClerkPasskey = async () => {
    try{
      const response=await user?.createPasskey()
      console.log(response) ;
    }
    catch(error){
      console.error(error)
    }
  }
  const {user} = useUser()
  return <header className="flex flex-wrap justify-between items-center px-4 py-2 ">
    <div className="flex w-full flex-wrap justify-between items-center max-w-7xl mx-auto">
      <Link href="/" className="text-2xl font-bold text-blue-500 hover:opacity-45 cursor-pointer mx-auto sm:mx-0" > 

      Trend Cart
      </Link>
      <Form action="/search" className="w-full sm:flex-1 sm:mt-0 sm:w-auto mt-2 p-2 ">
        <input type="text"  name="query"  placeholder="Search for products" className=" bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border w-full max-w-4xl  " />
      </Form>
      <div className="flex  items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none ">
        <Link href="/basket" className=" w-36  flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"><TrolleyIcon className="w-6 h-6" ></TrolleyIcon><span>My Basket</span>
        </Link>
        <ClerkLoaded>
          <SignedIn>
              <Link href="/account" className="w-36  flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"><span>My Orders</span>
              </Link>
              </SignedIn>
          {
            user?(
            <div className="flex items-center space-x-2">
              <UserButton/>
              <div className="hidden sm:block text-xs">
                <p className="text-gray-400">Welcome Back</p>
                <p className="text-gray-800 font-bold">{user.fullName}!</p>
              </div>
              
            </div>):(
              <SignInButton mode="modal"/>
            )
          }

          {
            user?.
            passkeys.length===0 && (
              <button onClick={createClerkPasskey} className="bg-white hover:bg-blue-700 hover:text-white animate-pulse text-blue-500 font-bold py-2 px-4 rounded border-blue-300 border"><span>Create passkey</span>
              </button>
            )
          }

        </ClerkLoaded>
      </div>
    </div>
  </header>
}

export default Header 