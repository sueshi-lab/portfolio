import React from 'react';
import ProfileImage from '../Asset/profile.jpg';
export default function AboutMe() {
    return (
        <div id="aboutme" className="flex h-screen text-left">
            <div className='m-auto text-lg px-8 max-w-4xl grid grid-flow-row-dense md:grid-cols-4'>
                <img className='max-w-sm w-full bg-cover object-cover md:h-full md:w-48 h-72 mb-6 rounded-lg' src={ProfileImage} />
                <div className='m-auto md:col-span-3 md:p-7'>
                    <p className='text-2xl font-medium uppercase'>Hi, everyone! 🙌</p>
                    <p className='mt-4'>My name is Phanpaporn Zheng. I'm studying at KMUTT and expect to graduate in June 2022.
                        I'm seeking opportunities to learn and practice web development as a Developer.</p>

                    <p className='mt-4'>Currently, I'm especially interested in Tailwind CSS, NestJS, and MongoDB.
                        And this portfolio is the 1st time that I use Tailwind to build an interface!
                        So I hope you have a good experience with my portfolio.</p>

                    <p className='mt-4'>Thanks for reading!</p>
                </div>
            </div>
        </div>
    );
}
