import DownloadCV from "../components/common/downloadCV.jsx"
export default function Resume() {
    return (
        <>
            <main className="resume-page">
                <h1 className="text-5xl font-xl mb-16">Rutuja Mule</h1>
                <DownloadCV></DownloadCV>
                <hr /> <br />
                <p className="resume-text">
                    <b>ID</b>: YZLWCMY19 | <b>Work permit</b>: German | <b>Date of birth</b>: 06/10/1996 | <b>Nationality</b>: Indian | <b>Gender</b>: Female |
                    <b>Phone number</b>: (+49) 1779169591 | (Mobile)  <b>Email address</b>: rutuja.mule096@gmail.com | <b>LinkedIn</b>:
                    https://www.linkedin.com/in/rutujamule/ | <b>Address</b>: Roechstrasse 14,, 92421, Schwandorf, Germany (Home)
                </p>

                <hr />
                <h2 className="resume-heading">ABOUT ME</h2>
                <p className="resume-text">Frontend Developer with a Bachelor's degree in Information Technology and professional experience in web
                    application development. Skilled in React.js, Next.js, JavaScript, HTML, CSS, Tailwind CSS, Bootstrap, Node.js, Express.js,
                    Git, Docker, and Postman. Passionate about building responsive and user-friendly web applications using modern
                    frontend technologies. Currently seeking a Junior Frontend Developer or React Developer opportunity in Germany.
                    <b>German language level: B1</b></p>

                <hr />
                <h2 className="resume-heading">WORK EXPERIENCE</h2>
                <div className="flex flex-col gap-2">
                    <h3 className="resume-subheading">FRONTEND WEB DEVELOPER - NEUTRINOS</h3>
                    <p className="resume-subheading text-grey">19/09/2021 - 15/12/2025 - BANGALORE, INDIA </p>
                </div>
                <ul className="list-disc resume-text">
                    <li>
                        Developed responsive and user-friendly web application interfaces based on wireframes, functional specifications,
                        and business requirements.
                    </li>
                    <li>
                        Implemented dynamic UI components and data-binding functionality using Angular, React.js, JavaScript,Bootstrap,
                        HTML, and CSS to enhance user experience and application performance.
                    </li>
                    <li>
                        Integrated RESTful APIs and backend services to enable seamless data exchange and application functionality.
                    </li>
                    <li>
                        Participated in code reviews, Software Integration Testing (SIT), and User Acceptance Testing (UAT) to ensure code
                        quality, application stability, and compliance with project requirements.
                    </li>
                    <li>
                        Developed and maintained frontend features using Angular, React.js, HTML, CSS, JavaScript, and Neutrinos Studio.
                    </li>
                    <li>
                        Performed API testing, validation, and troubleshooting using Postman to support application integration and
                        debugging activities.
                    </li>
                    <li>
                        Collaborated with cross-functional teams using Bitbucket for version control and source code management.
                    </li>
                    <li>
                        Utilized Azure DevOps for task tracking, project collaboration, sprint planning, and software development lifecycle
                        management.
                    </li>
                </ul>

                <hr />
                <h2 className="resume-heading">SKILLS </h2>
                <p className="resume-text">
                    React/Next.js Web Technologies (HTML5, CSS3, Bootstrap, Angular) | Tailwind (some knowledge) | Git/Github,
                    Docker, Gitlab |  Experience in using Postman tools for API testing | Ticketing platforms (Jira) JavaScript node
                    JS | Responsive Webdesign
                </p>

                <hr />
                <h2 className="resume-heading">EDUCATION & TRAINNING</h2>

                <p className="resume-subheading text-grey">01/07/2014 - 03/07/2018 Islampur, India </p>
                <p className="resume-subheading">BACHELORE OF TECHNOLOGY RIT , Islampur , Maharashtra , India</p>
                <p className="resume-text"><b>Websitehttps</b>: <a href="https://ritindia.edu/ritwebsite/website/admission_2026.php">https://ritindia.edu/ritwebsite/website/admission_2026.php  | </a> 
                <b> Field of study : </b> Information Technology
                </p>

                <p className="resume-subheading text-grey">01/07/2012 - 03/07/2014 Karad, India </p>
                <p className="resume-subheading">Yashawantrao Chavhan College of Science ,Karad , Maharashtra , India</p>
                <p className="resume-text"><b>Field of study</b> Higher Secondary School (HSC-State Board)</p>

                <p className="resume-subheading text-grey">01/07/2011 - 03/07/2012 Karad, India </p>
                <p className="resume-subheading">Lahoti Kanya Prashala ,Karad , Maharashtra , India</p>
                <p className="resume-text"><b>Field of study</b>Secondary School(SSC-State Board)</p>

                <hr />
                <h2 className="resume-heading">PROJECTS</h2>
                <p className="resume-subheading text-grey">10/01/2023 - 14/08/2025 </p>
                <p className="resume-subheading">Woligo phase 1 & 2 </p>
                <p className="resume-text">Developed and maintained a web-based insurance policy quotation application for the US insurance market. The
                    platform collected behavioral, financial, and demographic information from customers to generate personalized
                    insurance policy recommendations through an automated Product Recommendation Engine. Built using the Neutrinos
                    low-code development platform, the application streamlined the insurance quote generation process and improved
                    the customer onboarding experience. <br />
                <b>Role</b> : Frontend Developer <br />
                <b>Technologies and Tools</b>: JavaScript, React, Next.js,Tailwind CSS, REST APIs, PostgreSQL,Postman Client, Bit Bucket</p>

                <p className="resume-subheading text-grey">01/10/2021 - 10/11/2022 </p>
                <p className="resume-subheading">Horizon-Bluesky </p>
                <p className="resume-text">Developed and maintained a web-based insurance policy management application for the South African insurance
                    market. The platform enabled customers and agents to create, manage, and process insurance policies across multiple
                    insurance products and brands. Developed with Visual Studio Code, the application provided a scalable and user
                    friendly solution for insurance policy creation, policy management, and customer data processing across multiple
                    insurance products. <br />
                <b>Role</b> : Frontend Developer <br />
                <b>Technologies and Tools</b> : JavaScript, React, Next.js,Tailwind CSS, REST APIs, PostgreSQL, Postman Client, Bit Bucket, VS Code</p>

                <hr />
                <h2 className="resume-heading">LANGUAGE SKILLS </h2>
                <p className="resume-subheading">English <b>c1</b></p>
                <p className="resume-subheading mb-8">Deutsch <b>B1</b></p>

                <hr />
                <h2 className="resume-heading">HOBBIES AND INTERESTS</h2>
                <p className="resume-subheading">Badminton , Travelling</p>
            </main>
        </>
    )
}