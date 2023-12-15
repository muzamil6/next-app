import Header from "../(component)/header/header";
import Card from "../(component)/card/card";
import Imagecard from "../(component)/imagecard/imagecard";

function Page(title) {
    return (
      <>
      <div>
        <Header title= "Course"/>

        <section className="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
       
        <div className="row">
        <Card title="Undergraduate Programs"  />
        <Card title="Graduate Programs"  />
        <Card title="Adult Learning & Degree Completion" para="" />
      
      </div>

        </section>




        <section className="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">

          <Imagecard source ="/img/course1.png" title= "Web Development" />
          <Imagecard source ="/img/course2.png" title= "Artificial Intelligence" />
          <Imagecard source ="/img/course3.png" title= "Data Science" />
           
            
            
        </div>
    </section>
        
      </div>
      </>
    )
  }
  
  
  export default Page;
  