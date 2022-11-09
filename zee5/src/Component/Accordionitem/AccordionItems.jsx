import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from "@chakra-ui/react";
import "./AccordionItems.css"

function AccordionItems({title}){
    const Explore=["TV Shows" ,"Movies", 'Web Series','News','Eduauraa',"Primium",'Live tv',"MUsic","Rent","Play","Articals","Kids","Videos",'Stories','Channels']
    const Plans=["Buy Plan ","Have A Prepaid Code ?"]
    const Setting=["Reset Setting to Default"]
    const Info=["About Us","Help Center",'Content Redressal Mechanism',"Terms of Use","Privacy Policy"]
   
   let mappingItem=[]

   if(title==="Explore"){
    mappingItem=Explore
   }
   else if(title==="Plans"){
    mappingItem=Plans
   }
   else if(title==="Setting"){
    mappingItem=Setting
   }
   else if(title==="Info"){
    mappingItem=Info
   }
   else{
    mappingItem=[]
   }

    return (
        <>
        
        <AccordionItem isFocusable={true}>

<h2><AccordionButton><Box flex='1' textAlign='left'>{title}</Box><AccordionIcon /></AccordionButton></h2>
<AccordionPanel pb={4}>
                {
                 mappingItem.map((item)=>(
                    <Box className="Drawer_box">{item}</Box>
                 ))  
                }
</AccordionPanel>
</AccordionItem>
        </>
    )
}

export default AccordionItems