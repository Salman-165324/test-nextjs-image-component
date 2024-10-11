import Image from "next/image";
import mountainLake from "./mountain-lake.jpeg";
export default function Home() {
  return (
   <div>
     <Image src= {mountainLake} alt="mountain lake"/>
   </div>
  );  
}
