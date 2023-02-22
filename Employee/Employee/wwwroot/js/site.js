// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$('#btnAddEmployee').click(function () {
    $('#EmployeeModal').modal('show');
})

function AddEmployee() {
    debugger
    var objData = {
            Name : $('#Name').val(),
            Email : $('#Email').val(),
            Address : $('#Address').val(),
            Phone : $('#Phone').val()
    }
    $.ajax({
        url: '/Employee/AddEmployee',
        type: 'Post',
        data: 'objData',
        contentType: 'application/xxx-www-form-urlencoded;charset=utf-8;', 
        dataType: 'json',
        susscess: function () { alert("data saved")},
        error: function () { alert("data not saved")}
        })
}
