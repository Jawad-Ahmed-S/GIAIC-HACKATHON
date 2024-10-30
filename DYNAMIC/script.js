var _a;
function dataInput() {
    var fullNameInput = document.querySelector('input[placeholder="Full Name"]');
    var professionInput = document.querySelector('input[placeholder="Profession"]');
    var emailInput = document.querySelector('input[placeholder="Email"]');
    var contactInput = document.querySelector('input[placeholder="Contact Number"]');
    var degreeInput = document.querySelector('input[placeholder="Degree"]');
    var institutionInput = document.querySelector('input[placeholder="Institution"]');
    var passingYearInput = document.querySelector('input[placeholder="Passing Year"]');
    var organizationInput = document.querySelector('input[placeholder="Organization"]');
    var durationInput = document.querySelector('input[placeholder="Duration"]');
    var descriptionInput = document.querySelector('input[placeholder="Description"]');
    var skillsInput = document.querySelector('input[placeholder="Skills"]');
    return {
        fullName: fullNameInput ? fullNameInput.value : '',
        profession: professionInput ? professionInput.value : '',
        email: emailInput ? emailInput.value : '',
        contact: contactInput ? contactInput.value : '',
        degree: degreeInput ? degreeInput.value : '',
        institution: institutionInput ? institutionInput.value : '',
        passingYear: passingYearInput ? passingYearInput.value : '',
        skills: skillsInput ? skillsInput.value : '',
        organization: organizationInput ? organizationInput.value : '',
        duration: durationInput ? durationInput.value : '',
        description: descriptionInput ? descriptionInput.value : '',
    };
}
(_a = document.getElementById('generate')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (e) {
    var data = dataInput();
    e.preventDefault();
    document.getElementById('FullName').textContent = data.fullName;
    document.getElementById('Profession').textContent = data.profession;
    document.getElementById('Email').textContent = data.email;
    document.getElementById('Contact').textContent = data.contact;
    document.getElementById('Degree').textContent = data.degree;
    document.getElementById('Institution').textContent = data.institution;
    document.getElementById('PassingYear').textContent = data.passingYear;
    document.getElementById('Organization').textContent = data.organization;
    document.getElementById('Duration').textContent = data.duration;
    document.getElementById('Description').textContent = data.description;
    document.getElementById('skillsection').textContent = data.skills;
    var contentElement = document.querySelector('.content');
    /* ----------------------------------------------------------------- */
    var extrabody = document.querySelector('.one-s');
    if (contentElement) {
        extrabody.style.height = '100vh';
        /* ----------------------------------------------------------------- */
        contentElement.classList.add('visible');
    }
    populateEduData('#eduDisplay', '.eduEntry');
    populateWorkData('#WorkDisplay', '.workEntry');
});
/* ----------------------------------------------------------------- */
var addEducationBtn = document.getElementById('AddEducation');
addEducationBtn.addEventListener('click', function () {
    var eduFields = document.getElementById('eduFields');
    var newEntry = document.createElement('div');
    newEntry.classList.add('eduEntry');
    newEntry.innerHTML = "\n    <input type=\"text\" placeholder=\"Degree\" required>\n    <input type=\"text\" placeholder=\"Institution\" required>\n    <input type=\"number\" placeholder=\"Passing Year\" required>\n  ";
    eduFields.appendChild(newEntry);
});
var addWorkBtn = document.getElementById('AddWork');
addWorkBtn.addEventListener('click', function () {
    var workFields = document.getElementById('workFields');
    var newEntry = document.createElement('div');
    newEntry.classList.add('workEntry');
    newEntry.innerHTML = "\n      <input type=\"text\" placeholder=\"Organization\" required>\n      <input type=\"number\" placeholder=\"Duration\" required>\n      <input type=\"text\" placeholder=\"Description\" required>\n  ";
    workFields.appendChild(newEntry);
});
/* ----------------------------------------------------------------- */
function populateWorkData(targetSectionId, sourceEntryClass) {
    var targetSection = document.querySelector(targetSectionId);
    var workEntries = document.querySelectorAll(sourceEntryClass);
    if (targetSection) {
        targetSection.innerHTML = '';
    }
    workEntries.forEach(function (entry) {
        var organization = entry.querySelector('input[placeholder="Organization"]');
        var duration = entry.querySelector('input[placeholder="Duration"]');
        var description = entry.querySelector('input[placeholder="Description"]');
        if (targetSection) {
            var newParagraph = document.createElement('p');
            newParagraph.innerHTML = "<b id=\"Organization\">".concat(organization.value, "</b> - <i id=\"Duration\">").concat(duration.value, "</i><br><span id=\"Description\">").concat(description.value, "</span>");
            targetSection.appendChild(newParagraph);
        }
    });
}
function populateEduData(targetSectionId, sourceEntryClass) {
    var targetSection = document.querySelector(targetSectionId);
    var eduEntries = document.querySelectorAll(sourceEntryClass);
    if (targetSection) {
        targetSection.innerHTML = '';
    }
    eduEntries.forEach(function (entry) {
        var Degree = entry.querySelector('input[placeholder="Degree"]');
        var Institution = entry.querySelector('input[placeholder="Institution"]');
        var PassingYear = entry.querySelector('input[placeholder="Passing Year"]');
        if (targetSection) {
            var newParagraph = document.createElement('p');
            newParagraph.innerHTML = "<b id=\"Degree\">".concat(Degree.value, "</b> <i id=\"Institution\">").concat(Institution.value, "</i> <span id=\"PassingYear\">").concat(PassingYear.value);
            targetSection.appendChild(newParagraph);
        }
    });
}
//<b id="Degree"></b> <i id="Institution"></i> <span id="PassingYear"></span>
