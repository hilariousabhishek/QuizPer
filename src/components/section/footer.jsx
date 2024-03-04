import React, { useEffect, useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const [isFooterAtBottom, setIsFooterAtBottom] = useState(false);

  const shareUrl = 'https://your-website-url.com';
  const shareText = 'Check out this awesome website!';

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`, '_blank');
  };

  const shareOnInstagram = () => {
    // Instagram doesn't have a direct share URL due to API restrictions
    alert('Instagram does not support direct sharing.');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`, '_blank');
  };

  useEffect(() => {
    const handleResize = () => {
      const contentHeight = document.body.scrollHeight;
      const viewportHeight = window.innerHeight;
      setIsFooterAtBottom(contentHeight <= viewportHeight);
    };

    handleResize(); // Call once on component mount
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer className={`bg-light text-center mt-4 ${isFooterAtBottom ? 'fixed-bottom' : ''}`}>
      <div className="container d-flex flex-column">
        <div className="row">
          <div className="col-md-6 text-md-left">
            <p className='mt-2'>&copy; 2024 Your Website. All rights reserved.</p>
          </div>
         <div className="col-md-6 text-md-right">
            <button onClick={shareOnFacebook} className="btn btn-light">
              <FaFacebook size={20} />
            </button>
            <button onClick={shareOnTwitter} className="btn btn-light ml-2">
              <FaTwitter size={20} />
            </button>
            <button onClick={shareOnInstagram} className="btn btn-light ml-2">
              <FaInstagram size={20} />
            </button>
            <button onClick={shareOnLinkedIn} className="btn btn-light ml-2">
              <FaLinkedin size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
