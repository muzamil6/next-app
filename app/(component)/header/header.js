import Link from "next/link";
import Navbar from "../navbar/navbar";


function Header(props) {
  return (
    <>
    <section className="Sub-header">
        <Navbar  />
        <h1>{props.title}</h1>
    </section>
    
    </>
  )
}


export default Header;