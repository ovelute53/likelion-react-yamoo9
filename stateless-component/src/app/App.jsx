import classes from './App.module.css';
import { Button, A11yHidden } from '@/components';

function App() {
  return (
    <div className={classes.container}>
      <h2 className={classes.headline}>Button 컴포넌트(stateless)</h2>

      <div role="group" className={classes.buttonGroup}>
        <Button>회원가입</Button>
        <Button secondary>로그인</Button>
      </div>
      <section>
        <A11yHidden 
          as="h2" 
          className="myClassName"
          id= "uniqueId"
          title= "titleName"
          data-myName= "saehan"
        >
          접근성 준수 제목
        </A11yHidden>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A id nisi vero quibusdam vitae sequi aperiam vel accusamus, iusto eaque, ullam, temporibus delectus debitis consequatur eos aspernatur? Quo, optio fugiat.
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A id nisi vero quibusdam vitae sequi aperiam vel accusamus, iusto eaque, ullam, temporibus delectus debitis consequatur eos aspernatur? Quo, optio fugiat.
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A id nisi vero quibusdam vitae sequi aperiam vel accusamus, iusto eaque, ullam, temporibus delectus debitis consequatur eos aspernatur? Quo, optio fugiat.
        </p>
      </section>
    </div>
  );
}

export default App;
