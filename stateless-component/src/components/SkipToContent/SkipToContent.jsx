import React, { useEffect, useRef } from 'react'
import { A11yHidden } from '@/components';


 export function SkipToContent({to, ...restProps}) {

  const skipToContentRef = useRef(null); // { current : null }

  let targerElement = null;

  console.log(skipToContentRef);
  
  useEffect(() => {
    // to -> '#snack'
    // document.getElementById()
    // 확인이 안되면 null을 반환한다.
    const targetElement = document.querySelector(to);

    if(targetElement) {
      targetElement.setAttribute('tabindex', '-1');

      // event handlers
      // document.querySelector('a[href="#snack"]')
      skipToContentRef.current.addEventListener('click',(e)=>{
        e.preventDefault();
        targerElement && targerElement.focus();
      })
    }
  }, [])

  /* const handleJumpToArea = (e) => {
    e.preventDefault();
    if (targetElement) {
      targetElement.focus();
    }
  } */
  
  return (
    <>
    {/* <a ref = {skipToContentRef}>
      demo
    </a> */}
    {/* 
    ref는 HTML 표준 컴포넌트는 바로 참조할 수 있다.
    그러나 리액트 컴포넌트는 바로 참조할 수 없다. 
    컴포넌트 내부에 Ref를 전달하기 위해서..고차 컴포넌트(HOC) 개념이 이용된다.
    */}
    <A11yHidden
      ref = {skipToContentRef}
      as="a" 
      href={to}
      // onClick={handleJumpToArea}
      {...restProps}
    />
    </>
  )
 };
