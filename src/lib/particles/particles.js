'use strict';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// action buttons



let start = document.getElementById('start');
let stop = document.getElementById('stop');
let animationLeft;


// div to append svg
const divForAnimation = document.getElementById('animation');

/* 4 arguments
- left Margin - default 50 (scope between 0 and 50)
- min width & height of Element 
- max width & height of Element
- color of element 
*/

const dataLeftMargin = divForAnimation.dataset.leftMarginStart || 50;
const dataMinDim = divForAnimation.dataset.minDimension || 5;
const dataMaxDim = divForAnimation.dataset.maxDimension || 20;
const dataColor = divForAnimation.dataset.elColor || undefined;

function myElement(){
      
      // dimension of parent append to
      let parentHeight = divForAnimation.offsetHeight;
      let parentWidth = divForAnimation.offsetWidth;

      // random style to animate
      let arrayOfStyles = [
      'hexagon__modifyOne',
      'hexagon__modifyTwo'
      ];
      /* Random values to append:
      - left margin from 0 to 'your value here'
      - Beginning top position of element
      - size of Element: scope with minimal and maximal size
      - z-index: in front of element/behind element (index 100 or 1);
      - random speed form left to right
      */
      let beginleft = getRandomInt(0, dataLeftMargin);
      let beginTop = getRandomInt(0, parentHeight);
      let svgRandomDimension = getRandomInt(dataMinDim, dataMaxDim);
      let randomZindex = getRandomInt(0,2) ? 100 : 1;
      let randomSpeed = getRandomInt(4,7) / 10;
      
      // creating svg Element
      let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      // child in svg element, shape of element
      let path = document.createElementNS('http://www.w3.org/2000/svg','path');
      

        // setting atributes to created SVG
        function createHex(){

          // basic svg attributes
          svg.setAttribute('class', `hexagon ${arrayOfStyles[getRandomInt(0,2)]}`);
          svg.setAttribute('version', '1.1');
          svg.setAttribute('width', svgRandomDimension);
          svg.setAttribute('height', svgRandomDimension);
          svg.setAttribute('viewBox', '0 0 173.20508075688772 200');
          svg.setAttribute('fill', dataColor);
          path.setAttribute(
              'd',
              'M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z'
            );

           /*begin position for svg,z-index
           top, left, appendChild to Container*/

          svg.style.left = beginleft;
          svg.style.top = beginTop;
          svg.style.zIndex=randomZindex;
          svg.appendChild(path);
          divForAnimation.appendChild(svg);

          // moving svg from left to right with requestAnimationFrame
          
         
          
        function moveToleft(timestamp){
            beginleft += randomSpeed;
            svg.style.left = beginleft + 'px';

            beginTop += 0.05;
            svg.style.top = beginTop + 'px';

            requestAnimationFrame(moveToleft);

          }

          requestAnimationFrame(moveToleft);
         
        }
        /* modyfing svg element: 
        - checking if out off screen ,removing elements out of boundaries 
        */

        function modifyElement(){
            // getting Elements to check, return HTMLCollection 
            let arrayOfElements = document.getElementsByClassName('hexagon');
            // HTMLCollection convertion to array
            let arr = Array.from(arrayOfElements);
            
            // removing element out of boundaries
           (function removingBoundaries (){

            // boundaries of parent element
            let whenRemoveXaxis = parentWidth;
            let whenRemoveYaxis = parentHeight;

            for (let element of arr){
              let rectEle = element.getBoundingClientRect();
              
              // checking if element is outside parent boundaries
              if(rectEle.x > whenRemoveXaxis || rectEle.y > whenRemoveYaxis){
                element.remove();
                }
              }
            })();

           }

  createHex();
  modifyElement();
}




function practiceInit(){
  let last;
  
  function startToDisplay(timer){

    if(!last || timer - last > 1200){
      last = timer;
      myElement();
    }

    requestAnimationFrame(startToDisplay);
  }

  requestAnimationFrame(startToDisplay);

}




