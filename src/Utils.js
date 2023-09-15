import React from "react";

function Button({type="white", text="Not Text", size="little", chevron="none", round}) {

    // class
    let cl = "";
    switch(type) {
    case "white": 
        cl = "Button bc-btn white-btn";
        break;
    case "orange": 
        cl = "Button bc-btn orange-btn";
        break;
    default:
        cl = "Button bc-btn white-btn";
        break;
    }

    // button size
    switch(size) {
    case "little": 
        cl += " little-btn";
        break;
    case "big": 
        cl += " big-btn";
        break;
    default:
        cl += " little-btn";
        break;
    }

    // chevron
    switch (chevron) {
    case "right":
        text += " >>";
        break;
    case "left":
        text += " <<";
        break;
    default:
        break;
    }

    // round
    if (round) {
        cl += " round-btn";
    }

    return(
            <button className={cl}> {text} </button>
        )
}

function SectionTitle({title="My Big Title"}) {
    return(
        <div className="SectionTitle"> {title} </div>
        )
}

function PlusSvg(width='80px', height="auto", fill1="none", fill2="#98C6C9", stroke="#EF6A40") {
    return(
        <svg width={width} height={height} viewBox="0 0 32 32" version="1.1">
        <defs>
        </defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill={fill1} fillRule="evenodd">
                <g id="Icon-Set-Filled" transform="translate(-466.000000, -1089.000000)" fill={fill2}>
                    <path d="M488,1106 L483,1106 L483,1111 C483,1111.55 482.553,1112 482,1112 C481.447,1112 481,1111.55 481,1111 L481,1106 L476,1106 C475.447,1106 475,1105.55 475,1105 C475,1104.45 475.447,1104 476,1104 L481,1104 L481,1099 C481,1098.45 481.447,1098 482,1098 C482.553,1098 483,1098.45 483,1099 L483,1104 L488,1104 C488.553,1104 489,1104.45 489,1105 C489,1105.55 488.553,1106 488,1106 L488,1106 Z M482,1089 C473.163,1089 466,1096.16 466,1105 C466,1113.84 473.163,1121 482,1121 C490.837,1121 498,1113.84 498,1105 C498,1096.16 490.837,1089 482,1089 L482,1089 Z">
                    </path>
                </g>
            </g>
    </svg>
        );
}
function ListSvg(width='80px', height="auto", stroke="#E2A432") {
    return(
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
        <path d="M8 6L21 6.00078M8 12L21 12.0008M8 18L21 18.0007M3 6.5H4V5.5H3V6.5ZM3 12.5H4V11.5H3V12.5ZM3 18.5H4V17.5H3V18.5Z" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        )
}
function HeartSvg(width='80px', height="auto", fill="#EF6A40", stroke="#EF6A40") {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        );
}


function DrinkSvg (width='40px', height="auto", fill="#EF6A40", stroke="#EF6A40") {
  return(
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 30.9998H25M18 30.9998V17.9998L29 6.99981H7L16 15.9998M12.2051 4.01351C11.1701 2.21251 9.2261 0.999512 7.0001 0.999512C3.6861 0.999512 1.0001 3.68651 1.0001 6.99951C1.0001 10.3135 3.6861 12.9995 7.0001 12.9995C8.6561 12.9995 10.1561 12.3275 11.2421 11.2425M29 0.999812L23 6.99981" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
  );
}

function SkillSvg (width='40px', height="auto", fill="none", stroke="#EF6A40")  {

  return (
    <svg fill="#000000" width={width} height={height} viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg">
    <path d="M30,30H22V4h8Zm-6-2h4V6H24Z"/>
    <path d="M20,30H12V12h8Zm-6-2h4V14H14Z"/>
    <path d="M10,30H2V18h8Z"/>
    <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" fill={fill} width="32" height="32"/>
    </svg>
  );
}

function FlavorSvg (width='40px', height="auto", fill="#EF6A40", stroke="#EF6A40")  {
  return (
    <svg version="1.1" width={width} height={height} viewBox="0 0 512 512" >
    <g>
    <path d="M414.281,318.906c5.844-89.063-15.031-197.047-55.781-300.5C354.578,4.594,351.781,1.797,350.781,0
    l-35.141,8.781c3.203,5.781,11,39.953,11,49.188c0,95.469-61.016,179.156-120.109,236.563
    c-17.719-15.219-40.734-24.469-65.938-24.469c-55.969,0-101.344,45.375-101.344,101.344c0,56,45.375,101.375,101.344,101.375
    s101.359-45.375,101.359-101.375c0-18.688-5.156-36.156-13.984-51.188c51.75-54.172,102.656-127.844,123.641-207.531
    c23.188,72.25,32.094,138.063,26.578,196.938c-2.25-0.156-4.5-0.344-6.781-0.344c-55.969,0-101.359,45.375-101.359,101.359
    S315.438,512,371.406,512S472.75,466.625,472.75,410.641C472.75,370.016,448.813,335.078,414.281,318.906z M107.813,359.891
    c-13.875,0-25.125-11.234-25.125-25.125c0-13.859,11.25-25.109,25.125-25.109s25.141,11.25,25.141,25.109
    C132.953,348.656,121.688,359.891,107.813,359.891z M342.781,410.141c-15.375,0-27.844-12.453-27.844-27.844
    c0-15.359,12.469-27.828,27.844-27.828s27.828,12.469,27.828,27.828C370.609,397.688,358.156,410.141,342.781,410.141z"/>
    </g>
    </svg>
  );
}


export {Button, SectionTitle, PlusSvg, HeartSvg, ListSvg, SkillSvg, FlavorSvg, DrinkSvg };
