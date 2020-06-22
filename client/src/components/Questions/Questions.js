import React from "react";
import "./Questions.css";
import { connect } from 'react-redux';
import Quest from "./../Quest/Quest";
import QuestPopUp from "./../QuestPopUp/QuestPopUp";
import {toggleAnswerShow} from "./../../store/actions/faqActions";

const QuestionAnswer = ({faqList, tglAnswerShow})  => {

    let [popUpOpen, setPopUpOpen] = React.useState(false)

    const toggleQuest = id => {
        tglAnswerShow(id);
    }

    const togglePopUp = () => {
        setPopUpOpen(
            popUpOpen = !popUpOpen
        )
    }

    return (
        <div className="container-fluid">
            <div className="block-main-bg">
                <div className="questions">
                    <div className="home-horizontal"> </div>
                    <h3 className="questions__head">Вопрос - ответ</h3>
                    <div className="questions__container">
                        {
                            faqList.map(quest => {
                                return <Quest quest={quest} key={quest.id} changeVisible={toggleQuest} />
                            })
                        }
                    </div>
                    <div className="home-button {/*questions__btn*/}" onClick={() => togglePopUp()}>
                        <span className="{/*questions__btn-text*/}">Задать вопрос</span>
                    </div>
                    <QuestPopUp popUpOpen={popUpOpen} togglePopUp={togglePopUp} toggleVisiblePop={togglePopUp}/>
                </div>
            </div> 
        </div>
    )
}

const mapStateToProps = state => {
	return {
        faqList: state.faq.faq,
	}
}

const mapDispatchToProps = dispatch => {
    return {
        tglAnswerShow: (id) => {
            dispatch(toggleAnswerShow(id));
        },
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(QuestionAnswer);