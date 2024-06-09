function createInput({ type, name, placeholder }) {
  const inputWrapper = document.createElement("div");
  inputWrapper.className = "input-wrapper";

  const input = document.createElement("input");
  input.type = type;
  input.name = name;
  input.placeholder = placeholder;
  input.className = "input-field";

  inputWrapper.appendChild(input);

  return inputWrapper;
}

function createButton({ type, text }) {
  const button = document.createElement("button");
  button.type = type;
  button.textContent = text;
  button.className = "form-button";
  return button;
}

function createForm({ action, method, elements }) {
  const form = document.createElement("form");
  form.action = action;
  form.method = method;
  form.className = "form-container";

  elements.forEach((element) => form.appendChild(element));

  return form;
}

export function formBuilder() {
  let formConfig = {
    action: "",
    method: "GET",
    elements: [],
  };

  return {
    setAction(action) {
      formConfig.action = action;
      return this;
    },
    setMethod(method) {
      formConfig.method = method;
      return this;
    },
    addInput(type, name, placeholder) {
      const input = createInput({ type, name, placeholder });
      formConfig.elements.push(input);
      return this;
    },
    addButton(type, text) {
      const button = createButton({ type, text });
      formConfig.elements.push(button);
      return this;
    },
    build() {
      return createForm(formConfig);
    },
  };
}
