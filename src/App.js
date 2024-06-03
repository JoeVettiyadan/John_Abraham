import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import  profilepic from './images/profile_pic.webp';
import Button from '@mui/material/Button';
function App() {
  const [profilePic, setProfilePic] = useState(profilepic);
  const [selectedHeading, setSelectedHeading] = useState('Experience');
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePic(reader.result);
      console.log(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById('file-input').click();
  };
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const selectFile = () => {
    document.getElementById('file-upload').click();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = Array.from(e.dataTransfer.files);
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };
  return (
    <div className="main-div">
 {/***************************left div *********************************/}     
      <div className="left-div">
      <div className="profile-div">
       <img src={profilePic} alt="Profile" className="profile-pic"/>
       <input type="file"  id="file-input" onChange={handleImageUpload} style={{ display: 'none' }} />
       <button onClick={triggerFileInput} >Edit</button>
       <h2 style={{ color: '#000078' }}>John Abraham</h2>
       <p style={{color:'#0000ab'}}>Front End Developer</p>
    </div>
    <div className="profDesc-div">
       <p>To obtain a challenging front-end developer position where I can leverage my skills 
        in HTML, CSS, JavaScript, and modern frameworks like React to create intuitive, responsive,
         and visually appealing user interfaces.</p> 
    </div><br/>
    <div className='skills-div'>
    <h3 style={{color: "#2323e5"}}>Skills</h3><hr/><br/>
    <div class="skill">JavaScript <span class="close-icon" onclick="removeSkill(this)">x</span></div>
  <div class="skill">CSS <span class="close-icon" onclick="removeSkill(this)">x</span></div>
  <div class="skill">HTML <span class="close-icon" onclick="removeSkill(this)">x</span></div>
  <div class="skill">React.js <span class="close-icon" onclick="removeSkill(this)">x</span></div>
  <div class="skill">GIT <span class="close-icon" onclick="removeSkill(this)">x</span></div>
    </div>
    </div>
{/***************************right div *********************************/}

    <div className="right-div">
    <div className="rightTop-div">
      <h3 style={{color: "#2323e5"}}>Basic Information</h3>
      <hr/>
      <br/>
      <table className='table-info'>
  <tr className='heading'>
    <th>Email</th>
    <th>Years OF Experience</th>
    <th>Phone</th>
  </tr>
  <tr>
    <td>johnabrham@gmail.com</td>
    <td>6</td>
    <td>+91 9876543210</td>
  </tr>
  <br/>
  <tr className='heading'>
    <th>CTC</th>
    <th>Location</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>5.5Lacs</td>
    <td>Kochi, Ernakulam</td>
    <td>30</td>
  </tr>

  </table>
    </div>
    <div className="rightBottom-div">
    <div className="details-heading">
      <table className='table-info'>
       <tr>
        <th style={{fontSize:"1.17em",fontWeight:"bold",cursor:"pointer" }} 
        className={selectedHeading === 'Experience' ? 'active-heading' : ''}
        onClick={() => setSelectedHeading('Experience')}>Experience</th>

      <th style={{fontSize:"1.17em",fontWeight:"bold",cursor:"pointer" }}
      className={selectedHeading === 'Certification' ? 'active-heading' : ''}
      onClick={() => setSelectedHeading('Certification')}>Certification</th>

      <th style={{fontSize:"1.17em",fontWeight:"bold",cursor:"pointer" }}
      className={selectedHeading === 'Education' ? 'active-heading' : ''}
      onClick={() => setSelectedHeading('Education')}>Education</th>
      </tr> 
      </table>
      <hr/>
      
    </div> <br/>
    { selectedHeading === 'Experience' && (
      <div>
        <table className='Experience'>
          <tr>
            <th>Infosys</th>
            <th>Wipro</th>
          </tr>
          <tr>
            <td>Senior Frontend Developer</td>
            <td>Junior Frontend Developer</td>
          </tr>
          <tr>
            <td>Jan 2022 - Present | Chennai, Tamil Nadu</td>
            <td>Jan 2022 -Jan 2020 | Ernakulam, Kerala</td>
          </tr>
          <br/>
          <tr>
            <th>Tata Consultancy Services</th>
            <th>Gravity Intelligence Solutions</th>
          </tr>
          <tr>
            <td> Frontend Developer</td>
            <td>Frontend Developer Intern</td>
          </tr>
          <tr>
            <td>Jan 2020 - Jan 2018 | Ernakulam, Kerala</td>
            <td>Dec 2017 -Sept 2017 | Ernakulam, Kerala</td>
          </tr>
        </table>
      </div>
    )}
    { selectedHeading === 'Certification' && (
      <div >
         <div className="Certification">
              <input
                type="file"
                accept="application/pdf"
                multiple
                onChange={handleFileUpload}
                style={{ display: 'none' }}
                id="file-upload"
              />
              <label htmlFor="file-upload" className="file-upload-label">
                <div>
                <Button variant="contained" onClick={selectFile}>Select File</Button>
                </div>
              </label>
            </div>
            <div className="uploaded-files">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="uploaded-file">
                  <p>{file.name} - {(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              ))}
            </div>
          </div>
        
    )}  
    { selectedHeading === 'Education' && (
      <div className='Education'>
        <table className='Experience'>
          <tr>
            <th>Christ College Of Engineering</th>
            <th>Don Bosco HSS</th>
          </tr>
          <tr>
            <td>B.Tech in Electronics And Communication</td>
            <td>Higher Secondary Education</td>
          </tr>
          <tr>
            <td>Aug 2014 - Aug 2017 | Thrissur, Kerala</td>
            <td>Jun 2012 - Mar 2014 | Ernakulam, Kerala</td>
          </tr>
          <br/>
          <tr>
            <th>ABC School</th>
            
          </tr>
          <tr>
            <td>High School Education</td>
            
          </tr>
          <tr>
            <td>Jun 2011 - Mar 2012 | ABC Town, Kerala</td>
            
          </tr>
        </table>
        </div>
    )}  
        </div>
    </div>
    </div>  
  );
}

export default App;
