$(document).ready(function () {

    //Fires on page-load
    SDK.Curriculum.getCurriculum(function (err, data) {
        if (err) {
            return
        }

        var decrypted = encryptDecrypt(data);
        decrypted = JSON.parse(decrypted);


        var $curriculumTableBody = $("#curriculumTableBody");
        decrypted.forEach(function (curriculum, i) {

            $curriculumTableBody.append(
                "<tr>" +
                "<td>" + curriculum.curriculumID + "</td>" +
                "<td>" + curriculum.school + "</td>" +
                "<td>" + curriculum.education + "</td>" +
                "<td>" + curriculum.semester + "</td>" +
                "<td><button class='showBooksButton' data-curriculumId=" + curriculum.curriculumID + "> Vis</button></td>" +
                "</tr>");
        });

        $(".showBooksButton").on("click", function () {
            var $button = $(this);
            var id = $button.data("curriculumid");
            $("#showBooksModal").modal();
        });


    });
});