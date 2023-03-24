import './App.css'
import React, { useState } from 'react';
function App() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleNavButtonClick = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const [title, setTitle] = useState('');

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      addItem();
    }
  }

  function addItem() {
    if (!title) {
      return;
    }

    // const newItem = {
    //   title,
    //   checked: false
    // };

    // TODO: call displayItem and storeItems functions

    setTitle('');
  }
  return (
   <main>
        <header className="list-header">
            <svg width="24" height="24" viewBox="0 e 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="list-header__icon">
                <g id="Iconly/Light/Paper">
                    <g id="Paper">
                        <path id="Stroke 1" fill-rule="evenodd" clip-rule="evenodd"
                            d="M14.7378 2.76181H8.8848C6.0048 2.75381 4.2998 4.41181 4.2508 6.49081V17.2038C4.2848 19.3168 5.8798 21.0678 7.9928 21.1148C8.0238 21.1148 8.0538 21.1158 8.0848 21.1148H16.0738C18.1678 21.0298 21.0298 19.8178 19.2998 19.8028V8.03781L14.7378 2.761812"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path id="Stroke 3" d="M14.4751 2.75V5.659C14.4751 7.079 15.6231 8.23 17.0431 8.234H19.7981"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path id="Stroke 5" d="M14.2881 15.3585H8.88806" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path id="Stroke 7" d="M12.2432 11.606H8.88721" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                </g>
            </svg>


            <h1>To Do List</h1>
        </header>
        <section className="list-items">
            <template id="list-item-template">
                            <li className="list-item">
                                <div className="list-item__checkmark">
                                    <svg width="8" height="8" viewBox="0 e 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 5L3 6.5L7 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className="list-item__title"><span>Todo Item</span></div>
                                <a  className="list-item__important">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" enable-background="new 0 0 24 24" viewBox="0 0 24 24"
                                            id="star">
                                            <path
                                                d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
                                                    	C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
                                                    	c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"
                                               fill="transparent" stroke-width="1.5" stroke="currentColor">
                                            </path>
                                        </svg>
                                </a>
                                <div className="list-item__menu-wrapper">
                                    <a  className="list-item__menu-button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" id="category">
                                            <path fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="1.5"
                                                d="M14.2855094 9.76996262e-15L17.5521036 9.76996262e-15C18.9036211 9.76996262e-15 20 1.10589743 20 2.47018211L20 5.76410278C20 7.12735391 18.9036211 8.23428489 17.5521036 8.23428489L14.2855094 8.23428489C12.9329672 8.23428489 11.8365883 7.12735391 11.8365883 5.76410278L11.8365883 2.47018211C11.8365883 1.10589743 12.9329672 9.76996262e-15 14.2855094 9.76996262e-15zM2.44892104 9.76996262e-15L5.71449064 9.76996262e-15C7.06703281 9.76996262e-15 8.16341169 1.10589743 8.16341169 2.47018211L8.16341169 5.76410278C8.16341169 7.12735391 7.06703281 8.23428489 5.71449064 8.23428489L2.44892104 8.23428489C1.09637888 8.23428489 3.55271368e-15 7.12735391 3.55271368e-15 5.76410278L3.55271368e-15 2.47018211C3.55271368e-15 1.10589743 1.09637888 9.76996262e-15 2.44892104 9.76996262e-15zM2.44892104 11.7657151L5.71449064 11.7657151C7.06703281 11.7657151 8.16341169 12.8716125 8.16341169 14.2369308L8.16341169 17.5298179C8.16341169 18.8941026 7.06703281 20 5.71449064 20L2.44892104 20C1.09637888 20 3.55271368e-15 18.8941026 3.55271368e-15 17.5298179L3.55271368e-15 14.2369308C3.55271368e-15 12.8716125 1.09637888 11.7657151 2.44892104 11.7657151zM14.2855094 11.7657151L17.5521036 11.7657151C18.9036211 11.7657151 20 12.8716125 20 14.2369308L20 17.5298179C20 18.8941026 18.9036211 20 17.5521036 20L14.2855094 20C12.9329672 20 11.8365883 18.8941026 11.8365883 17.5298179L11.8365883 14.2369308C11.8365883 12.8716125 12.9329672 11.7657151 14.2855094 11.7657151z"
                                                transform="translate(2 2)"></path>
                                        </svg>
                                    </a>
                                    <div className="list-item__menu-base">
                                        <a href=";" className="list-item__delete-button">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Iconly/Light/Delete">
                                                <g id="Delete">
                                                    <path id="Stroke 1"
                                                        d="M19.325 9.4682C19.325 9.4682 18.782 16.2032 18.467 19.0402C18.317 20.3952 17.48 21.1892 16.109 21.2142C13.5 21.2612 10.888 21.2642 8.28003 21.2092C6.96103 21.1822 6.13803 20.3782 5.99103 19.0472C5.67403 16.1852 5.13403 9.4682 5.13403 9.4682"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path id="Stroke 3" d="M20.7082 6.23969H3.75024" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path id="Stroke 5"
                                                        d="M17.4406 6.23967C16.6556 6.23967 15.9796 5.68467 15.8256 4.91567L15.5826 3.69967C15.4326 3.13867 14.9246 2.75067 14.3456 2.75067H10.1126C9.53358 2.75067 9.02558 3.69967 8.87558 4.91567L8.63258 5.68467C8.47858 5.68467 7.80258 6.23967 7.01758 6.23967"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </g>
                                            </g>
                                        </svg>
                                        </a>
                                        <a >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path fill="currentColor"
                                                    d="M20 3h-1V1h-2v2H7V1H5v2H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM5 8h14v10H5V8zm2 2v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm-8 4v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z" />
                                            </svg>

                                        </a>
                                        <a href=";">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" id="document">
                                                <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="1.5" transform="translate(3 2)">
                                                    <line x1="12.716" x2="5.496" y1="14.223" y2="14.223"></line>
                                                    <line x1="12.716" x2="5.496" y1="10.037" y2="10.037"></line>
                                                    <line x1="8.251" x2="5.496" y1="5.86" y2="5.86"></line>
                                                    <path
                                                        d="M12.9086,0.7498 C12.9086,0.7498 5.2316,0.7538 5.2196,0.7538 C2.4596,0.7708 0.7506,2.5868 0.7506,5.3568 L0.7506,14.5528 C0.7506,17.3368 2.4726,19.1598 5.2566,19.1598 C5.2566,19.1598 12.9326,19.1568 12.9456,19.1568 C15.7056,19.1398 17.4156,17.3228 17.4156,14.5528 L17.4156,5.3568 C17.4156,2.5728 15.6926,0.7498 12.9086,0.7498 Z">
                                                    </path>
                                                </g>
                                            </svg>
                                        </a>
                                        <a href=";" className="list-item__close">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="close" fill="currentColor">
                                                <path
                                                    d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z">
                                                </path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </li>
            </template>
           <ul>

           </ul>
        </section>
        <section className={`add-panel ${isPanelOpen ? 'open' : ''}`}>
            <div>
                <input className="add-panel__input" type="text" value={title} onChange={handleTitleChange} onKeyDown={handleKeyDown} />
                <button className="add-panel__button" onClick={addItem}> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor"  enable-background="new 0 0 32 32" viewBox="0 0 32 32" id="send">
                        <path
                            d="M31.48959,2.90819c-0.03976-1.04205-1.19317-1.68439-2.12529-1.26078C29.36432,1.64735,1.34714,14.91867,1.34714,14.91867c-1.03748,0.4537-1.15173,2.02162-0.17779,2.61244c-0.00006,0,6.56647,4.29322,6.56647,4.29322v7.16302c-0.03842,1.29145,1.66795,2.01355,2.56215,1.06113c-0.00003,0.00007,3.96029-3.95982,3.96029-3.95982s5.54258,3.62374,5.54258,3.62374c0.24722,0.16172,0.53353,0.24478,0.82179,0.24478c0.61638,0.00498,1.2002-0.39932,1.40809-0.98157c0,0.00001,9.38467-25.45261,9.38467-25.45261C31.48575,3.3223,31.51829,3.11498,31.48959,2.90819z M22.81887,8.06956L10.70725,20.18081l-5.65374-3.69624L22.81887,8.06956z M10.73767,25.36404V23.7869l0.95377,0.62355L10.73767,25.36404z M19.86631,26.16873l-6.5923-4.30983L26.23356,8.89966L19.86631,26.16873z">
                        </path>
                    </svg>
                </button>
            </div>
        </section>
        <nav className="navbar">
            <a >
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="home">
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
        d="M6.65721519,18.7714023 L6.65721519,15.70467 C6.65719744,14.9246392 7.29311743,14.2908272 8.08101266,14.2855921 L10.9670886,14.2855921 C11.7587434,14.2855921 12.4005063,14.9209349 12.4005063,15.70467 L12.4005063,15.70467 L12.4005063,18.7809263 C12.4003226,19.4432001 12.9342557,19.984478 13.603038,20 L15.5270886,20 C17.4451246,20 19,18.4606794 19,16.5618312 L19,16.5618312 L19,7.8378351 C18.9897577,7.09082692 18.6354747,6.38934919 18.0379747,5.93303245 L11.4577215,0.685301154 C10.3049347,-0.228433718 8.66620456,-0.228433718 7.51341772,0.685301154 L0.962025316,5.94255646 C0.362258604,6.39702249 0.00738668938,7.09966612 0,7.84735911 L0,16.5618312 C0,18.4606794 1.55487539,20 3.47291139,20 L5.39696203,20 C6.08235439,20 6.63797468,19.4499381 6.63797468,18.7714023 L6.63797468,18.7714023"
        transform="translate(2.5 2)"></path>
</svg>
            </a>
            <a >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star">
                <path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
            	C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
            	c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z" fill="none" stroke-width="1.5" stroke="currentColor">
                </path>
            </svg>


            </a>
            <a className={`add-button ${isPanelOpen ? 'open' : ''}`} onClick={handleNavButtonClick}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="15" stroke="currentColor" stroke-width="2" />
                    <rect x="15" y="8" width="2" height="16" rx="1" fill="currentColor" />
                    <rect x="24" y="15" width="2" height="16" rx="1" transform="rotate(90 24 15)" fill="currentColor" />
                </svg>
            </a>
            <a >
          <svg width="24" height="24" style={{color:'white'}} viewBox="0 e 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="list-header__icon">
                <g id="Iconly/Light/Paper">
                    <g id="Paper">
                        <path id="Stroke 1" fill-rule="evenodd" clip-rule="evenodd"
                            d="M14.7378 2.76181H8.8848C6.0048 2.75381 4.2998 4.41181 4.2508 6.49081V17.2038C4.2848 19.3168 5.8798 21.0678 7.9928 21.1148C8.0238 21.1148 8.0538 21.1158 8.0848 21.1148H16.0738C18.1678 21.0298 21.0298 19.8178 19.2998 19.8028V8.03781L14.7378 2.761812"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path id="Stroke 3" d="M14.4751 2.75V5.659C14.4751 7.079 15.6231 8.23 17.0431 8.234H19.7981"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path id="Stroke 5" d="M14.2881 15.3585H8.88806" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path id="Stroke 7" d="M12.2432 11.606H8.88721" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                </g>
            </svg>
            </a>
            <a >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="setting">
                    <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="1.5" transform="translate(2.5 1.5)">
                        <path
                              d="M18.3066362,6.12356982 L17.6842106,5.04347829 C17.1576365,4.12955711 15.9906873,3.8142761 15.0755149,4.33867279 L15.0755149,4.33867279 C14.6398815,4.59529992 14.1200613,4.66810845 13.6306859,4.54104256 C13.1413105,4.41397667 12.7225749,4.09747295 12.4668193,3.66132725 C12.3022855,3.38410472 12.2138742,3.06835005 12.2105264,2.74599544 L12.2105264,2.74599544 C12.2253694,2.22917739 12.030389,1.72835784 11.6700024,1.3576252 C11.3096158,0.986892553 10.814514,0.777818938 10.2974829,0.778031878 L9.04347831,0.778031878 C8.53694532,0.778031878 8.05129106,0.97987004 7.69397811,1.33890085 C7.33666515,1.69793166 7.13715288,2.18454839 7.13958814,2.69107553 L7.13958814,2.69107553 C7.12457503,3.73688099 6.27245786,4.57676682 5.22654465,4.57665906 C4.90419003,4.57331126 4.58843537,4.48489995 4.31121284,4.32036615 L4.31121284,4.32036615 C3.39604054,3.79596946 2.22909131,4.11125048 1.70251717,5.02517165 L1.03432495,6.12356982 C0.508388616,7.03634945 0.819378585,8.20256183 1.72997713,8.73226549 L1.72997713,8.73226549 C2.32188101,9.07399614 2.68650982,9.70554694 2.68650982,10.3890161 C2.68650982,11.0724852 2.32188101,11.704036 1.72997713,12.0457667 L1.72997713,12.0457667 C0.820534984,12.5718952 0.509205679,13.7352837 1.03432495,14.645309 L1.03432495,14.645309 L1.6659039,15.7345539 C1.9126252,16.1797378 2.3265816,16.5082503 2.81617164,16.6473969 C3.30576167,16.7865435 3.83061824,16.7248517 4.27459956,16.4759726 L4.27459956,16.4759726 C4.71105863,16.2212969 5.23116727,16.1515203 5.71931837,16.2821523 C6.20746948,16.4127843 6.62321383,16.7330005 6.87414191,17.1716248 C7.03867571,17.4488473 7.12708702,17.764602 7.13043482,18.0869566 L7.13043482,18.0869566 C7.13043482,19.1435014 7.98693356,20.0000001 9.04347831,20.0000001 L10.2974829,20.0000001 C11.3504633,20.0000001 12.2054882,19.1490783 12.2105264,18.0961099 L12.2105264,18.0961099 C12.2080776,17.5879925 12.4088433,17.0999783 12.7681408,16.7406809 C13.1274382,16.3813834 13.6154524,16.1806176 14.1235699,16.1830664 C14.4451523,16.1916732 14.7596081,16.2797208 15.0389017,16.4393593 L15.0389017,16.4393593 C15.9516813,16.9652957 17.1178937,16.6543057 17.6475973,15.7437072 L17.6475973,15.7437072 L18.3066362,14.645309 C18.5617324,14.2074528 18.6317479,13.6859659 18.5011783,13.1963297 C18.3706086,12.7066935 18.0502282,12.2893121 17.6109841,12.0366133 L17.6109841,12.0366133 C17.17174,11.7839145 16.8513595,11.3665332 16.7207899,10.876897 C16.5902202,10.3872608 16.6602358,9.86577384 16.9153319,9.42791767 C17.0812195,9.13829096 17.3213574,8.89815312 17.6109841,8.73226549 L17.6109841,8.73226549 C18.5161253,8.20284891 18.8263873,7.04344892 18.3066362,6.13272314 L18.3066362,6.13272314 L18.3066362,6.12356982 Z">
              </path>
              
                        <circle cx="9.675" cy="10.389" r="2.636"></circle>
                    </g>
                </svg>
            </a>
        </nav>
    </main>
  );
}

export default App;
