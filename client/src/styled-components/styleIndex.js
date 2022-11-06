import styled from 'styled-components'

const GeneralStyle = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Libre+Barcode+39+Text&family=Montserrat:ital,wght@1,500&family=Playfair+Display:ital,wght@1,800&display=swap');
  background: white;
  color: #000000;
  font-family: 'Montserrat';
  font-size: 18px;
`

const RentalContainerStyle = styled.div`
float: center;
justify-content: center;
margin-left: auto;
margin-right: auto;
  h1{
    text-align: center;
    justify-content: center;
    background: white;
    color: green;
  };
  .rental {
    /* Add shadows to create the "card" effect */
    margin-left: auto;
    margin-right: auto;
    /* padding: 50px; */
    text-align: center;
    justify-content: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    flex-wrap: wrap;
    width: 50%;
    height: 180px;
    font-size: 12px;
    justify-content: center;
  };
  img {
    width: 10%;
    height: auto;
  }
  ` 

const CardContainer = styled.div`
float: center;
justify-content: center;
  h1{
    text-align: center;
    justify-content: center;
    background: white;
    color: green;
  }
  .card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    flex-wrap: wrap;
    width: 180px;
    height: 400px;
    font-size: 12px;
    justify-content: center;
  };
  .container {
      padding: 2px 16px;
      /* display: block; */
      float: left;
      height: auto;
    };
  img {
    width: 100%;
    height: 100%;
  }
  .card button {
  border: none;
  outline: 0;
  padding-top: 20px;
  padding-bottom: 25px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  height: 5%;
}
.card button:hover {
  opacity: 0.7;
  color: #fb5958;
};
.card .wishlist {
  border: none;
  outline: 0;
  padding-top: 20px;
  padding-bottom: 25px;
  color: white;
  background-color: #000;
  text-align: center;
  width: 100%;
  height: 5%;
}
.backpackContainer button {
  border: none;
  outline: 0;
  padding-top: 20px;
  padding-bottom: 25px;
  color: white;
  background-color: gray;
  text-align: center;
  margin-left: 50%;
  cursor: pointer;
  float: center;
  flex-wrap: wrap;
  display: block;
  /* width: 100%; */
  height: 5%;
}
.backpackContainer button:hover {
  opacity: 0.7;
  color: #fb5958;
};


`

const NavBar = styled.div`
margin-bottom: 3em;
.backpack{
  width: 25%;
  height: 25%;
  float: center;
  padding: 0em;
};
  /* body {
    background-color: #63D6E0;
  }; */
  nav {
    
    float: right;
    margin-right: 0em;
    margin-left: 0em;
    background-color: #63D6E0;
}

  nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  nav ul li {
    float: left;
    position: relative 30px;
    /* background-color: #63D6E0; */
    /* padding: 0em;
    margin-right: 0em; */
  }
  nav ul li a {
    display: block;
    padding: 0 20px;
    
    line-height: 70px;
    background: #ffffff;
    color: #463f3f;
    text-decoration: none;
    /*
    The full path of this code is nav ul li a:not(:only-child):after. This means that the code will apply to any a tag in our nav list that is NOT an only child, aka any dropdown. The :after means it comes after the output of the tag. I’ve decided that to specify any nav item as a dropdown, it will be followed by a unicode arrow – ▾ (#9662).
    */
  }
  nav ul li a:hover {
    background: #f2f2f2;
    color: #fb5958;
  }
  nav ul li a:not(:only-child):after {
    padding-left: 4px;
    /* content: ' ▾'; */
  }
  nav ul li ul li {
    min-width: 190px;
  }
  nav ul li ul li a {
    padding: 15px;
    line-height: 20px;
  }

  .nav-dropdown-none {
    position: absolute;
    z-index: 1;
    /* Guarantees that the dropdown will display on top of any content. */
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
    display: none;
  }

  .nav-dropdown-display {
    position: absolute;
    z-index: 1;
    /* Guarantees that the dropdown will display on top of any content. */
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
    /* display: none; */
  }

  .nav-mobile {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    background: #fff;
    height: 70px;
    width: 70px;
  }

  @media only screen and (max-width: 800px) {
    .nav-mobile {
      display: block;
    }

    nav {
      width: 100%;
      padding: 70px 0 15px;
      
    }
    nav ul {
      display: none;
      
    }
    nav ul li {
      float: none;
      
    }
    nav ul li a {
      padding: 15px;
      line-height: 20px;
      
    }
    nav ul li ul li a {
      padding-left: 30px;
      
    }
  }
  #nav-toggle {
    position: absolute;
    left: 18px;
    top: 22px;
    cursor: pointer;
    padding: 10px 35px 16px 0px;
  }
  #nav-toggle span,
  #nav-toggle span:before,
  #nav-toggle span:after {
    cursor: pointer;
    border-radius: 1px;
    height: 5px;
    width: 35px;
    background: #463f3f;
    position: absolute;
    display: block;
    content: '';
    transition: all 300ms ease-in-out;
  }
  #nav-toggle span:before {
    top: -10px;
  }
  #nav-toggle span:after {
    bottom: -10px;
  }
  #nav-toggle.active span {
    background-color: transparent;
  }
  #nav-toggle.active span:before, #nav-toggle.active span:after {
    top: 0;
  }
  #nav-toggle.active span:before {
    transform: rotate(45deg);
  }
  #nav-toggle.active span:after {
    transform: rotate(-45deg);
  }

  @media screen and (min-width: 800px) {
    .nav-list {
      display: block !important;
    }
  }
  /* 
  .navigation – the outer wrapper for the navbar. Specifies the height and color, and will stretch the full width of the viewport.
  */
  .navigation {
    height: 70px;
    background: #ffffff;
    /* background-color: #63D6E0;
    padding-right: 10em; */
  }

  /*
  .nav-container – the inner wrapper for the navbar. Defines how far the actual content should stretch.
  */
  .nav-container {
    max-width: 1000px;
    margin: 0 auto;
  }

  .brand {
    position: absolute;
    padding-left: 20px;
    float: left;
    line-height: 70px;
    font-size: 3em;
    font-family: 'Libre Barcode 39 Text', cursive;
  }
  .brand a,
  .brand a:visited {
    color: #463f3f;
    text-decoration: none;
  }
`

export {
  GeneralStyle, NavBar, CardContainer, RentalContainerStyle
}


// const Header = styled.div`
// @import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Montserrat:ital,wght@1,500&family=Playfair+Display:ital,wght@1,800&display=swap');
//   background: white;
//   color: #000080;
//   position: fixed;
//   top: 0;
//   height: 100px;
//   line-height: 20px;
//   width: 100vw;
//   border-bottom:10.5px #E7717D;
//   .logo{
//         color:#000080;
//         text-decoration: none;
//         };
 
//   h1 {
//       line-height:50px;
//       display: flex;
//       flex: 70%;
//       color: #000080;
//       float: left;
//       margin-left: 28px;
//       font-size: 3em;
//       height: 15px;
//       letter-spacing: 1px;
//       font-family: "Bungee Shade";
//       /* font-style: italic; */
//         .logo{
//         color:#000080;
//         };
//     }

//   nav{
//     background-color:white;
//     display: block;
//     float: right;
//     font-size: 20px;
//     /* flex: 30%; */
//     /* top: 50px; */
//     justify-content: right;
//     padding: 20px;
//     margin-top: 25px;
//     display: inline-block;
//     text-align: right;
//     color: #000080;
//     font-style: bold;

//     .link{
//     color:black;
//     text-decoration: none;
//     };
//     .link:hover{
//       color:#E7717D;
//       /* background-color: #E7717D; */
//       text-decoration: none;
//     };
//     .link:active{
//       color:white;
//       text-decoration: none;
//     };
//   }
//   .circle{
//         align-content: center;
//         justify-content: center;
//         width: 30px;
//         height: 30px;
//         /* line-height: 20px; */
//         border-radius: 50%;
//         text-align: center;
//         color: white;
//         font-size: 30px;
//         padding: .5em;
//         /* border: 3px solid #000; */
//         background: #AFD275;
//     }
//     li{
//     color: white;
//     display: inline-block;
//     padding: 0px 10px;
//     margin: 2em;
//     /* border-radius: 50px; */
//     }
//     li:hover {
//     background-color: #C2B9B0;
//     color: white;
//     /* height:100%; */
//     }
    
// `

// const DashContainer = styled.div`
//     width: 90%;
//     margin-bottom: 5em;
//     margin: 3em;
//     justify-content: center;
//     align-items: center;
   
//     .negative{
//         background-color: #E7717D;
//         color: white;
//     } 
//     .positive{
//         background-color: #AFD275;
//         color: white;
//     }
//     .topBar{
//             color: white;
//             background-color: #C2CAD0;
//             /* float: center; */
//             display: flex;
//             justify-content: center;
//             height: 50px;
//             width: 97.5%;
//             margin-left: .5em;
//             align-items: center;     
//             border-radius: 5px;
//             padding: 0;
//     }
//     .left{
//         width: 60%;
//         height: 400px;
//         /* display: block; */
//         float: left;
//         display: flex;
//         justify-content: left;
//         align-content: center;
//         margin-left: 1em;
//         margin-bottom: 1em;
//         border: solid 3px #7E685A;
//         border-radius: 5px;
//         box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
//   }
//     .right{
//         width: 35%;
//         height: 400px;
//         float: right;
//         margin-right: 1em;
//         margin-bottom: 1em;
//         border: solid 3px #7E685A;
//         border-radius: 5px;
//         box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
//         align-content: center;
//         justify-content: center;
//         .daysLeft{
//             align-content: center;
//             justify-content: center;
//             margin-left: 45%;
//             margin-top: 0em;
//             width: 50px;
//             height: 50px;
//             line-height: 50px;
//             border-radius: 50%;
//             padding-bottom: 0;
//             text-align: center;
//             color: white;
//             font-style: bold;
//             /* border: 3px solid #000; */
//             background: #E7717D
//         }
//         button{
//             display:block;
//             width: 50%;
//             background-color:white;
//             color:#FEC90E;
//             border: 2px solid #FEC90E;
//             border-radius: 5px;
//             font-style: bolder;
//         }
//         button:hover{
//             background-color:#FEC90E;
//             color:white;
//             border: 2px solid white;
//         };
//         button:active{
//             background-color:#FEC90E;
//             color:white;
//             border: 2px solid white;
//             box-shadow: 5px 3px 3px gray;
//             font-style: bold;
//         }
//     }
// `


// const HomeContainer = styled.div`

//   margin: 2em;
//   padding-top: 85px;
//   h1{
//     font-family: "Playfair Display";
//   }
//   button{
//     background-color:#000080;
//     color:white;
//     border: 2px solid #E7717D;
//     border-radius: 25px;
//     font-style: bolder;
//     font-size: 20px;
//     font-family: "Playfair Display";
//     font-style: bolder;
//     padding: .5em;
//     width: 150px
//   }
//   button:hover{
//     background-color:white;
//     color:#000080;
//     border: 2px solid #E7717D;
//   };
//   button:active{
//     background-color:#E7717D;
//     color:white;
//     border: 2px solid white;
//     box-shadow: 5px 3px 3px gray;
//     font-style: bold;
//   };
// `

// const Container = styled.div`
//   width: 100%;
//   margin-left: 1em;
//   display: flex;
//   flex-wrap: wrap;
//   font-family: "Playfair Display";
// `

// const Card = styled.div`
//   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
//   /* transition: 0.3s; */
//   padding: 2px 16px;
//   border-radius: 25px;
//   margin: 1em;
//   margin-top: 0em;
//   width:180px;
//   justify-content: center;
//   h5{
//     flex-wrap: wrap;
//     padding: 2px 10px;
//     margin:1em;
//     background-color:#000080;
//     color: white;
//     font-family: "Montserrat", sans-serif;
//     font-style: italic;
//     font-size: 20px;
//     border-radius: 25px;
//   };
//   img{
//     width:100%;
//     filter: saturate(100%);
    
//   };
//   img:hover{
//     filter: saturate(200%);
//   };
//   h3{
//     height: 30px;
//   };
//   .stock{
//     background-color:#AFD275;
//     color:white
//   };
//   h4{
//     height: 20px;
//   };
//   h6{
//     font-family: "Montserrat", sans-serif;
//   };
//   p{
//     font-family: "Montserrat", sans-serif;
//   };
//   .linkbg{
//     color:white;
//   };
//   .link{
//     color:black;
//   };
//   .link:hover{
//     color:white;
//     background-color: #E7717D;
//   };
//   .link:active{
//     color:white;
//   };
//   .link:visited{
//     color:purple;
//   };
//   .deleteButton{
//     width: 100%;
//     background-color:white;
//     color:#AFD275;
//     border: 0px;
//     font-size: 25px;
//   };
//   .deleteButton:hover{
//     color:white;
//     font-size: 25px;
//   }
//   .otherButton{
//     display:block;
//     width: 100%;
//     background-color:white;
//     color:#AFD275;
//     border: 2px solid #AFD275;
//     border-radius: 5px;
//     font-style: bolder;
//   }
//   .otherButton:hover{
//     background-color:#AFD275;
//     color:white;
//     border: 2px solid white;
//   };
//   .otherButton:active{
//     background-color:#AFD275;
//     color:white;
//     border: 2px solid white;
//     box-shadow: 5px 3px 3px gray;
//     font-style: bold;
//   };
//   `


// const ProductFeatureContainer = styled.div`
//   height: auto;
//   /* line-height: 20px; */
//   width: 100%;
//   display: block;
//   font-family: "Playfair Display";
//   justify-content: center;
//   margin-left: 0;
//   margin-top: 4em;
//   padding-top: 60px;
// `

// const DropDown = styled.div`
//   width: 100%;
//   h4{
//     margin:.5em;
//   }
//   select{
//     margin-bottom: 1em;
//     position: relative;
//     background-color: #FEC90E;
//     font-family:"Montserrat";
//     color: white;
//     border: solid white;
//     border-radius: 6px;
//   }
// `

// const SearchStyle = styled.div`
//   width: 100%;
//   margin: .5em;
//   h4{
//     margin-bottom:.5em;
//   }
//   input[type=text] {
//     margin-right: .25em;
//     margin-bottom: 1em;
//     position: relative;
//     background-color: white;
//     font-family:"Montserrat";
//     /* color: white; */
//     font-style: none;
//     font-size: 20px;
//     border: solid #E7717D;
//     border-radius: 25px;
//     height: 50px;
//     text-align: center;
//     width: 300px;
//     input:active{
//       border: solid #E7717D;
//       border-radius: 25px;
//     }
// }
// input[type=submit], input[type=button]{
//     background-color:white;
//     color:#000080;
//     border: 2px solid #000080;
//     border-radius: 25px;
//     font-style: bolder;
//   };
//   input[type=submit]:active,input[type=button]:active{
//     background-color:white;
//     color:white;
//     border: 2px solid white;
//     box-shadow: 5px 3px 3px gray;
//     font-style: bold;
//     font-family: "Bungee Shade";
//   }
// `

// const CartDiv = styled.div`
//   width: 100%;
//   height: auto;
//   margin-top:4em;
//   .left{
//     width: 100%;
//     display: block;
//     padding-left: 2em;
//   }
//   .right{
//     padding-left: .2em;
//     padding-right: .2em;
//     padding-top: 1em;
//     padding-bottom: 2em;
//     width: 20%;
//     height: auto;
//     display: block;
//     float: right;
//     margin-right: 1em;
//     border: solid 1.5px gray;
//     border-radius: 5px;
//     box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
//       button{
//         display:block;
//         width: 100%;
//         background-color:white;
//         color:#FEC90E;
//         border: 2px solid #FEC90E;
//         border-radius: 5px;
//         font-style: bolder;
//       }
//       button:hover{
//         background-color:#FEC90E;
//         color:white;
//         border: 2px solid white;
//       };
//       button:active{
//         background-color:#FEC90E;
//         color:white;
//         border: 2px solid white;
//         box-shadow: 5px 3px 3px gray;
//         font-style: bold;
//       }
//     }
// `

// const TitleDiv = styled.div`
//     flex-wrap: wrap;
//     box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
//     /* column-count: 4; */
//     border: solid 2px gray;
//     border-radius: 5px;
//     /* display: inline-block; */
//     font-size: 14px;
//     /* flex-direction:row; */
//     font-family: "Montserrat";
//     font-size: 15px;
//     margin: 3em;
//     margin-bottom: 0;
//     margin-top:2em;
//     margin-left: 14em;
//     width:25%;
//     height: auto;
//     display: block;
//     text-align: center;
//     align-items: right;
//     background-color: #000080;
//     color: white;
//     .link{
//     color:white;
//     text-decoration: none;
//     };
//     .link:hover{
//       color:#E7717D;
//       /* background-color: #E7717D; */
//       text-decoration: none;
//     };
//     .link:active{
//       color:white;
//       text-decoration: none;
//     };
//     /* .link:visited{
//       color:white;
//       text-decoration: none;
//     } */
// `
// const RecipeCardStyle = styled.div`
//     flex-wrap: wrap;
//     box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
//     /* column-count: 4; */
//     border: solid 2px gray;
//     border-radius: 5px;
//     /* display: inline-block; */
//     font-size: 14px;
//     /* flex-direction:row; */
//     font-family: "Montserrat";
//     margin: 3em;
//     margin-top:0;
//     margin-left: 15em;
//     padding: .5em;
//     width:50%;
//     height: auto;
//     display: block;
//     text-align: center;
//     align-items: center;
//     button{
//         background-color:white;
//         color:#FEC90E;
//         border: solid 1px gray;
//         border-radius: 5px;
//         padding: .5em;
//         /* text-align: center; */
//         /* width: 100%; */
//     }
//       button:hover{
//         border: solid 1px gray;
//         border-radius: 5px;
//         font-style: bolder;
//         color:white;
//         box-shadow: 5px 3px 3px gray;
//         background-color: #FEC90E;
//     };
//       button:active{
//         background-color:#FEC90E;
//         color:white;
//         border: 2px solid white;
//         box-shadow: 5px 3px 3px gray;
//         font-style: bold;
//     }
// `


// const LeftPiece = styled.div`
// overflow:hidden;
//   position: left;
//   img{
//     /* padding-left: 5em; */
//     width:75px;
//     border-radius: 5px;
//     overflow:hidden;
//   }
// `
// const MiddleDescription = styled.div`
//   font-style:bold;
//   justify-content:center;
//   display: flex;
//   flex-wrap: wrap;
//   height: auto;
//   padding-left: 0em;
//   padding-top: 1em;
//   width:150%;
//   top:0;
// `

// const Quantity = styled.div`
//   justify-content:center;
//   /* width: 100%; */
//   padding-top:1em;
//   margin-left: 4em;
//   button{
//     display:block;
//     background-color:white;
//     color:#FEC90E;
//     border: 1px solid #FEC90E;
//     border-radius: 5px;
//     font-style: bolder;
//   }
//   button:hover{
//     background-color:#FEC90E;
//     color:white;
//     border: 2px solid white;
//   };
//   button:active{
//     background-color:#FEC90E;
//     color:white;
//     border: 2px solid white;
//     box-shadow: 5px 3px 3px gray;
//     font-style: bold;
//   };
// `
// const TotalCost = styled.div`
//   padding-top:2em;
//   width:50%;
//   padding-left: 4em;
//   justify-content:right;
//   height: auto;
// `


// const PopupCheckout = styled.div`
// /* padding:150px; */
// .popup-box {
//   position: fixed;
//   background: #00000050;
//   width: 100%;
//   height: 100vh;
//   top: 0;
//   left: 0;
// }
 
// .box {
//   position: relative;
//   width: 70%;
//   margin: 0 auto;
//   height: auto;
//   max-height: 70vh;
//   margin-top: calc(100vh - 85vh - 20px);
//   background: #fff;
//   border-radius: 4px;
//   padding: 20px;
//   border: 1px solid #999;
//   overflow: auto;
// }
 
// .close-icon {
//   content: 'x';
//   cursor: pointer;
//   position: fixed;
//   right: calc(15% - 30px);
//   top: calc(100vh - 85vh - 33px);
//   background: #ededed;
//   width: 25px;
//   height: 25px;
//   border-radius: 50%;
//   line-height: 20px;
//   text-align: center;
//   border: 1px solid #999;
//   font-size: 20px;
// }
// `

// const DetailCard = styled.div`
//   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
//   /* transition: 0.3s; */
//   padding: 2px 16px;
//   border-radius: 5px;
//   margin: 1em;
//   width:auto;
//   justify-content: center;
//   h5{
//     padding: 2px 10px;
//     margin:1em;
//     background-color:#C2CAD0;
//     color: white;
//     font-family: "Montserrat", sans-serif;
//     font-style: italic;
//     font-size: 15px;
//   };
//   img{
//     width:25%;
//     filter: saturate(100%);
    
//   };
//   h3{
//     height: 30px;
//   };
//   .stock{
//     background-color:#CB4C4E;
//     color:white
//   };
//   h6{
//     font-family: "Playfair Display"
//   };
// `
// const DetailButton = styled.div`
//   justify-content:center;
//   margin: 1em;
//   button{
//     display:block;
//     background-color:white;
//     color:#FEC90E;
//     border: 1px solid #FEC90E;
//     border-radius: 5px;
//     font-style: bolder;
//     padding: 1em;
//   }
//   button:hover{
//     background-color:#FEC90E;
//     color:white;
//     border: 2px solid white;
//   };
//   button:active{
//     background-color:#FEC90E;
//     color:white;
//     border: 2px solid white;
//     box-shadow: 5px 3px 3px gray;
//     font-style: bold;
//   };

// `


