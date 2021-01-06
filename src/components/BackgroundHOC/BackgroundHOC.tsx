import React from 'react';

interface BackgroundHOCProps {

}

const BackgroundHOC: React.FC<BackgroundHOCProps> = (props) => {
    const bkgImage = 'images/default.jpg';

    return(
        <div style={{ display: 'block', overflow: 'auto', minHeight: '100vh',
                     backgroundImage: `url(${bkgImage})`,
                     backgroundPosition: 'center center',
                     backgroundAttachment: 'fixed',
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat'}}>
            {props.children}
        </div>
    );
}

export default BackgroundHOC;