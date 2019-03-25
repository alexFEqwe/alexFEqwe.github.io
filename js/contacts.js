'use strict';


/**
 * {0:'name', 1: 'tel',...}
 * @type {string[]}
 */

const fields = ['name', 'tel', 'email', 'text'];
const form = document.getElementById("my_form");
function validate() {

    for (let i = 0; i < fields.length; i++) {
        let field = form.elements.namedItem(fields[i]);
        const errorMessage = document.getElementById(fields[i] + "_error");
        if (!field.checkValidity()) {
            errorMessage.innerHTML = field.validationMessage;
            errorMessage.classList.add('has_error');
            field.classList.add('field_error');
        } else {
            errorMessage.innerHTML = '';
            field.classList.remove('field_error');
            errorMessage.classList.remove('has_error');
        }
    }

    if (!form.checkValidity()) {
        document.getElementById( "done").innerHTML = '';
    } else {
        document.getElementById( "done").innerHTML = "Спасибо =)";
    }
/**
 * пример для одного поля надо сделать в цикле из масива имен fields
* пример получение елемента формы: form.elements.namedItem('email')
* var inpObj = document.getElementById("");
* if (!inpObj.checkValidity()) {
*     document.getElementById("demo").innerHTML = inpObj.validationMessage;
* } else {
*     document.getElementById("demo").innerHTML = "Input OK";
* }
* */

}