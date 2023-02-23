import { useId } from 'react'
import { A11yHidden } from '@/components'

export function FormInput ({ 
  label, 
  invisibleLabel = false,
  ...restProps 
}) {
  const id = useId();

  return (
    <div>
      {renderLabel(id, label, invisibleLabel)}
      <input id={id} type="text" {...restProps}/>
    </div>
  );
}

function renderLabel (id, label, invisibleLabel) {
  return invisibleLabel ? (
    <A11yHidden as ="label" htmlFor={id}>
      {label}
    </A11yHidden>
  ) : (
    <label htmlFor={id}>{label}</label>
  )
}