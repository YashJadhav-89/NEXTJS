'use client'
import styles from "./page.module.css";

export default function Home() {

  const apple=(item)=>{
    alert(item);
  }
  return (
    <main className={styles.main}>
     <h1>Events,Functions And States</h1>
     {/* <User name="yash"/> */}
     <button onClick={()=>apple("color")}>click me</button>
    </main>
  );
}



// const User=(props)=>{
//   return(
//     <div>
//       <h1>USER name is {props.name}</h1>
//     </div>
//   )
// }
