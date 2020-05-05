import React from 'react';
import {Link} from 'react-router-dom';
import './toFinorg.css';
import coinsImage from './../../img/coins.png';
import monitorImage from './../../img/monitor.png';
import commentImage from './../../img/comment.png';
import clockImage from './../../img/clock.png';

function ToFinorg() {
    return (
        <>
            <section className="finorg-info-block">
                <h2 className="to-finorg-header">Финансовым организациям</h2>
                <div className="finorg-decription">
                    <div className="finorg-left-block">
                        <p className="to-business-text">Портал start4.biz позволяет быстро и удобно получить выгодные предложения по ряду продуктов от ведущих лизинговых и финансовых компаний.</p>
                        <p className="to-business-text">Мы будем рады видеть Вас в качестве компании-партнера, если Вы имеете лицензию ЦБ на предоставление финансовых услуг юридическим лицам и предоставляете следующие услуги :</p>
                        
                    </div>
                    <div className="finorg-right-block">
                        <ul className="to-business-list">
                            <li className="to-business-item">Кредитование Юридических лиц и Индивидуальных предпринимателей</li>
                            <li className="to-business-item">Предоставление банковских гарантий для работы с 44-ФЗ и 223-ФЗ</li>
                            <li className="to-business-item">Лизинг транспорта или оборудования</li>
                            <li className="to-business-item">Предоставление овердрафтов для покрытия кассовых разрывов</li>
                            <li className="to-business-item">Эквайринг</li>
                            <li className="to-business-item">Иные финансовые услуги</li>
                        </ul>
                    </div>
                </div>
                <div className="finorg-be-partner-button">
                    <Link to="/uc" className="page-button-fin be-partner-button-fin">
                        <span className="page-button-text be-partner-button-text">
                            Стать партнёром
                        </span>
                    </Link>
                </div>
            </section>
            <div className="h-line"></div>
            <section className="why-we">
                <h2 className="to-finorg-header">Почему мы ?</h2>
                <div className="finorg-decription">
                    <div className="why-we-item">
                        <figure className="why-we-article">
                            <img src={coinsImage} width="110" height="110" alt="Стабильные заявки" className="why-we-article-img" />
                            <figcaption className="why-we-caption">
                                <h4 className="why-we-article-header">Стабильные заявки</h4>
                                <p className="why-we-article-text">Предоставляем стабильный поток заявок на финансовые продукты</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="why-we-item">
                        <figure className="why-we-article">
                            <img src={monitorImage} width="110" height="110" alt="Взаимодействие" className="why-we-article-img" />
                            <figcaption className="why-we-caption">
                                <h4 className="why-we-article-header">Взаимодействие</h4>
                                <p className="why-we-article-text">В едином интерфейсе Вы сможете взаимодействовать с заявками</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="why-we-item">
                        <figure className="why-we-article">
                            <img src={commentImage} width="110" height="110" alt="Коммуникация" className="why-we-article-img" />
                            <figcaption className="why-we-caption">
                                <h4 className="why-we-article-header">Коммуникация</h4>
                                <p className="why-we-article-text">Вы получаете новый канал общения с бизнесом</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="why-we-item">
                        <figure className="why-we-article">
                            <img src={clockImage} width="110" height="110" alt="Скорость" className="why-we-article-img" />
                            <figcaption className="why-we-caption">
                                <h4 className="why-we-article-header">Скорость</h4>
                                <p className="why-we-article-text">Быстро реагируем на ваши запросы</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div className="finorg-be-partner-button">
                    <Link to="/uc" className="page-button-fin be-partner-button-fin">
                    <span className="page-button-text be-partner-button-text">
                        Стать партнёром
                    </span>
                    </Link>
                </div>
        </section>
        </>
    );
}

export default ToFinorg;