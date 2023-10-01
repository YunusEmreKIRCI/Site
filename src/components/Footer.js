import React from 'react';
import { MDBFooter, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'  style={{marginTop: 50}}>
      <section className='d-flex justify-content-center  p-4 border-bottom'>
      
        <div >
          
          <a href='https://twitter.com/IeeeKou' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' size='2x'/>
          </a>
          <a href='https://www.instagram.com/ieeekou/' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' size='2x'/>
          </a>
          <a href='https://www.linkedin.com/company/ieeekou/mycompany/' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' size='2x'/>
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' size='2x'/>
          </a>
        </div>
      </section>

      

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color : "white"}}>
       Powered by IEEE KOU Turing<a href = "/Troll">'</a>s Rookies
      </div>
    </MDBFooter>
    
  );
}