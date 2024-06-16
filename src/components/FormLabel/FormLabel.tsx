import { ErrorMessage, Field } from 'formik';
import css from './FormLabel.module.css';

type Prop = {
  [key: string]: string;
};

const FormLabel: React.FC<Prop> = ({
  fieldType,
  name,
  fieldPlaceholder,
}: Prop) => {
  return (
    <label className={css.label}>
      <Field
        className={css.input}
        type={fieldType}
        name={name}
        placeholder={fieldPlaceholder}
        autoComplete="off"
      />
      <ErrorMessage className={css.errorMsg} name={name} component="span" />
    </label>
  );
};

export default FormLabel;
