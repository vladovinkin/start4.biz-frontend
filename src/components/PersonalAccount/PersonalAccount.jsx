import React, { Fragment, useState } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import ContactInformation from '../ContactInformation/ContactInformation';
import OrganizationInformation from '../OrganizationInformation/OrganizationInformation';
import PersonalAccountProposals from '../PersonalAccountProposals/PersonalAccountProposals';
import PersonalRegistrationContainer from '../../containers/PersonalRegistrationContainer';
import { PersonalAccountExit } from '../PersonalAccountExit/PersonalAccountExit';
import Login from "./../Login/Login";
import "./PersonalAccount.css";

const PersonalAccount = (loginOpenValue = true) => {

let [loginOpen, setLoginOpen] = useState(loginOpenValue);
let [login, setLogin] = useState(false);

const[classNames, setClassNames] = useState('question-wraper--none');

const clickHendlerNo = () => {
   setClassNames('question-wraper--none')
};

const clickHendlerYes = () => {
	setClassNames('');
	console.log('PersonalAccount.jsx: click');
};
   
// const login = true;

function toggleLogin () {
    setLoginOpen (
        loginOpen = !loginOpen
    )
}

function toggleAccount() {
    setLoginOpen (
        loginOpen = !loginOpen
    )
    setLogin(
        login = !login
    )
}

return (
    <>
      {loginOpen && <Login changeLogin={toggleLogin} isLogin={toggleAccount}/>}
      {login && 
        <Fragment>
            <PersonalAccountExit 
            classNames={classNames} 
                clickHendlerNo={clickHendlerNo}
                clickHendlerYes={clickHendlerYes}
            />
            <div className="container-fluid">
                <div className="personal-account">
                    <div className="personal-account__inner">
                    <div className="bread-crump">тут ссылки...</div>
                        <div className="personal-account__content-wrapper">
                            {login && (
                            <>
                            <div className='personal-account__content'>
                                <Switch>
                                    <Route path="/account/contactInformation">
                                        <ContactInformation />
                                    </Route>
                                    <Route path="/account/organizationInformation">
                                        <OrganizationInformation />
                                    </Route>
                                    <Route path="/account/proposals">
                                        <PersonalAccountProposals />
                                    </Route>
                                </Switch>
                            </div>
                            <div className="personal-account__navigation">
                                <h3 className="personal-account__navigation-title">Навигация</h3>
                                <ul className="personal-account__navigation-list">
                                    <li className="personal-account__navigation-list-item">
                                        <Link to="/account/contactInformation"
                                            className="personal-account__navigation-list-link  personal-account__navigation-list-link--hover personal-account__navigation-list-link--active"
                                            title="Контактная информация">
                                            <span className="personal-account__navigation-list-text">
                                                Контактная информация
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="personal-account__navigation-list-item">
                                        <Link to="/account/organizationInformation"
                                            className="personal-account__navigation-list-link  personal-account__navigation-list-link--hover personal-account__navigation-list-link--active"
                                            title="Контактная информация">
                                            <span className="personal-account__navigation-list-text">
                                                Информация об организации
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="personal-account__navigation-list-item">
                                        <Link to="/account/proposals"
                                            className="personal-account__navigation-list-link  personal-account__navigation-list-link--hover personal-account__navigation-list-link--active"
                                            title="Заявки">
                                            <span className="personal-account__navigation-list-text">
                                                Заявки
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="personal-account__navigation-list-item">
                                    <a href="#"
                                        className="personal-account__navigation-list-link   personal-account__navigation-list-link--hover personal-account__navigation-list-link--active"
                                        onClick={clickHendlerYes}
                                    >Выход
                                    </a>
                                    </li>
                                </ul>
                            </div>
                                    
                            </>                               
                            )}
                            {!login && (
                            <PersonalRegistrationContainer />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
      }
    </>
   )
}

export default PersonalAccount;