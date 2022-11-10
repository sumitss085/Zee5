import { Button } from "@chakra-ui/react"
import { FiPlay } from "react-icons/fi"
import './Button.css'


function UseButton(){
    return (<>
    
    <Button size="sm"leftIcon={<FiPlay className="btn_icon" bg="red"  stroke="white" p="0px" />} className="btn"  variant='outline'>
    Watch
  </Button>
    </>)

}
export default UseButton

// leftIcon={<MdBuild className="btn_icon"/>}