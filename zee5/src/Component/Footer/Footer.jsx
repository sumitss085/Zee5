
import './Footer.css'

import {
  
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  
  } from '@chakra-ui/react'

  import { FaFacebookSquare} from "react-icons/fa";
  import { AiOutlineInstagram,AiOutlineYoutube} from "react-icons/ai"
  import { CiTwitter} from "react-icons/ci"
import React from 'react'

const Footer = () => {
  return (
    <>

        <div className='footer'>
            <div className='fot_top'>
                
                <div  className='fot_top_left'>
                  <h1>Download Apps</h1>
                   <img src="https://www.zee5.com/images/play_store.png?ver=2.52.51" alt="" />
                   <img src="https://www.zee5.com/images/app_store.png?ver=2.52.51" alt="" />
                </div>


                <div className='fot_top_right'>
                    <h1>Connect with us</h1>
                    <div className='fot_logo'>< FaFacebookSquare bg="#777777"/></div>
                    <div className='fot_logo'><AiOutlineInstagram/></div>
                    <div className='fot_logo'><CiTwitter/></div>
                    <div className='fot_logo'><AiOutlineYoutube/></div>

                </div>
               
          
             
           
            </div>
            <div className='fot_heading'>
                <Breadcrumb separator='|' spacing="1.3rem" >
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#' fontSize="12px">About us</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'fontSize="12px">Help Center</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem >
                        <BreadcrumbLink href='#'fontSize="12px">Privacy Policy</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem >
                        <BreadcrumbLink href='#'fontSize="12px">Term of Use</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
 
 
 
            </div>
         
         
          <div className='fot_section'>
                <div className="fot_sec_col">
                    <h3>Popular TV Show</h3>
                    <p>Kumkum Bhagya</p>
                    <p>Kundali Bhagya</p>
                    <p>Bhagya Laksxmi</p>
                    <p>Thujse hai Rabta</p>
                    <p>Kyun Rishto Mein Katti Bat</p>
                </div>

                <div className="fot_sec_col">
                    <h3>Primium Movies</h3>
                    <p>Kay Meri Sonam Gupta Bewafa Hai ?</p>
                    <p>Hemlet</p>
                    <p>200 Halla HO</p>
                    <p>14 Phere</p>
                    <p>Dail 100</p>
                </div>

                <div className="fot_sec_col">
                    <h3>Popular Live TV Channels</h3>
                    <p>Ajj Tak</p>
                    <p>ZEE News</p>
                    <p>ZEE TV HD</p>
                    <p>&TV HD</p>
                    <p>ZEE Marathi HD </p>
                </div>

                <div className="fot_sec_col">
                    <h3>Popular Web Series</h3>
                    <p>Sunflower</p>
                    <p>Jeet ki Jid</p>
                    <p>Bicchoo ka Khel</p>
                    <p>Stage of Siege:26/11</p>
                    <p>Naxalbari </p>
                    <p>Tripling</p>
                </div>
                <div className="fot_sec_col">
                    <h3>Bollywood TOP Celebrities</h3>
                    <p>Sunny Leone</p>
                    <p>Diksha Patani</p>
                    <p>Dipika Padukone</p>
                    <p>Salman Khan</p>
                    <p>Nora Fatehi</p>
                    <p>Tripling</p>
                </div>

                <div className="fot_sec_col">
                    <h3>Games & News</h3>
                    <p>Play</p>
                    <p>Stories</p>
                    <p>Articals</p>
                   
                </div>
              
          </div>


          <div className='fot_bot'>
          Best viewed on Google Chrome 80+, Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+
Copyright © 2022 Zee Entertainment Enterprises Ltd. All rights reserved.
          </div>



        </div>
    </>
   
  )
}

export default Footer