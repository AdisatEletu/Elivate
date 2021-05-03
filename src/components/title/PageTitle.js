import React from "react";

const PageTitle = ({ text, count, hideBack,classNames }) => {
  return (
    <div className={`d-sm-flex align-centermt-3 ${classNames}`} data-testid={"title"} style={{height: "70px"}}>
      {!hideBack && (
        <i
          className={'fa fa-arrow-left mr-30 pointer'} data-testid={"page"}
          onClick={() => window.history.go(-1)}
        />
      )}{' '}
      <div className='black-color  bigTitle  fw-400'>
        {`${text || ''} `}  {count ? <span className={'h2 mb-0 black-color page-title-count count-border'} style={{borderRadius:"10px"}}>{`${count} `}</span> : ""}
      </div>
    </div>
  )
};

export default PageTitle
