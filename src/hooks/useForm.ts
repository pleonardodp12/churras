import { useFormik } from 'formik';

interface FormInitialParams<T> {
  onSubmit(data: T): void;
  initialValues: T;
  validate?: (data: T) => any;
  validationSchema?: any;
}

export const useForm = <T>(init: FormInitialParams<T>) => {
  const formik = useFormik({
    ...init,
    validateOnBlur: true,
  });

  const hasError = (field: keyof T) =>
    Boolean(formik.touched[field] && formik.errors[field]);

  const fieldProps = (fieldName: keyof T) => ({
    name: fieldName,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values[fieldName],
    error: hasError(fieldName),
  });

  const setValue = (field: keyof T | any, value: any) => {
    formik.setFieldValue(field, value, true);
  };

  const radioFieldProps = (fieldName: keyof T) => ({
    name: fieldName,
    onChange: (value: string) => setValue(fieldName, value),
    onBlur: formik.handleBlur,
    value: formik.values[fieldName],
    error: hasError(fieldName),
  });

  const setTouched = (field: keyof T | any, touched = true) => {
    formik.setFieldTouched(field, touched);
  };

  const resetValues = (name: Array<keyof T>) => {
    name.forEach((nameItem) => {
      setValue(nameItem, []);
    });
  };

  const resetTouch = (name: Array<keyof T>) => {
    name.forEach((nameItem) => {
      setTouched(nameItem, false);
    });
  };

  return {
    handleSubmit: formik.handleSubmit,
    errors: formik.errors,
    values: formik.values,
    isSubmitting: formik.isSubmitting,
    hasError,
    fieldProps,
    setValue,
    setValues: formik.setValues,
    setTouched,
    resetValues,
    resetTouch,
    radioFieldProps,
  };
};
