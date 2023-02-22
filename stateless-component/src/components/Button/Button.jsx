import classes from './Button.module.css';

export function Button({mode, ...restProps}) {
  return <button type="button" className={classes.component}{...restProps}></button>
};

Button.defaultProps = {
  mode: 'primary' // 'secondary'
};

<Button></Button>