import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
export default function Contact(){
    return (
        <>
           <main className="contact-page">
            <h1 className="sm:text-5xl text-3xl font-md mb-8 max-sm:text-center">Contact me on</h1>
            <p className="text-xl  mb-16">
                If you are interested in hiring me for your project please use the form below to get in touch. <br /> Want to know how I work and what I can offer? Check out my projects and resume.
                <br />
                
            </p>

            <div className="flex max-sm:justify-center">
                <a href="https://github.com/Rutuja51" target="new">
                    <FaGithub className="text-blue-600 mr-6 text-4xl hover:animate-bounce hover:cursor-pointer" />
                </a>
                
                <a href="https://www.linkedin.com/in/rutujamule/" target="new">
                <FaLinkedin className="text-blue-600 text-4xl mr-6 hover:animate-bounce cursor-pointer" />
                </a>

                <FaEnvelope className="text-blue-600 text-4xl  mr-6 hover:animate-bounce cursor-pointer" />
            </div>
            <div className="detail-box-container">
                        <p className="detail-box">
                            Email : <br />
                            rutuja.mule096@gmail.com
                        </p>
                        <p className="detail-box">
                            Date of Birth : <br />
                            06.10.1996
                        </p>
                        <p className="detail-box">
                            Address : <br />
                            Schwandorf , Bayern , germany

                        </p>

                        <p className="detail-box">
                            Call : <br />
                            +49 177 9169591

                        </p>
                    </div>
           </main>
        </>
    )
}