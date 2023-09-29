/** processForm: get data from form and make AJAX call to our API. */
let luckyResults = document.querySelector('#lucky-results');
let nameErr = document.querySelector("#name-err");
let yearErr = document.querySelector("#year-err");
let emailErr = document.querySelector("#email-err");
let colorErr = document.querySelector("#color-err");
let allErrs = Array.from(document.querySelectorAll("#lucky-form div b"));


async function processForm(evt) {
    evt.preventDefault();
    let form = evt.target;
    let csrf_token = document.querySelector('#csrf_token').value;
    let name = document.querySelector('#name').value;
    let year = document.querySelector('#birth_year').value;
    let email = document.querySelector('#email').value;
    let color = document.querySelector('#color').value;
    try {
        let res = await axios.post('/', {
            csrf_token: csrf_token,
            name: name,
            birth_year: year,
            email: email,
            color: color,
        }, {
            headers: {
                'X-CSRFToken': csrf_token,
            }
        });

        // Handle success
        console.log(res.data);
        let lucky_text = document.createElement('p');
        lucky_text.innerHTML = `Your lucky number is ${res.data.num.num.toString()}, ${res.data.num.fact}<br>Your birth year (${res.data.date.date.toString()}) fact is, ${res.data.date.fact}.`;
        allErrs.forEach(a => { a.innerHTML = '' });
        luckyResults.innerHTML = '';
        luckyResults.append(lucky_text);
        luckyResults.classList.remove("hidden");

    } catch (error) {
        if (error.response && error.response.status === 400) {
            const data = error.response.data
            console.dir(data);
            if (data.birth_year) { yearErr.innerText = data.birth_year[0] };
            if (data.color) { colorErr.innerText = data.color[0] };
            if (data.name) { nameErr.innerText = data.name[0] };
            if (data.email) { emailErr.innerText = data.email[0] };
            luckyResults.innerHTML = "";
            luckyResults.classList.add("hidden");
        } else {
            console.error("An unexpected error occurred:", error);
        }
    }

}

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(resp) {
}


document.getElementById("lucky-form").addEventListener("submit", processForm);

