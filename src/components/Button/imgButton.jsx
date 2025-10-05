import moggingImg from "../../assets/mogging.jpg";

function ImgButton(){

  const HandleClick = (e) => {
    console.log(e);
    e.target.style.display = "none";
  };

  return(
    <img src={moggingImg} onClick={(e)=>HandleClick(e)} alt="mogging profile pics"></img>
  );
}

export default ImgButton