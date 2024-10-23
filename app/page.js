import Link from "next/link";
import { SiCoffeescript } from "react-icons/si";
import Image from "next/image";
import YoutubeEmbed from "./components/YoutubeEmbed";

export default function Home() {
  return (
    <><main className="">
      <div className="flex h-[50vh] items-center justify-center bg-yellow-500 ">
        <div className="text-center justify-center">
            <span className="flex items-center justify-center gap-3 text-7xl font-fantasy mb-5">
              <h1>BUY ME A TEA</h1>
              <SiCoffeescript className="text-10xl" />
            </span>
          
          <h1 className="text-3xl  mb-5 font-fantasy">FUND ME BY BUYING ME A CHIYA</h1>
          <div className="flex gap-3 m-4 justify-center items-center">
            <Link href={"/login"}>
              <button className="bg-pink-800 to-purple-900 text-white p-3 rounded-md hover:bg-green-600 w-48">
                Sign Up
              </button>
            </Link>
            <Link href={"/about"}>
              <button className="bg-pink-800 to-purple-900 text-white p-3 rounded-md hover:bg-green-600 w-48">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>


      <div className="h-2 bg-red opacity-80 rounded-sm"></div>
      <div className="grid grid-cols-3 gap-5 mx-auto ">
        <div className="flex flex-col items-center ">
          <Image
            src="/images/coin.gif"
            alt="donate"
            width={250}
            height={250}
            className="mb-10 mt-10"
            unoptimized
          />
          <h1 className="text-4xl font-bold text-white">Donate</h1>
          <p className="text-center text-white">
            Help us to grow by contributing your valuable time and money.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/images/people.gif"
            alt="donate"
            width={190}
            height={190}
            className="mb-10 mt-10"
            unoptimized
          />
          <h1 className="text-4xl font-bold text-white">Contact us</h1>
          <p className="text-center text-white">
            Get in touch with us for any query or suggestion.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/images/community.gif"
            alt="donate"
            width={140}
            height={140}
            className="mb-10 mt-10"
            unoptimized
          />
          <h1 className="text-4xl font-bold text-white">Join us</h1>
          <p className="text-center text-white">
            Join our community to get involved in our activities and projects.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center my-5 h-auto">
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold mb-5 text-white">
            WELCOME MESSAGE
          </div>
          <div>
            <YoutubeEmbed />
          </div>
        </div>
      </div>
      </main>
    </>
  );
}
