import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <span>Feito Por Pedro Henrique</span> <br/>
                Baseado no Layout da Netflix <br/>
                Dados da API pegos no "Themoviedb.org"
            </footer>
        );
    }
}

export default Footer;