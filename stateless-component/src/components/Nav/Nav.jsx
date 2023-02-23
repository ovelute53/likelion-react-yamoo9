import PropTypes, {shape} from 'prop-types'
import classes from './Nav.module.scss';
import { A11yHidden } from '@/components';

export function Nav ({as, headline, list, ...restProps}) {
  return <nav {...restProps}>
    <A11yHidden as={as}>{headline}</A11yHidden>
    <ul>
      {
        list.map((item,index) => (
          <li key={item.id ?? index}>
            <a href={item.to}>
              {item.text}
            </a>
          </li>
        ))
      }
    </ul>
  </nav>
}

Nav.defaultProps ={
  list: [], /* TS schema [{ id: string, to: string, text: string }] */
  as: 'h2',
}

// npm install --save prop-types 로 Prop-types 설치 후 유효성 검사
Nav.propTypes = {
  /*
  as의 인수를 확인하기 위해 console.log로 확인 
  as(...args){
    console.log(...args);
  } 
  */

  
  list: PropTypes.arrayOf(
    // PropTypes.oneOfType([PropTypes.string, PropTypes.number]
    // shape => 특정한 형태를 가지는 객체
    // exact => 특정 속성 외에 다른 속성을 가질시 오류(정확히)
    shape({
      id: PropTypes.string,
      to: PropTypes.string,
      text:PropTypes.string,
    }).isRequired,
      ),
  // propTypes 유효성 검사에서 headline은 필수적으로 입력되도록 설정
  headline: PropTypes.string.isRequired,
  // as -> [] 중 하나 사용되도록(oneOf())
  as: PropTypes.oneOf(['h2', 'h3', 'h4', 'h5', 'h6']),
};
