import React, {useEffect} from 'react'
import { A11yHidden } from '@/components';


 export function SkipToContent({to, ...restProps}) {

  useEffect(() => {
    // to -> '#snack'
    // document.getElementById()
    // 확인이 안되면 null을 반환한다.
    const targetElement = document.querySelector(to);

    if(targetElement) {
      targetElement.setAttribute();
    }
  }, [])

  const handleJumpToArea = (e) => {
    e.preventDefault();
    if (targetElement) {
      targetElement.focus();
    }
  }
  
  return (
    <A11yHidden as="a" href={to} onClick={handleJumpToArea} {...restProps}></A11yHidden>
  )
 };
