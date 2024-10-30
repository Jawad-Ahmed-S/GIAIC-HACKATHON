{
    var generateButton = document.getElementById('generate');
    generateButton.addEventListener('click', function () {
        var data = ResumedataInput();
        // Update resume content
        document.getElementById('FullName').textContent = userData_1.fullName;
        document.getElementById('Profession').textContent = userData_1.profession;
        document.getElementById('Email').textContent = userData_1.email;
        document.getElementById('Contact').textContent = userData_1.contact;
        document.getElementById('Degree').textContent = userData_1.degree;
        document.getElementById('Institution').textContent = userData_1.institution;
        document.getElementById('PassingYear').textContent = userData_1.passingYear;
        document.getElementById('Organization').textContent = userData_1.organization;
        document.getElementById('Duration').textContent = userData_1.duration;
        document.getElementById('Description').textContent = userData_1.description;
        document.getElementById('skillsection').textContent = userData_1.skills;
        // Show content and link generation section
        var contentElement = document.querySelector('.content');
        var extrabody = document.querySelector('.one-s');
        if (contentElement) {
            extrabody.style.height = '100vh';
            contentElement.classList.add('visible');
        }
        populateEduData('#eduDisplay', '.eduEntry');
        populateWorkData('#WorkDisplay', '.workEntry');
        var formElement = document.querySelector('form');
        if (formElement) {
            formElement.style.display = 'none';
        }
        var linkSection = document.querySelector('.LinkGen').style.display = 'flex';
        // Generate URL
        function generateUserURL(name) {
            var formattedName = name.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
            return "https://giaic-hackathon-jawads-projects-ce7a490a.vercel.app/?user=".concat(encodeURIComponent(formattedName));
        }
        var userURL = generateUserURL(data.fullName);
        console.log(userURL);
        var linkElement = document.getElementById('link1');
        if (linkElement) {
            linkElement.href = userURL;
            linkElement.textContent = userURL;
        }
    });
    {
        var print_1 = document.getElementById('print');
        print_1.addEventListener('click', function () {
            document.querySelector(".LinkGen").style.display = "none";
            document.querySelector(".nav").style.display = "none";
            window.print();
        });
    }
    var showLinkButton = document.getElementById('ShowLink');
    showLinkButton.addEventListener('click', function () {
        var link = document.querySelector('.link');
        if (link) {
            link.style.display = 'flex';
        }
    });
    var input = ResumedataInput();
    var userData_1 = {
        fullName: input.fullName,
        profession: input.profession,
        email: input.email,
        contact: input.contact,
        degree: input.degree,
        institution: input.institution,
        passingYear: input.passingYear,
        organization: input.organization,
        duration: input.duration,
        description: input.description,
        skills: input.skills
    };
    console.log(userData_1);
    function ResumedataInput() {
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
        console.log(fullNameInput.value, "ResumeDataInput");
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
}
{
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
}
