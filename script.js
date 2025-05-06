let checkCaptcha = false;

function beforeSubmit(event) {

    if (checkCaptcha) {

        let outputDate = document.querySelector(".outputDate");
        let inputDate = document.querySelector(".inputDate");

        console.log("inputDate : ", inputDate?.value);

        // To convert String to Date and Store it in Salesforce, we need locale of the user
        // Here the type of inputDate is String.
        // Get the Locale of the User using Developer Console
        // System.debug(UserInfo.getLocale())
        // Locale: en_IN

        let formattedDate = new Date(inputDate.value).toLocaleDateString("en-IN");
        console.log("formattedDate : ", formattedDate);

        // Set the formatted value to the hidden field value
        outputDate.value = formattedDate;
    } else {
        alert('Confirm you are not Robot !!');
        event?.preventDefault();
    }
}

function timestamp() {
    var response = document.getElementById("g-recaptcha-response");
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(
            document.getElementsByName("captcha_settings")[0].value
        );
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value =
            JSON.stringify(elems);
    }
}
// setInterval(timestamp, 500);

function handleCaptcha() {
    this.checkCaptcha = true;
}