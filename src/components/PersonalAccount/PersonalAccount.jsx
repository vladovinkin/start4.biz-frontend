import React, { Fragment } from 'react';
import {Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import ContactInformation from '../ContactInformation/ContactInformation';
import OrganizationInformation from '../OrganizationInformation/OrganizationInformation';
import PersonalAccountProposals from '../PersonalAccountProposals/PersonalAccountProposals';
import "./PersonalAccount.css";

const PersonalAccount = () => {
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="personal-account">
                    <div className="personal-account__inner">
                    <div className="bread-crump">тут ссылки...</div>
                        <div className="personal-account__content-wrapper">
                            <div className="personal-account__content">
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
                                            className="personal-account__navigation-list-link"
                                            title="Контактная информация">
                                            <span className="personal-account__navigation-list-text">
                                                Контактная информация
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="personal-account__navigation-list-item">
                                        <Link to="/account/organizationInformation"
                                            className="personal-account__navigation-list-link"
                                            title="Контактная информация">
                                            <span className="personal-account__navigation-list-text">
                                                Информация об организации
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="personal-account__navigation-list-item">
                                        <Link to="/account/proposals"
                                            className="personal-account__navigation-list-link"
                                            title="Заявки">
                                            <span className="personal-account__navigation-list-text">
                                                Заявки
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="personal-account__navigation-list-item">Выход</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default PersonalAccount;