import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { DEFAULT_VALUES_LOGIN } from './Login.constants';
import { validationSchema } from './Login.schema';

const useLogin = () => {
    const {
        control,
        handleSubmit,
        formState: { isValid },
      } = useForm({
        defaultValues: DEFAULT_VALUES_LOGIN,
        mode: 'onChange',
        resolver: yupResolver(validationSchema),
      });

  return {
    control,
    handleSubmit,
    isValid
  }
}

export default useLogin