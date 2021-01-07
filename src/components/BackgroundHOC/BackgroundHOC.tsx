import React from 'react';

interface BackgroundHOCProps {

}

const BackgroundHOC: React.FC<BackgroundHOCProps> = (props) => {
    const bkgImage = 'images/default.jpg';

    return(
        <React.Fragment>
            <div className='fullscreen-image' style={{
                     backgroundImage: `url(${bkgImage})`,
                     backgroundPosition: 'center center',
                     backgroundAttachment: 'fixed',
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                     filter: 'blur(3px)'                     
                     }}>
            </div>
            <div>{props.children}</div>
        </React.Fragment>
        
    );
}

export default BackgroundHOC;