import { ErrorMessage, Field } from 'formik';
import css from './FormLabel.module.css';

const FormLabel: React.FC<{ type: string, name: string, placeholder: string, autoComplete: boolean }> =
  ({ type, name, placeholder, autoComplete }) => {
    return (
      <label className={css.label}>
        <Field
          className={css.input}
          type={type}
          name={name}
          placeholder={placeholder}
          autoComplete={autoComplete ? "on" : "off"}
        />
        <ErrorMessage
          className={css.errorMsg}
          name={name}
          component="span"
        />
      </label>
    );
  };

export default FormLabel;
