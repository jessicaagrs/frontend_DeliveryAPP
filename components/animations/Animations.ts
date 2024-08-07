import { keyframes } from "styled-components";

const TitleAnimation = keyframes`
    0% {
	animation-timing-function: ease-in;
	opacity: 1;
	transform: translateX(-48px);
  }

  24% {
	opacity: 1;
  }

  40% {
	animation-timing-function: ease-in;
	transform: translateX(-26px);
  }

  65% {
	animation-timing-function: ease-in;
	transform: translateX(-13px);
  }

  82% {
	animation-timing-function: ease-in;
	transform: translateX(-6.5px);
  }

  93% {
	animation-timing-function: ease-in;
	transform: translateX(-4px);
  }

  25%,
  55%,
  75%,
  87%,
  98% {
	animation-timing-function: ease-out;
	transform: translateX(0px);
  }

  100% {
	animation-timing-function: ease-out;
	opacity: 1;
	transform: translateX(0px);
  }
`;

const SlideInLeft = keyframes`
  0% {
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  visibility: visible;
  }
  100% {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  }
`;

export { SlideInLeft, TitleAnimation };
