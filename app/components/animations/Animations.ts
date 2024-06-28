import { keyframes } from "styled-components";

export const TitleAnimation = keyframes`
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

export const RotateLeft = keyframes`
    0% {
			transform:rotate(0);
			transform-origin:left;
		}
		100% {
			transform:rotate(360deg);
			transform-origin:left;
		}
`;

export const RotateRight= keyframes`
    0% {
			transform:rotate(0);
			transform-origin:right;
		}
		100% {
			transform:rotate(360deg);
			transform-origin:right;
		}
`;
