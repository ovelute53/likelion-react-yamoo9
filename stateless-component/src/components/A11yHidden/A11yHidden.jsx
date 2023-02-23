// atomic component 원자 컴포넌트
import classes from './A11yHidden.module.css';

export const A11yHidden = ({
   as: Component = 'span',
   focusable = false,
   className = '',
   ...restProps // rest parameters: {className, id, title, 'data-myName', children}
  }) => {
  // 변수(문자값) + '' + 변수(문자값)
  // => `${개발자의 클래스이름}${사용자의 클래스이름}` 
  // 공백 제거를 위해 trim() 메서드를 이용하였다
  const combineClassNames = `${classes.srOnly} ${focusable ? classes.focusable : ''} ${className}`.trim();
  return (
    <Component 
      className={combineClassNames} 
      {...restProps} // spread operator: {className, id, title, 'data-myName', children}
    />
  );
};

// props (외부에서 전달되는 함수의 인자 집합)
// 함수 내부에서는 기본 값 설정
// A11yHidden.defaultProps = {
//   as: 'span',
// };
