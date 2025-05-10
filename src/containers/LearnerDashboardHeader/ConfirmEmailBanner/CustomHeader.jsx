/* eslint-disable max-len */
import React from 'react';

export const CustomHeader = () => {

  return (
    <header x-data="{menuOpen: false}"
            x-cloak
            className="w-full h-auto lg:h-[96px] bg-white py-4 shadow fixed z-50 border-b border-gray-100">
        <nav x-data="{activeLink: window.location.pathname}"
             className="w-full flex items-center justify-between space-x-6 px-4 md:px-8 lg:px-10 xl:px-20">
            <div className="w-full lg:w-auto flex items-center">
                <div className="w-full lg:w-auto flex items-center justify-between lg:justify-normal">
                    <a href="{{route('home')}}" className="h-10">
                        <img src="/asset/ask-logo.png" alt="Africa sea of knowledge logo" className="h-full object-cover bg-center"/>
                    </a>
                    {/*<button x-on:click="menuOpen = !menuOpen" className="inline lg:hidden">*/}
                    <button className="inline lg:hidden">
                        <img src="../asset/menu.svg" alt="" className="scale-95" />
                    </button>
                </div>
            </div>
            <div className="hidden lg:inline">
                <ul className="font-semibold text-base flex items-center font-public text-c73 transition-colors ease-in-out duration-300">
                    <li className="py-3 px-6 group">
                        <a href="{{route('home')}}" className="font-poppins text-base group-hover:text-primary {{ Route::is('home')? 'text-primary': '' }}">Home</a>
                    </li>
                    <li className="py-3 px-6 group">
                        <a href="{{route('about')}}" className="font-poppins text-base group-hover:text-primary {{ Route::is('about')? 'text-primary': '' }}">About
                        </a>
                    </li>
                    <li className="py-3 px-6 group">
                        <a href="{{route('courses')}}" className="font-poppins text-base group-hover:text-primary {{ Route::is('courses')? 'text-primary': '' }}">Courses</a>
                    </li>
                    <li className="py-3 px-6 group">
                        <a href="mailto:{{env('CONTACT_EMAIL')}}" className="font-poppins text-base group-hover:text-primary {{ Route::is('contact')? 'text-primary': '' }}">Contact</a>
                    </li>
                </ul>
            </div>

            <div className="hidden lg:inline">
                <div className="flex items-center">
                    <div className="">
                        <div>
                            <ul className="flex items-center space-x-4">
                                <li>
                                    <a href="{{env('LMS_URL')}}/login" target="_blank" className="text-c73 py-2 px-6 font-poppins text-base hover:text-primary">Log In</a>
                                </li>
                                <li>
                                    <a href="{{env('LMS_URL')}}/register" className="text-white bg-primary font-poppins text-base hover:bg-primary/90 py-2 px-6 rounded">Sign Up</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="hidden">
                        <div x-data="{showProfile: false}"
                             className="flex items-center space-x-4 relative py-3 px-6">
                            <div className="flex items-center space-x-3">
                                <div>
                                    <div className="w-10 h-10 rounded-full overflow-hidden">
                                        <img src="/asset/dp.png" alt="user profile page" className="w-full h-full rounded-full object-cover bg-center"/>
                                    </div>
                                </div>
                                <span className="font-medium font-public-san text-dim-black">Korede</span>
                            </div>
                            {/*<button x-on:click="showProfile = !showProfile" className="flex">*/}
                            <button className="flex">
                  <span x-show="!showProfile" className="material-symbols-outlined rotate-90 text-primary">chevron_right</span>
                                <span x-show="showProfile"
                                      className="material-symbols-outlined -rotate-90 text-primary">chevron_right</span>
                            </button>

                            <div x-show="showProfile"
                            x-transition
                            className="bg-[#FCFCFC] transition-transform ease-in duration-500 drop-shadow border border-[#dbdbdb] rounded-lg shadow-sm absolute w-full p-5 top-16 left-0">
                            <ul className="space-y-3 text-c0D">
                                <li>
                                    <a href="dashboard.html" className="p-2 flex items-center space-x-2 w-full bg-transparent rounded hover:bg-main">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             width="24"
                                             height="24"
                                             viewBox="0 0 24 24"
                                             className="text-primary">
                                            <path
                                                fill="currentColor"
                                                fill-rule="evenodd"
                                                d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13zm10 0A1.857 1.857 0 0 0 13 14.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 19.143v-4.286A1.857 1.857 0 0 0 19.143 13z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                        <span>Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="profile.html"
                                       className="p-2 flex items-center space-x-2 w-full bg-transparent rounded hover:bg-main">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            className="text-primary">
                                            <path
                                                fill="currentColor"
                                                d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
                                            />
                                        </svg>
                                        <span>Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="certificate.html" className="p-2 flex items-center space-x-2 w-full bg-transparent rounded hover:bg-main">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                d="m13 21l2-1l2 1v-7h-4m4-5V7l-2 1l-2-1v2l-2 1l2 1v2l2-1l2 1v-2l2-1m1-7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7v-2H4V5h16v10h-1v2h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 5H5V6h6m-2 5H5V9h4m2 5H5v-2h6Z"/>
                                        </svg>
                                        <span>Certificate</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="account.html"
                                       className="p-2 flex items-center space-x-2 w-full bg-transparent rounded hover:bg-main">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="text-primary"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24">
                                            <g fill="none" fill-rule="evenodd">
                                                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
                                                <path fill="currentColor"
                                                    d="M18 4a1 1 0 1 0-2 0v1H4a1 1 0 0 0 0 2h12v1a1 1 0 1 0 2 0V7h2a1 1 0 1 0 0-2h-2zM4 11a1 1 0 1 0 0 2h2v1a1 1 0 1 0 2 0v-1h12a1 1 0 1 0 0-2H8v-1a1 1 0 0 0-2 0v1zm-1 7a1 1 0 0 1 1-1h12v-1a1 1 0 1 1 2 0v1h2a1 1 0 1 1 0 2h-2v1a1 1 0 1 1-2 0v-1H4a1 1 0 0 1-1-1"/>
                                            </g>
                                        </svg>
                                        <span>Account</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <div>
        <div
            className="w-full absolute top-10 bg-y text-white z-50 lg:hidden transition-transform ease-in duration-500">
        <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 rtl:space-x-reverse">
            <li>
                <a href="{{route('home')}}"
                   className="block py-2 px-3 text-white bg-primary rounded-sm"
                   aria-current="page">Home</a>
            </li>
            <li>
                <a href="{{route('about')}}"
                   className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100">About</a>
            </li>
            <li>
                <a href="{{route('courses')}}"
                   className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100">Courses</a>
            </li>
            <li>
                <a href="{{env('LMS_URL')}}/login"
                   className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100">Sign In</a>
            </li>
            <li>
                <a href="{{env('LMS_URL')}}/register" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100">Sign Up</a>
            </li>
        </ul>
    </div>
    </div>
</header>
  );
};

export default CustomHeader;
