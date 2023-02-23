import classes from '@/styles/SignUp.module.Wcss';
import { BaseLayout } from '@/components';

export default function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('회원가입 시도 -> Firebase Authentication');
  }

  return (
    <BaseLayout>
      <h2>회원가입 페이지</h2>
      <form onSubmit={handleSubmit}>
        <FormInput />
        <button type='submit'>회원가입</button>
      </form>
    </BaseLayout>
  )
}