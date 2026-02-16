import { createStore } from 'solid-js/store';

function checkValid({ element, validators = [] }, setErrors, errorClass) {
  return async () => {
    element.setCustomValidity('');
    element.checkValidity();
    let message = element.validationMessage;
    if (!message) {
      for (const validator of validators) {
        const text = await validator(element);
        if (text) {
          element.setCustomValidity(text);
          break;
        }
      }
      message = element.validationMessage;
    }
    if (message) {
      errorClass && element.classList.toggle(errorClass, true);
      setErrors({ [element.name]: message });
    }
  };
}

const useForm = ({ errorClass }) => {
  const [errors, setErrors] = createStore({}),
    fields = {};

  const validate = (ref, accessor) => {
    const validators = accessor() || [];
    let config;
    fields[ref.name] = config = { element: ref, validators };
    ref.onblur = checkValid(config, setErrors, errorClass);
    ref.oninput = () => {
      if (!errors[ref.name]) return;
      setErrors({ [ref.name]: undefined });
      errorClass && ref.classList.toggle(errorClass, false);
    };
  };

  const formSubmit = (ref, accessor) => {
    const values = {};
    const callback = accessor() || (() => {});
    ref.setAttribute('novalidate', '');
    ref.onsubmit = async (e) => {
      e.preventDefault();
      let errored = false;

      // eslint-disable-next-line no-restricted-syntax
      for (const k in fields) {
        const field = fields[k];
        await checkValid(field, setErrors, errorClass)();
        if (!errored && field.element.validationMessage) {
          field.element.focus();
          errored = true;
        } else {
          values[k] = field.element.value;
        }
      }
      !errored && callback(values);
    };
  };

  return { validate, formSubmit, errors };
};

const ErrorMessage = (props) => <span class="error-message">{props.error}</span>;

const isNotEmpty = ({ value }) => {
  return !value && 'This field is required';
};

const isEmail = ({ value }) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return !pattern.test(value) && 'Email is incorrect';
};

export default { useForm, ErrorMessage, isNotEmpty, isEmail };
