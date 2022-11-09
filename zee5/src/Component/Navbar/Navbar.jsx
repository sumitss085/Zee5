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


 import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react"

import { Link } from 'react-router-dom';
import { Search2Icon, } from '@chakra-ui/icons'
import {  MdSettingsVoice } from "react-icons/md"
import AccordionItems from '../Accordionitem/AccordionItems';



function Navbar(){
   const DrawerItem=["Explore","Plans","Setting","Info"]

    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const handleClick = () => {
     
      onOpen()
    }

    return (
        <>
        <div className='header'>
            
        
            <div className="headerLeft">
               
                <Link to="/"><img className="header__icon" src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.50" alt="zee5 logo" width='20px'   height='30px'/>
                </Link>
                <Breadcrumb separator=' ' >
                <BreadcrumbItem>
                <BreadcrumbLink href='#'>  <Link to="/movies/popular" ><span>Home</span></Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                <BreadcrumbLink href='#'> <Link to="/movies/top_rated" ><span>TV Show</span></Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem >
                <BreadcrumbLink href='#' ><Link to="/movies/upcoming" ><span>Movies</span></Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                <BreadcrumbLink href='#'> <Link  ><span>Web Series</span></Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                <BreadcrumbLink href='#'> <Link  ><span>News</span></Link></BreadcrumbLink>
                </BreadcrumbItem>
                </Breadcrumb>
                
                {/* <Link  ><span  style={{paddingLeft:'20px'}}><FaBuromobelexperte color='white' size="15px" pl='20px'  /></span></Link> */}
            </div>
           
            <div className="headerCenter">
                   
                    <InputGroup  >
                    <InputLeftElement pointerEvents='none' w='20px' h="15px" ml="10px" mt="10px"   children={<Search2Icon color='white' />}/>
                    <InputRightElement pointerEvents='none'w='20px' h="15px" mr="20px" mt="10px"  children={<MdSettingsVoice color='white'/>} />
                     <Input type='tel' placeholder='Search for Movies, Shows, channels' w='250px'  h="35px" />
                    </InputGroup>
                 
                 
                 <Stack direction='row' spacing={4} align="center">
                   <Button color='White' id='login' variant='outline'w="70px" h="30px" fontSize="10px"> LOGIN</Button>
                    <Button leftIcon={<RiVipCrownFill color='white' />} colorScheme='purple' h="30px" variant='solid'  fontSize="10px" w="100px">BUY PLAN</Button>
                    <FiAlignJustify size='22px' color='white' onClick={()=>handleClick()}  />
                 </Stack>
                 
                
                 
                   
            </div>
            
            
        </div>
       
                        <Drawer allowPinchZoom={true} onClose={onClose} isOpen={isOpen} >
                            <DrawerOverlay />
                              <DrawerContent>
                                <DrawerCloseButton />
                                <DrawerHeader ><Box className='Drawer_Header'>Home</Box> </DrawerHeader>
                                <DrawerBody>
                                <Accordion defaultIndex={[]} allowMultiple>
                               {
                                DrawerItem.map((item)=>(
                                    <AccordionItems title={item}/>
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


