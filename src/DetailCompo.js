import * as React from 'react';

import {Button, SkillSvg, FlavorSvg, DrinkSvg } from './Utils.js';

function DetailContainer ({ children }) {
  return (
    <div style={{padding: '5px 30px'}} > {children} </div>
    )
}

function Breadcrumb({paths}) {
  const breadcrumbs = paths.map(( element, key) => 
    <span key={key} className="breadcrumbs_text"> { element } >> </span>
  )
  return(
    <div className='Breadcrumb'>
      {breadcrumbs}
    </div>
  )
}

function Feat ({title, desc, color="black", svg}) {
    return(
        <div className='Feat'>
          {svg}
          <div>
              <div style={{
                fontSize: '0.9em',
                textTransform: 'uppercase',
                fontWeight: 'bold'
              }} > {title} </div>
              <div style={{color: '#EF6A40'}}> {desc} </div>
          </div>
        </div>
    )
}


function Detail ( {title, desc } ) {
  return(
    <div >
      <div className="Detail_title"> { title } </div>
      <div className='Detail_content'> 
        <div className='Detail_FeatList'>
          <Feat 
          title={"Main Spirit"}
          desc={"Tequilla"}
          svg={DrinkSvg()}
          />
          <Feat 
            title={"Flavor"}
            desc={"Tequilla"}
            svg={FlavorSvg()}
          />
          <Feat 
          title={"Skill Level"}
          desc={"Beginner"}
          svg={SkillSvg()}
          />
        </div>
        <div className='Detail_desc'> {desc} </div> 
        <div className='btn-group-vertical'> 
            <Button text="Save" type="orange" size="little" />
            <Button text="Print" type="orange" size="little" />
        </div>
      </div>
    </div>
  )
  }

export { Breadcrumb, Detail, DetailContainer };