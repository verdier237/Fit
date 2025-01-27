import React, { useEffect } from 'react'
import { Carousel , HR} from "flowbite-react";
import { Link } from 'react-router-dom/cjs/react-router-dom';
import image1 from '../assets/healthy-eating-ingredients-1296x728-header.jpg'
import image2 from '../assets/image1.jpg'
import image3 from '../assets/top-ten-foods-for-health-2x.webp'
import image4 from '../assets/were-food-for-health.jpg'
import fitAvatar from '../assets/FitAvatar.png'
import LeaAvatar from '../assets/FitAvatarness.png'
import PamelaAvatar from '../assets/FitAvatarAssis.png'
const Home = ({restartHeader}) => {
    
    useEffect(()=>{
        restartHeader()
        // eslint-disable-next-line
    },[])

  return (
    <div>

<HR/>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel>
                    <img src={image1}alt="..." />
                    <img src={image2} alt="..." />
                    <img src={image4} alt="..." />
                    <img src={image3} alt="..." />
                    <img src={image4} alt="..." />
                </Carousel>
            </div>
<section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">FIT: Your Personal Health and Wellness Guide</h1>
    </div>
</section>


<section class="bg-white dark:bg-gray-900 ">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h2 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Hello! I'm Fit, your personal chatbot.</h2>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Together, we'll discuss your food choices, explore your preferences, and identify areas where you can make improvements. My goal is to provide you with personalized recommendations to help you achieve your health and wellness goals. Whether you want to lose weight, maintain your current weight, or simply eat healthier, I'm here to support you every step of the way. Let's talk about your eating habits and start this journey toward better health together!</p>
            <Link class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900" to = '/fitchat'>
                Talk to me
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex ">
            <img src={fitAvatar} alt="mockup"/>
        </div>                
    </div>
</section>
<section class="bg-white dark:bg-gray-900">
    <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img class="w-full dark:hidden" src={LeaAvatar} alt="Lea" />
        <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Hello! I'm Lea, your personal generator here to help you create a meal plan tailored to your specific goals. </h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Whether you're aiming to lose weight, gain muscle, or simply maintain a balanced diet, I'm here to provide you with customized meal suggestions. We'll discuss your preferences and objectives, and I'll generate a meal plan that suits your lifestyle and nutritional needs. Let's work together to create a plan that helps you achieve your health and wellness goals!</p>
            <Link class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900" to='/recommandation'>
                Let's create a perfect plan for you
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
        </div>
    </div>
</section>

<section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h2 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Hello! I'm Pamela, your personal chatbot nurse.</h2>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Whenever you need assistance with minor health issues or want to know how to handle a first aid situation, I'm here to help. We'll discuss your symptoms, and I'll provide you with practical tips and guidance to ensure you're taking the right steps for your well-being. Let's work together to address your health concerns and ensure you have the information you need to take care of yourself!</p>
            <Link class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900" to = '/fitchat'>
                Click here for help 
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={PamelaAvatar} alt="mockup"/>
        </div>                
    </div>
</section>


    </div>

  )
}

export default Home