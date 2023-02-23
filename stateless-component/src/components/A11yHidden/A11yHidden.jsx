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
  const combineClassNames = `${classes.srOnly} ${className}`.trim();
  return (
    <Component 
      className={combineClassNames} 
      {...restProps} // spread operator: {className, id, title, 'data-myName', children}
    />
  );
};


// A11yHidden.defaultProps = {
//   as: 'span'
// }