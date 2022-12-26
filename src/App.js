import {v4 as uuidv4} from 'uuid';
import {BrowserRouter as Router, Route, Routes, NavLink} from "react-router-dom";
import Header from "./components/Header";
import {useState} from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Card from "./components/shared/Card";
import Post from "./components/Post";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])
    }
    const deleteFeedback = (id) => {
        if (window.confirm('Are you Sure you want to DELETE?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    return (<Router>
        <Header/>
        <div className={"container"}>
            <Routes>
                <Route exact path={'/'} element={
                    <>
                        <FeedbackForm handleAdd={addFeedback}/>
                        <FeedbackStats feedback={feedback}/>
                        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                    </>
                }>
                </Route>
                <Route path={'/about'} element={<AboutPage/>}/>
                <Route path={'/post/*'} element={<Post/>}/>
            </Routes>
            <Card>
                <NavLink to={"/"} activeclassname={"active"}>
                    Home
                </NavLink>
                <NavLink to={"/about"} activeclassname={"active"}>
                    About
                </NavLink>
            </Card>
            <AboutIconLink/>
        </div>
    </Router>)
}

export default App;