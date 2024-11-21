import "./Contact.css";
export default function Contact() {

  return (
    <>
      <div className="info">
      </div>
      <div className="contactInfo">
        <div className="contactNum">
          <div className="number">
              <img src="./images/phone.png" alt="" />
            <num>
              <p>For more information</p>
              <p className="ph_num">+963 940274352</p>
            </num>
          </div>
          <div className="number">
              <img src="./images/email.png" alt="" />
            <num>
              <p>Email</p>
              <a href="https://mail.google.com/mail/u/0/#inbox">
              duaadmh9@gmail.com
              </a>
            </num>
          </div>
        </div>
      </div>
    </>
  );
}
