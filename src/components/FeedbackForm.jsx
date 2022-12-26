import Card from "./shared/Card";
import {useState} from "react";

function FeedbackForm() {
    const [text, setText] = useState('')
    const handleTextChange = (e) => {
        console.log(e.target.value);
    }
    return (
        <Card>
            <form>
                <h2>How Would You Rate Your Service With Us?</h2>
                {/* @Todo - Rating Selece Component  */}
                <div className="input-group">
                    <input onChange={handleTextChange} value={text} type="text" placeholder={"Write A Review"}/>
                    <button type="submit">Send</button>
                </div>
            </form>
        </Card>
    );
}

export default FeedbackForm;