import React from 'react';

export const EmptyData =()=>{
           return(
            <div className={'d-flex align-items-center flex-column justify-content-center empty-state'}>
              <img src={require('../assets/Elivate9ja/Empty State 17.png')} alt={'empty'}/>
              <div className={'paragraph grey-color'}>You currently have nothing here.</div>
            </div>
          )
}