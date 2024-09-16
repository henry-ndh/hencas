import styled from 'styled-components';
import { useEffect } from 'react';

interface ScrollAnimationBoxProps {
  className?: string;
  children?: React.ReactNode;
}

const ScrollAnimationBox = ({ children, className }: ScrollAnimationBoxProps) => {
  useEffect(() => {
     /**
     * function handle show element when users scroll - handle by className
     * @use - add class @box_scale or @box_translateX_RightToLeft or other you want, element will be show when scroll
     * @note - You can add more style show here with the same logic and define css in index.css file :D !
     */
    const handleScroll = () => {
        const selectors = [
            ".box_scale",
            ".box_translateX_RightToLeft",
            ".box_translateX_ByIndex",
            ".box_translateX_LeftToRight",
        ];

        const triggerBottom = (window.innerHeight / 5) * 4;

        const handleClassToggle = (elements : any) => {
            elements.forEach((box : any) => {
                const boxTop = box.getBoundingClientRect().top;
                if (boxTop < triggerBottom) {
                    box.classList.add("show");
                } else {
                    box.classList.remove("show");
                }
            });
        };

        selectors.forEach((selector) => {
            const elements = document.querySelectorAll(selector);
            handleClassToggle(elements);
        });
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <ScrollAnimationBoxWrapper className={className}>{children}</ScrollAnimationBoxWrapper>;
};

export default ScrollAnimationBox;

const ScrollAnimationBoxWrapper = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;

  // animation scale
  .box_scale {
    transform: scale(0);
    transition: transform 0.7s ease;
  }

  .box_scale.show {
    transform: scale(1);
  }

  // animation translateX RightToLeft

  .box_translateX_RightToLeft {
    transform: translateX(400%);
    transition: transform 0.7s ease;
  }

  .box_translateX_RightToLeft.show {
    transform: translateX(0);
  }

  .box_translateX_ByIndex {
    transform: translateX(400%);
    transition: transform 0.7s ease;
  }

  .box_translateX_ByIndex:nth-of-type(even) {
    transform: translateX(-400%);
  }

  .box_translateX_ByIndex.show {
    transform: translateX(0);
  }
`;