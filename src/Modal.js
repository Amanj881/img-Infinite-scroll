import React,{useState,useEffect} from 'react'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

function Modal({src,show,closeModal,index,image,getData,setIndex}) {
	const [leftArrow, setLeftArrow] = useState(false)
 const slideRight = () => {
          setLeftArrow(true);

 	setIndex(index+1);
  getData(10);
  };

  const slideLeft = () => {
        const nextIndex = index - 1;

       if(nextIndex<0)
       {
        setLeftArrow(true);
        setIndex(image.length - 1)

       }
       else{
        setIndex(nextIndex)
       }

  };	
  return (
    
      <div className={!show? "card":"hide"}>
      {image.length >0 && <>
        <button className="cancel" onClick={closeModal}>X</button>
        <div className="imgContainer">
        {leftArrow &&         <ChevronLeftIcon className="red" onClick={()=>slideLeft()} />
}
        <img src={image[index].urls.small}/>
        <ChevronRightIcon className="red" onClick={()=>slideRight()} />
        </div>
        </>
}
      </div>
   
  );
}

export default Modal