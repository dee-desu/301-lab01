import React from 'react';

const year = new Date().getFullYear();

class Footer extends React.Component {
    render() {
        return (
            <footer>
            <p className='footer'>&copy; Omar Darwish {year}</p>
            </footer>
        )
    }
}

export default Footer;
