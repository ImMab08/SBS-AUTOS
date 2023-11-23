/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useRef, useState } from "react";

function Footer() {
    const [theme, setTheme] = useState(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'dark';
        }
    
        return 'light';
      })
      const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme ===  "light" ? "dark" : "light")
      }
    
      useEffect(() => {
        if (theme === "dark") {
          document.querySelector('html').classList.add("dark")
        } else {
          document.querySelector('html').classList.remove("dark")
        }
    }, [theme])

  return (
    <div  className=''>
        <footer className=" bg-gray-200 text-black dark:bg-black dark:text-white dark:border-t-[1px]">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0" >
                    {theme === "dark" ? (
                        <img src="img/logo-blanco.png" className="h-10 mr-3" alt="sbs Logo" />
                    ) : (
                        <img src="img/logo.png" className="h-10 mr-3" alt="sbs Logo" />
                    )}
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase ">Recursos</h2>
                        <ul className=" font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Inicio</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contactanos</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold  uppercase">Siguenos</h2>
                        <ul className=" font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline ">Instagram</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Facebook</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
                        <ul className=" font-medium">
                            <li className="">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 dark:border-[.4px] sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-400 dark:text-white sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">SBS AUTOS™</a>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer;