var isvalid = true;


function checkName() {


    if (document.getElementById("name").value === "" || document.getElementById("name").value.length < 10) {
        document.getElementById("errname").textContent = "Name must have 10 alphabet at least";
        isvalid = false;
    } else {
        document.getElementById("errname").textContent = "";
        isvalid = true;
    }
}

function checkAuthor() {


    var letters = /^[A-Za-z][A-Za-z\s]*$/;
    if (!document.getElementById("author").value.match(letters) || document.getElementById("author").value.length < 10) {
        document.getElementById("errauthor").textContent = "Author must contains at least 10 characters";
        isvalid = false;
    } else {
        document.getElementById("errauthor").textContent = "";
        isvalid = true;

    }

}

function checkIsbn() {
    var letters = /^[0-9]+$/;
    var isbn = document.getElementById("isbn").value;

    if (!isbn.match(letters) || isbn.length != 10 || isbn.startsWith("1") == false) {
        document.getElementById("errisbn").textContent = "ISBN is should be 10 digits starting with '1'";
        isvalid = false;
    } else {
        document.getElementById("errisbn").textContent = "";
        isvalid = true;

    }

}
function checkPublisher() {
    var letters = /^[A-Za-z][A-Za-z\s]*$/;
    if (!document.getElementById("publisher").value.match(letters) || document.getElementById("publisher").value.length < 10) {
        document.getElementById("errpublisher").textContent = "Publisher should be at least 10 alphabet characters";
        isvalid = false;
    } else {
        document.getElementById("errpublisher").textContent = "";
        isvalid = true;

    }

}
function checkLanguage() {
    if (document.getElementById("language").value === "select") {
        document.getElementById("errlanguage").textContent = "Please select Language";
        isvalid = false;
    } else {
        document.getElementById("errlanguage").textContent = "";
        isvalid = true;
    }
}
function checkCategory() {
    if (document.getElementById("category").value === "select") {
        document.getElementById("errcategory").textContent = "Please select Category";
        isvalid = false;
    } else {
        document.getElementById("errcategory").textContent = "";
        isvalid = true;
    }
}
function checkDescription() {
    if (document.getElementById("description").value === "" || document.getElementById("description").value.length < 20) {
        document.getElementById("errdescription").textContent = "Book description is  should be at least 20 alphabet characters";
        isvalid = false;
    } else {
        document.getElementById("errdescription").textContent = "";
        isvalid = true;
    }
}
function checkEdition() {
    var letters = /^[0-9]+$/;
    var edition = document.getElementById("edition").value;
    if (edition === "") {
        document.getElementById("erredition").textContent = "";
        isvalid = true;
    } else {

        if (!edition.match(letters)) {
            document.getElementById("erredition").textContent = "Edition number is invalid";
            isvalid = false;
        } else {
            document.getElementById("erredition").textContent = "";
            isvalid = true;

        }
    }

}
function checkYear() {
    var letters = /^[0-9]+$/;
    var year = document.getElementById("year").value;


    if (!year.match(letters)) {
        document.getElementById("erryear").textContent = "Year is invalid";
        isvalid = false;
    } else {
        document.getElementById("erryear").textContent = "";
        isvalid = true;

    }

}
function checkPages() {
    var letters = /^[0-9]+$/;
    var pages = document.getElementById("pages").value;


    if (!pages.match(letters)) {
        document.getElementById("errpages").textContent = "Number of pages is invalid";
        isvalid = false;
    } else {
        document.getElementById("errpages").textContent = "";
        isvalid = true;

    }
}
function checkBookForm() {
    checkName();
    checkAuthor();
    checkIsbn();
    checkPublisher();
    checkLanguage();
    checkCategory();
    checkEdition();
    checkYear();
    checkPages();
    checkDescription();
    return isvalid;
}
function checkReviewer() {

    var letters = /^[A-Za-z][A-Za-z\s]*$/;
    if (!document.getElementById("reviewer").value.match(letters) || document.getElementById("reviewer").value.length < 10) {
        document.getElementById("errreviewer").textContent = "Reviewer is mandatory and should be at least 10 alphabet characters";
        isvalid = false;
    } else {
        document.getElementById("errreviewer").textContent = "";
        isvalid = true;

    }

}

function checkEmail() {

    var letters = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (document.getElementById("email").value.match(letters)) {
        document.getElementById("erremail").textContent = "";
        isvalid = true;
    } else {

        document.getElementById("erremail").textContent = "Email is invalid";
        isvalid = false;
    }

}
function checkRate() {
    if (document.getElementById("rate").value === "select") {
        document.getElementById("errrate").textContent = "Please select Rate";
        isvalid = false;
    } else {
        document.getElementById("errrate").textContent = "";
        isvalid = true;
    }
}
function checkReviewForm() {
    checkName();
    checkEdition();
    checkReviewer();
    checkEmail();
    checkRate();

    checkDescription();
    return isvalid;
}
 