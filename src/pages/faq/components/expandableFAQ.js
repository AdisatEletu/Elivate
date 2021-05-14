import React, {useState} from "react";
import './expandableFAQ.css'

const ExpandableFAQ = ({question, description}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const onClick = () => {
    setIsOpen(!isOpen)
  };
  
  
  return (
    <div
      className={`${isOpen ? 'active-faq-holder light-blue-bg' : "ex-faq-holder"} d-flex justify-content-center flex-column mt-3 mb-3`}
      onClick={onClick}>
      <div className={'d-flex  justify-content-between align-items-center col-md-12'}>
        <div className={'off-black-color header3regular'}>
          {question}
        </div>
        {isOpen ? <img src={require('../../../assets/icons/minus-circle.svg')} alt={'close'}/> :
          <img alt={'close-icon'} src={require("../../../assets/icons/plus-cirle.svg")}/>}
      </div>
      {isOpen ?
        <div className={'animate ease-out grey-color paragraph mt-2 col-md-10'}>
          {description}
        </div>
        :
        ""
        
      }
    </div>
  )
};
export default ExpandableFAQ