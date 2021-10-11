import React from "react";
import { NavLink } from "react-router-dom";
const Privacy = () => {

  return (
    <div className="container">
      <div className="d-flex align-items-center flex-column  justify-content-center">
        <img src={require("../../assets/privacy.png")} height={214} />
        <div className="biggestText mt-2 mb-2 text-align-center">
          Privacy Policy
        </div>
        <div className="grey-color paragraph">Last revised: 16/07/2021</div>
      </div>

      <div className="grey-color mt-4">
        <div>
          ELIVATE 9JA is aware that your privacy is very important. Hence we
          undertake that all the information provided by our participants on our
          website <NavLink to= "/">(www.elivate9ja.com)</NavLink> are
          secured and private. Hereunder is a list of the personal details we
          request from our participants:
        </div>
        <br />
        <ol className="mt-3 mb-5">
          <li>Your Names</li>
          <li>Your Email</li>
          <li>Your Phone Number</li>
          <li>Age</li>
          <li>Sex</li>
          <li>State & LGA</li>
        </ol>
        <div>
          Your Names are required in order to verify the information provided in
          case of sharp practices that are not in line with the extant laws of
          Nigeria.
        </div>
        <br />
        <div>Your Email is required for online notification purposes.</div>
        <br />
        <br />
        <div>
          Your Phone number serves as your subsequent login information and
          personal identifier linking you to all the above information. This
          unique identifier (your Nigerian phone number) will be verified upon
          registration with a One-Time-Pass (OTP).
        </div>
        <br />
        <br />
        <div>
          Your Phone number serves as your subsequent login information and
          personal identifier linking you to all the above information. This
          unique identifier (your Nigerian phone number) will be verified upon
          registration with a One-Time-Pass (OTP).
        </div>
        <br/>
        <div>
          Your information will not be shared with unauthorised persons or
          entities. Adequate measures are in place to safeguard your information
          and ensure the confidentiality of your personal information.
        </div>
        <br/>
        <div>
          We do not handle Payment Collection/Settlement platform where you are
          required to enter your Bank Credit/Debit Card information for
          registration payments. It is wholly handled by an accredited secured
          payment platform approved by the Central Bank of Nigeria for online
          payment collection and settlement.
        </div>
        <br/>
        <div>
          By signing up on elivate9ja.com and using our mobile application, you
          agree that your information may be used for the above purposes.
          Changes to our privacy statement will be done without prior notice to
          you and such information will be communicated to you accordingly.
          These changes will be deemed acceptable by you after you have received
          notice of it.
        </div>
        <br/>
        <div>
          Should you send us correspondence including emails and letters, we
          will retain such information in the records of your account. We will
          also retain customer service correspondence and other correspondence
          from elivate9ja.com to you. The rationale for this retention is to
          keep records of our relationship, measure and improve customer service
          and to investigate potential fraud and violations of our User
          Agreement. We may, over time, delete these records if permitted by
          law. From time to time, we may offer optional questionnaires and
          surveys to our users for such purposes as collecting demographic
          information or assessing users' interests and needs.
        </div>
        <br/>
        <br/>
        <br/>
        <div>
          Adequate information on why such information may be required will be
          made available.
        </div>
        <br/>
        <div>
          We are committed to managing customer information with the highest
          standards of information security. We use computer safeguard such as
          firewalls and data encryption, enforce physical access to our
          buildings and files. Authorised access to your personal information is
          granted only to employees who require it to fulfil their job
          responsibilities.
        </div>
        <br/>
        <br/>
        <br/>
        <div>
          The security of your elivate9ja.com account also rests on the
          protection of your PASSWORD. You should not share your PASSWORD with
          anyone and no employee of elivate9ja.com.
        </div>
        <br/>

        <div>
          Should you share your password with any third parties, such third
          parties will have access to your account and your personal information
          and you may be responsible for any actions taken using this
          information. In the event you suspect a third party has gained access
          to your password, please log in to your elivate9ja.com profile, change
          it and promptly notify support@elivate9jaonline.
        </div>
        <br/>
        <br/>
        <br/>
        <div>
          We are responsible for ensuring that our day-to-day procedures with
          this Privacy Policy are adhered to. Should you have any questions
          about this privacy statement, information services or your
          transactions on our platform, you can contact us via our customer
          helplines or by email to support@elivate9jaonline.
        </div>
      </div>
    </div>
  );
};
export default Privacy;
