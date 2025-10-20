// let formData = {
//     email: "",
//     message: ""
// }


// const form = document.querySelector(".feedback-form");
// const email = document.querySelector('input[name="email"]');
// const textarea = document.querySelector('textarea[name="message"]');
// const localStorageKey = "feedback-form-state";

// form.addEventListener("input", inputFunction);

// function inputFunction(event) {
//     formData[event.target.name] = event.target.value.trim();
//     localStorage.setItem(localStorageKey, JSON.stringify(formData));
// }

// const savedFormData = localStorage.getItem(localStorageKey);
// if(savedFormData) {
//     formData = JSON.parse(savedFormData);
//     email.value = formData.email ?? "";
//     textarea.value = formData.message ?? "";
// }


// form.addEventListener("submit", submitFunction);

// function submitFunction(event) {
//     event.preventDefault();
//     if (formData.email && formData.message) {
//         console.log(formData);
//         localStorage.removeItem(localStorageKey);
//         form.reset();
//     } else {
//         alert("Please fill in both fields!")
//     }
// };




let formData = {
    email: "",
    message: ""
}

const form = document.querySelector(".feedback-form");
const email = document.querySelector('input[name="email"]');
const textarea = document.querySelector('textarea[name="message"]');
const localStorageKey = "feedback-form-state";


const savedFormData = localStorage.getItem(localStorageKey);
if(savedFormData) {
    formData = JSON.parse(savedFormData);
    email.value = formData.email ?? "";
    textarea.value = formData.message ?? "";
}

form.addEventListener("input", (event) => { 
    formData[event.target.name] = event.target.value.trim(); 
    localStorage.setItem(localStorageKey, JSON.stringify(formData)); 
});

form.addEventListener("submit", submitFunction);

function submitFunction(event) {
    event.preventDefault();
    if (formData.email && formData.message) {
        console.log(formData);
         localStorage.removeItem(localStorageKey);
        formData.email = "";
        formData.message = "";
        form.reset();
    } else {
        alert("Please fill in both fields!")
    }    
};


