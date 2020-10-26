import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component';
import Modal from './Modal'
import {
        List,
        AutoSizer,
        CellMeasurer,
        CellMeasurerCache

} from 'react-virtualized'

function App() {
  const accessKey="XX0y-LoBkJAUUHin9cTy9UFK28mEnX3tSnHoaNaNdw8";
  const apiRoot="https://api.unsplash.com/" ;
  const [scrollImage, setScrollImage] = useState()   
  const [image, setImage] = useState([])
  const [modal, setModal] = useState(true);
  const [index, setIndex] = useState(0)
  const [imgPath, setImgPath] = useState()

   useEffect(() => {
     getImage();
     
   }, [])


   const getImage = (count=10) => {
    axios.get(`${apiRoot}/photos/random/?client_id=${accessKey}&count=${count}`).
     then((res)=>{
       // setModalImage(res.data)
        // setModalImage(res.data)

      setImage([...image,...res.data])
     })
   }

   const closeModal =() => {
    setModal(true);
   }

   const openModal = (path,index) => {
    // console.log("d",path[index].urls.small);
    setImgPath(path[index]);
    setModal(false);
    setIndex(index);
   }
   
  return (
    <div className="App">
    {modal && (<InfiniteScroll
        dataLength={image.length}
        next={getImage}
        hasMore={true}
      >
      {image.length > 0 ? 
        image.map((val,index)=>{
          return(<img src={val.urls.small}  key={index} onClick={()=>openModal(image,index)}/>)
          })
     :"Loading..." }
    </InfiniteScroll>)      
} <Modal closeModal={closeModal} show={modal} src={imgPath} index={index} image={image} setIndex={setIndex} getData={getImage}/>


    </div>
  );
}

export default App;
