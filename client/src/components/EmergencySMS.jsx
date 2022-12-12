import axios from "axios";
const url = `${process.env.REACT_APP_HOST}/api/send`;
const SMS = () => {

    return (
        <form action="/url" method="GET">
        <p>Type your message and hit submit to send a SMS:</p>
        <textarea name="message" id="userInputSMS"></textarea>
        <input type="button" value="Submit" className="submitBtn" onClick={() => {
        	let input = document.getElementById('userInputSMS');
		axios
      		.post(url, {
			msg: input.value,
			to: '+14066907119', 
		})
      		.then(() => console.log('Request Successful'))
      		.catch(err => {
        	console.error(err);})
	}}/>
        </form>
    )
  }
  
  export default SMS;
  
