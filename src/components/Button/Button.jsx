import styles from "./Button.module.css";

function Button(){
  let count = 0;
  const HandleClick = (name) => {
    if(count < 3){
      count++;
      console.log(`${name} have clicked me ${count}`);
    }
    else{
      console.log(`${name}, please stop clicking me.`);
    }
  };

  return(
    <button className={styles.button} onClick={()=>HandleClick("User")}>Click Me</button>
  );
}
export default Button