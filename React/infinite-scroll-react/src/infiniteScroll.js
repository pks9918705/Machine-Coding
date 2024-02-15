import { useEffect } from "react"


const InfiniteScroll = (props) => {

    useEffect(()=>{
        console.log('i am infinite scroll');
        
    },[])
    useEffect(()=>{
        console.log('i will render when parent will change');
        
    })
  return (
    <div>
      
    </div>
  )
}

export default InfiniteScroll
