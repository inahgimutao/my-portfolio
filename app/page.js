"use client";

import {BsFillMoonStarsFill} from "react-icons/bs"
import { useState } from "react"
import {AiFillGithub, AiFillLinkedin, AiFillFacebook} from "react-icons/ai"
import Image from "next/image"
import Link from "next/link";
import inah from "../public/avatar.png"
import code from "../public/code.png"
import design from "../public/design.png"
import consulting from "../public/consulting.png"
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png"

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  const year = new Date().getFullYear();

  function darkModeTemp() {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? "dark" : ""}>
    <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
      <section className="min-h-screen">
        
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl dark:text-white">inahgimutao</h1>
          <ul className="flex items-center">
            <li><BsFillMoonStarsFill onClick={() => darkModeTemp()} className="cursor-pointer text-2xl dark:text-white"/></li>
            <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
          </ul>
        </nav>

        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">Regina Gimutao</h2>
          <h3 className="text-2xl py-2 dark:text-white">Junior Software Developer</h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">I&apos;m a developer exploring javascript libraries like ReactJS and NextJS and CSS frameworks like TailwindCSS and Shadcn/ui.</p>
        </div>

        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <Link className="hover:text-black" href="https://github.com/inahgimutao">
            <AiFillGithub />
          </Link>
          <Link className="hover:text-black" href="http://www.linkedin.com/in/regina-gimutao-676a94137">
            <AiFillLinkedin />
          </Link>
          <Link className="hover:text-black" href="https://www.facebook.com/Im.Regina.Gimutao">
            <AiFillFacebook />
          </Link>
        </div>

        <div className="relative mx-auto rounded-full w-80 h-80 mt-20 overflow-hidden">
          <Image src={inah} alt={inah} priority fill/>
        </div>

      </section>

      <section>
        <div>
              <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Since the beginning of my journey as a developer, I&apos;ve done remote/work from home setup for
                <span className="text-teal-500"> MSPI </span>
                and it&apos;s <span className="text-teal-500">Clients </span>
                , offering/supporting Data Management, Data Cleansing, Automation and others.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                I offer technical support, including photoshop design, and software installations.
              </p>
        </div>

        <div className="lg:flex gap-10">

              <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                <Image src={design} width={100} height={100} alt={design} />
                <h3 className="text-lg font-medium pt-8 pb-2  ">
                  Responsive Web Page
                </h3>
                <p className="py-2">
                  I use javascript libraries to create responsive web pages.
                </p>
                <h4 className="py-4 text-teal-600">Javascript libraries I use</h4>
                <p className="text-gray-800 py-1">ReactJS</p>
                <p className="text-gray-800 py-1">NextJS</p>
                <p className="text-gray-800 py-1">Typescript</p>
                <p className="text-gray-800 py-1">TailwindCSS</p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <Image src={code} width={100} height={100} alt={code} />
                <h3 className="text-lg font-medium pt-8 pb-2 ">
                  Programming Languages and API
                </h3>
                <p className="py-2">
                  As a developer, I explore different programming languages to become full-stack developer.
                </p>
                <h4 className="py-4 text-teal-600">Programming Languages and API that I use</h4>
                <p className="text-gray-800 py-1">C#</p>
                <p className="text-gray-800 py-1">Javascript</p>
                <p className="text-gray-800 py-1">ASP.Net</p>
                <p className="text-gray-800 py-1">REST API</p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <Image src={consulting} width={100} height={100} alt={consulting} />
                <h3 className="text-lg font-medium pt-8 pb-2 ">Add/Follow</h3>
                <p className="py-2">
                  Are you interested in my projects? Kindly add/follow me on social media.
                </p>
                <h4 className="py-4 text-teal-600">Social Medias</h4>
                <Link className="hover:text-black" href="https://github.com/inahgimutao">
                    <p className="text-gray-800 hover:text-teal-500 py-1">Github</p>
                </Link>
                <Link className="hover:text-black" href="http://www.linkedin.com/in/regina-gimutao-676a94137">
                  <p className="text-gray-800 hover:text-teal-500 py-1">Linkedin</p>
                </Link>
                <Link className="hover:text-black" href="https://www.facebook.com/Im.Regina.Gimutao">
                   <p className="text-gray-800 hover:text-teal-500 py-1">Facebook</p>
                </Link>
                <Link className="hover:text-black" href="https://www.instagram.com/inahgimutao">
                  <p className="text-gray-800 hover:text-teal-500 py-1">Instagram</p>
                </Link>
              </div>

          </div>
      </section>

      <section className="py-10">
          <div>
                <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Here&apos;s my project using javascript libraries like
                <span className="text-teal-500"> ReactJS </span>
                ,<span className="text-teal-500"> NextJS </span>
                ,<span className="text-teal-500"> Typescript </span>
                and<span className="text-teal-500"> TailwindCSS </span>, 
                <span className="text-teal-500"> Shadcn/ui </span> for styling my projects.
              </p>
          </div>

          <div className="relative mx-auto flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1 ">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  src={web1}
                  alt={web1}
                />
              </div>
              <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web2}
                alt={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web3}
                alt={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web4}
                alt={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web5}
                alt={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web6}
                alt={web6}
              />
            </div>
          </div>
      </section>

      <section className="py-10">
          <footer className="dark:text-white">Regina Gimutao &copy; {year}</footer>
      </section>

    </main>
    </div>
  )
}
