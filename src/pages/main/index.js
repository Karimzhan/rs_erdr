import React, {Component} from 'react';
import Background from '../components/Background'
import Header from '../components/Header'
import Form from './view/Form'
import gprk from './img/gprk.png'
import './css/style.css';


class Main extends Component {
    render(){
        return (
            <Background>
                <Header />
                <div className="content">
                    <div>
                        <Form />
                    </div>
                </div>
                <div className="footerImg">
                   <img src={gprk} alt="" />
                </div>
            </Background>
        );
    }
}

export default Main;
