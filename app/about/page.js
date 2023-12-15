import Header from "../(component)/header/header";
import Image from "next/image";
import Button from "../(component)/button/button";

function Page({title}) {
  return (
    <>
      <div>
        <Header title= "About" />

        <section className="about-us">
        <div className="row">
            <div className="about-col">
                <h1>We are the world's largest University</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
                <Button title = "EXPOLRE NOW" />
            </div>
            <div className="about-col">
                <Image src="/img/about.png" width={200}  height={350} alt="" />
            </div>
        </div>
    </section>
      </div>
    </>
  )
}


export default Page;
