import Card from "./shared/Card";
import {useState} from "react";
import Button from "./shared/Button";

function FeedbackForm() {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Text Must Be At Least 10 Characters')
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
        setText(e.target.value);
    }
    return (
        <Card>
            <form>
                <h2>How Would You Rate Your Service With Us?</h2>
                {/* @Todo - Rating Select Component  */}
                <div className="input-group">
                    <input onChange={handleTextChange} value={text} type="text" placeholder={"Write A Review"}/>
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className={"message"}>{message}</div>}
            </form>
        </Card>
    );
}

export default FeedbackForm;