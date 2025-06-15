import Header from "../components/Header/Header";

const HomePage = () => {
    return(
        <div>
            <Header/>
           <h1>Welcome to Vivekanand College!</h1> 
           
           <p style={{textAlign:"center"}}>Your journey to excellence starts here.</p>
           <button type="button" name="btn" id="btn" value="Apply Now" style={{backgroundColor:"green"}}><u>Apply Now!</u></button>
           <p>Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.</p>
           <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
           
           <h2><strong>Why Choose Vivekanand College?</strong></h2>
           <ul>
            <li><strong>Legacy of Excellence:</strong> Decades of commitment to quality education.</li>
            <li><strong>Experienced Faculty:</strong> Learn from renowned experts and passionate educators.</li>
            <li><strong>Modern Facilities:</strong> Well-equipped labs, expansive library, and comfortable campus.</li>
            <li><strong>Holistic Development:</strong> Focus on co-curricular activities, sports, and community service.</li>
            <li><strong>Strong Placements:</strong> Excellent career opportunities with leading companies.</li>
           </ul>

           <h2><strong>Campus Life & Facilities</strong></h2>
            <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
            <p style={{textAlign:"center"}}>Ready to explore our courses?</p>
            <button type="button" name="btn" id="btn" value="Explore Courses" style={{backgroundColor:"green"}}>Explore Courses</button>
        </div>
    )
}

export default HomePage;