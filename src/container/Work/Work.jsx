import React from "react";
import "./Work.css";
import trumatch from "../../assets/trumath.png";
import filmore from "../../assets/filmore.png";
import fairphone from "../../assets/fairphone.png";
import ticketswap from "../../assets/ticketswap.png";
import zivver from "../../assets/zivver.png";


const Work = () => {
  return (
    <div className="pt-20">
      <h2 className="head-text">
        Our Creative <span>Portfolio</span>
      </h2>

      <div className="portfolio min-h-screen w-full mt-10">
        {/* card 1 */}
        <div className="portfolio_card flex flex-col md:flex-row items-center p-10 my-10 bg-gradient-to-r from-orange-500 to-white">
          <div className="portfolio_card_content md:w-1/2 order-2 md:order-1">
            <h1 className="text-4xl uppercase font-bold text-white dark:text-white mb-4 md:mb-6">
              TRUMATH
            </h1>
            <p className="text-xs mb-4 md:mb-6 text-white dark:text-white">
              TruMath is a Hybrid Mobile Application for EduTech Industry with
              10,000+ active users and scaling up quickly. This eLearning
              solution has been designed especially for the secondary and higher
              secondary students providing them training on mathematics tactics
              for IIT JEE exams. The user-friendly UI of the app allows its
              users to learn remotely and get access to online video lectures,
              participate in Quiz and Olympiads, share video tutorials. This app
              simplifies the process of uploading video lectures, assessing
              students, skill monitoring for admin.
            </p>
            <button
              type="button"
              className="text-white  font-medium rounded-lg border-white text-sm px-5 py-2.5 text-center"
            >
              View Site
            </button>
          </div>
          <div className="portfolio_card_img md:w-full mb-8 md:mb-0 md:mr-8 md:w-1/2 order-1 md:order-2">
            <img className="w-full h-auto" src={trumatch} alt="" />
          </div>
        </div>
        {/* card 2 */}

        <div className="portfolio_card flex flex-col md:flex-row items-center p-10 my-10 bg-gradient-to-r from-indigo-700 to-white">
          <div className="portfolio_card_content md:w-1/2 order-2 md:order-1">
            <h1 className="text-4xl font-bold uppercase text-white dark:text-white mb-4 md:mb-6">
              Finadore
            </h1>
            <p className="text-xs mb-4 md:mb-6 text-white dark:text-white">
            A platform for trade of mutual funds, with a focus on delightful user experience. It is a digital market where users can sell and buy SIP's. This platform acts as an intermediary between the customer and financial advisory services. The platform was created keeping in mind the need for speed, safety and reliability. It offers features like detailed history analysis of the most profitable funds and a SIP calculator as per market trends. It has simplified the process of investing online as well as offline in equity and debt funds as per short and long term requirements.
            </p>
            <button
              type="button"
              className="text-white  font-medium rounded-lg border-white text-sm px-5 py-2.5 text-center"
            >
              View Site
            </button>
          </div>
          <div className="portfolio_card_img md:w-full mb-8 md:mb-0 md:mr-8 md:w-1/2 order-1 md:order-2">
            <img className="w-full h-auto" src={filmore} alt="" />
          </div>
        </div>

        <div className="portfolio_card flex flex-col md:flex-row items-center p-10 my-10 bg-gradient-to-r from-green-700 to-white">
          <div className="portfolio_card_content md:w-1/2 order-2 md:order-1">
            <h1 className="text-4xl font-bold uppercase text-white dark:text-white mb-4 md:mb-6">
            TicketSwap
            </h1>
            <p className="text-xs mb-4 md:mb-6 text-white dark:text-white">
            TicketSwap is a secure, convenient, and fair marketplace for purchasing and selling electronic tickets for concerts, festivals, and sporting events.            </p>
            <button
              type="button"
              className="text-white  font-medium rounded-lg border-white text-sm px-5 py-2.5 text-center"
            ><a href="https://www.ticketswap.com/" target="_blank">
              View Site
              </a>
            </button>
          </div>
          <div className="portfolio_card_img md:w-full mb-8 md:mb-0 md:mr-8 md:w-1/2 order-1 md:order-2">
            <img className="w-full h-auto ml-5" src={ticketswap} alt="" />
          </div>
        </div>

        <div className="portfolio_card flex flex-col md:flex-row items-center p-10 my-10 bg-gradient-to-r from-yellow-700 to-white">
          <div className="portfolio_card_content md:w-1/2 order-2 md:order-1">
            <h1 className="text-4xl font-bold uppercase text-white dark:text-white mb-4 md:mb-6">
            Zivver
            </h1>
            <p className="text-xs mb-4 md:mb-6 text-white dark:text-white">
            Zivver is a communication security solution that prevents data leaks in the exchange of sensitive data. </p>
            <button
              type="button"
              className="text-white  font-medium rounded-lg border-white text-sm px-5 py-2.5 text-center"
            ><a href="https://www.zivver.com/" target="_blank">
              View Site
              </a>
            </button>
          </div>
          <div className="portfolio_card_img md:w-full mb-8 md:mb-0 md:mr-8 md:w-1/2 order-1 md:order-2">
            <img className="w-full h-auto ml-5" src={zivver} alt="" />
          </div>
        </div>

        <div className="portfolio_card flex flex-col md:flex-row items-center p-10 my-10 bg-gradient-to-r from-red-700 to-white">
          <div className="portfolio_card_content md:w-1/2 order-2 md:order-1">
            <h1 className="text-4xl font-bold uppercase text-white dark:text-white mb-4 md:mb-6">
            Fairphone
            </h1>
            <p className="text-xs mb-4 md:mb-6 text-white dark:text-white">
            Fairphone is the world's first smartphone that is fairly designed and manufactured. </p>
            <button
              type="button"
              className="text-white  font-medium rounded-lg border-white text-sm px-5 py-2.5 text-center"
            ><a href="https://www.fairphone.com/" target="_blank">
              View Site
              </a>
            </button>
          </div>
          <div className="portfolio_card_img md:w-full mb-8 md:mb-0 md:mr-8 md:w-1/2 order-1 md:order-2">
            <img className="w-full h-auto ml-5" src={fairphone} alt="" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Work;
