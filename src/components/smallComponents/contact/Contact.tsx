import cStyle from "./Contact.module.css";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
const Contact = () =>{
  const form = useRef<any>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tqy5694', 'template_toehk2l', form.current, {
        publicKey: 'imB3RvdEzws1hPLe8',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSuccess(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsError(true);
        },
      );
  };

  return(
    <div className="content" id="contact">
      <div className={cStyle.contactCont}>
        <h1>Contact Me</h1>
        <div className={cStyle.contacts}>
      {isSuccess ? 
        <div className={cStyle.success}><h1>Message Sent</h1></div>
        :
        null
      }
      {
        isError ?
        <div className={cStyle.error}><h1>Message Not Sent</h1></div>
        :
        null
      }
          <form ref={form} onSubmit={sendEmail}>
            <div className={cStyle.username}>
              <input type="text" name="user_name" placeholder="UserName" required/>
            </div>
            <div className={cStyle.email}>
              <input type="email" name="user_email" placeholder="Email" required />
            </div>
            <div className={cStyle.message}>
              <textarea name="message" placeholder="Message" required/>
            </div>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}


export default Contact;