let formData = {
    email: "",
    message: ""
}


const form = document.querySelector(".feedback-form");
const email = document.querySelector('input[name="email"]');
const textarea = document.querySelector('textarea[name="message"]');
const localStorageKey = "feedback-form-state";

form.addEventListener("input", inputFunction);

function inputFunction(event) {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

//email.value = localStorage.getItem(localStorageKey);
// const savedEmail = localStorage.getItem("formData");
// const parsedEmail = JSON.parse(savedEmail);
// email.value = formData.email;

const savedFormData = localStorage.getItem(localStorageKey);
if(savedFormData) {
    formData = JSON.parse(savedFormData);
    email.value = formData.email ?? "";
    textarea.value = formData.message ?? "";
}

//textarea.value = localStorage.getItem(localStorageKey) ?? "";

form.addEventListener("submit", submitFunction);

function submitFunction(event) {
    event.preventDefault();
    if (formData.email && formData.message) {
        console.log(formData);
        localStorage.removeItem(localStorageKey);
        form.reset();
    } else {
        alert("Please fill in both fields!")
    }
    //const form = event.target;
    // const data= {};
    // const email = form.elements.email.value;
    // const message = form.elements.message.value;
    // formData.email = email;
    // formData.message = message;
  
};
