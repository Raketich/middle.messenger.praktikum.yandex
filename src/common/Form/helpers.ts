import Form from './Form';

export const onBlur = (e: Event) => {
  const form = (e.target as HTMLInputElement).closest('form');

  if (form) {
    const FormClass = Form.get(form.id);
    FormClass.validateField(e.target as FormElement);
  }
};

export const onFocus = (e: Event) => {
  const form = (e.target as HTMLInputElement).closest('form');

  if (form) {
    const FormClass = Form.get(form.id);
    FormClass.hideError((e.target as HTMLInputElement).name);
  }
};
