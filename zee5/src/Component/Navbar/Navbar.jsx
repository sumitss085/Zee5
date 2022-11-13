import './Navbar.css'
import {FaBuromobelexperte} from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import { RiVipCrownFill } from "react-icons/ri";

import { 
   
    Accordion,
        Box,
        Breadcrumb,
        BreadcrumbItem,
        BreadcrumbLink,
        Button, 
        Input, 
        InputGroup, 
        InputLeftElement, 
        InputRightElement, 
        Stack
     } from '@chakra-ui/react';


 import { Drawer, 
            DrawerBody, 
            DrawerCloseButton,
            DrawerContent, 
            DrawerHeader,
            DrawerOverlay, 
            useDisclosure 
    } from "@chakra-ui/react"

import { Link } from 'react-router-dom';
import { Search2Icon, } from '@chakra-ui/icons'
import {  MdSettingsVoice } from "react-icons/md"
import AccordionItems from '../Accordionitem/AccordionItems';
import { useEffect, useState } from 'react';
import axios from 'axios'



const getSearchData=(Search)=>{
    return axios(`https://api.themoviedb.org/3/search/tv?api_key=4e44d9029b1270a757cddc766a1bcb63&language=hi-IN&page=1&include_adult=false&query=${Search}`)
}



function Navbar(){
   const DrawerItem=["Explore","Plans","Setting","Info"]

    const { isOpen, onOpen, onClose } = useDisclosure()

    const[Search,setSearch]=useState("")
  
    const handleClick = () => {
     
      onOpen()
    }


    const handlechange=(e)=>{
        setSearch (e.target.value);

    }

    useEffect(()=>{
        setTimeout(()=>{

            getSearchData(Search).then((data)=>console.log(data)).catch((err)=>console.log(err))
        },2000)
           

    },[Search])


    return (
        <>
        <div className='header'>
            
        
            <div className="headerLeft">
               
                <Link to=""><img className="header__icon" src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.50" alt="zee5 logo" width='20px'   height='30px'/>
                </Link>
                <Breadcrumb separator=' ' >
                <BreadcrumbItem>
                <BreadcrumbLink href='#'>  <Link to="/" ><span>Home</span></Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                <BreadcrumbLink href='#'> <Link to="/tvshow" ><span>TV Show</span></Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem >
                <BreadcrumbLink href='#' ><Link to="/movie" ><span>Movies</span></Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                <BreadcrumbLink href='#'> <Link to="/webseries" ><span>Web Series</span></Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                <BreadcrumbLink href='#'> <Link to="/news" ><span>News</span></Link></BreadcrumbLink>
                </BreadcrumbItem>
                </Breadcrumb>
                
                {/* <Link  ><span  style={{paddingLeft:'20px'}}><FaBuromobelexperte color='white' size="15px" pl='20px'  /></span></Link> */}
            </div>
           
            <div className="headerCenter">
                   
                    <InputGroup  >
                    <InputLeftElement pointerEvents='none' w='20px' h="15px" ml="10px" mt="10px"   children={<Search2Icon color='white' />}/>
                    <InputRightElement pointerEvents='none'w='20px' h="15px" mr="20px" mt="10px"  children={<MdSettingsVoice color='white'/>} />
                     <Input type='tel' placeholder='Search for Movies, Shows, channels' w='250px'  h="35px"  onInput={handlechange}/>
                    </InputGroup>
                 
                 
                 <Stack direction='row' spacing={4} align="center">
                    <Link to="/login">   
                        <Button color='White' id='login' variant='outline'w="70px" h="30px" fontSize="10px"> LOGIN</Button>
                    </Link>
                
                    <Button leftIcon={<RiVipCrownFill color='white' />} colorScheme='purple' h="30px" variant='solid'  fontSize="10px" w="100px">BUY PLAN</Button>
                    <FiAlignJustify size='22px' color='white' onClick={handleClick}  />
                 </Stack>
                 
                
                 
                   
            </div>
            
            
        </div>
       
                        <Drawer allowPinchZoom={true} bg="#1C061A" onClose={onClose} isOpen={isOpen} >
                            <DrawerOverlay />
                              <DrawerContent bg="#1C061A" >
                                <DrawerCloseButton />
                                <DrawerHeader ><Box className='Drawer_Header'>Home</Box> </DrawerHeader>
                                <DrawerBody>
                                <Accordion defaultIndex={[]} allowMultiple>
                               {
                                DrawerItem.map((item,index)=>(
                                    <AccordionItems key={new Date().toDateString()+index} title={item}/>
                                ))
                               }
                                </Accordion>

                                 </DrawerBody>
                                </DrawerContent>
                        </Drawer>
               
        


      
        
        
        </>
    )

}
export default Navbar


