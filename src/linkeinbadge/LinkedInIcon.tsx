import  { useState, useEffect } from 'react';
import logoLink from '/logolink.svg';
import LinkedInBadge from './LinkedInBadge';
import "./Lkndin.css";
const LinkedInIcon = () => {
  const [lkdn, setLkdn] = useState<boolean>(false);

  useEffect(() => {
    if (lkdn) {
      const existingScript = document.getElementById('linkedin-badge-script');
      
      if (!existingScript) {
        const script = document.createElement('script');
        script.id = 'linkedin-badge-script';
        script.src = 'https://platform.linkedin.com/badges/js/profile.js';
        script.async = true;
        script.defer = true;
        script.type = 'text/javascript';
        document.body.appendChild(script);
      }
    }

    return () => {
      const script = document.getElementById('linkedin-badge-script');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [lkdn]);

  const handleClickLind = () => {
    setLkdn(prevLkdn => !prevLkdn);
  };

  return (
    <>


    <div className='iconClass'>
    <div className='no-print'>
      <div className={`${lkdn ? 'hidden' : ''}`} >
    <img
        src={logoLink}
        width="85px"
        onClick={handleClickLind}
        alt="Logo Link"
        style={{ cursor: 'pointer' }}
      />
         </div>
        </div>
      <div className='no-print'>
      <div className='lkndBk'>
       <div className={`${lkdn ? '' : 'hidden'}`}>
        </div>
        </div>
       <LinkedInBadge></LinkedInBadge>
        </div>
        </div>
    </>
  );
};

export default LinkedInIcon;
