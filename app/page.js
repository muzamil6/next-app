import Link from "next/link";
import Button from "./(component)/button/button";
import Card from "./(component)/card/card";
import Campus from "./(component)/campus/campus";

function Page() {
    return (
        <>
            <div className="header">
                <nav >
                    <Link href="" className="logo">Xplore
                        <i className="fab fa-staylinked"></i>kill
                    </Link>
                    <div className="nav-links" id="navLinks">
                        <i className="fa fa-times" onclick="hideMenu()"></i>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/course">Course</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <i className="fa fa-bars" onclick="showMenu()"></i>
                </nav>

                <div className="text_box">
                    <h2>GET READY</h2>
                    <p id="headtext">TO DISCOVER CAMPUS</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
                        <br /> esse blanditiis in quae perspiciatis quo.
                    </p>

                    <Button title="Visit Us To Know More" />

                </div>
            </div>



            <section className="course">
                <div className="PageBlock">
                    <div className="verticalLine"></div>
                    <div className="Clear"></div>
                </div>
                <h1>EXPLORE OUR 60+ <br /> MAJOR PROGRAMS</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                <div className="row">
                    <Card title="Undergraduate Programs" />
                    <Card title="Graduate Programs" />
                    <Card title="Adult Learning & Degree Completion" />

                </div>
            </section>


            <section className="campus">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
             <Campus source= "/img/Campus1.png" title= "LOREM" />
             <Campus source= "/img/Campus2.png" title= "LOREM" />
             <Campus source= "/img/Campus3.png" title= "LOREM" />
        </div>
    </section>
        </>
    )
}

export default Page;
