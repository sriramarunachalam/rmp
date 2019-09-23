$(document).ready(function(){
    $("#RequestCard").hide();

    $(".btn").click(function() {
        $("#RequestCard").show();
        var currentRow = $(this).closest('tr');
        var Client = currentRow.find('td:eq(1)').text();
        var Developers = currentRow.find('td:eq(2)').text();
        var Technology = currentRow.find('td:eq(3)').text();
        var StartDate = currentRow.find('td:eq(4)').text();
        var EndDate = currentRow.find('td:eq(5)').text();

        $('#Client').text(Client);
        $('#Developers').text(Developers);
        $('#Technology').text(Technology);
        $('#StartDate').text(StartDate);
        $('#EndDate').text(EndDate);
    });

    $("#Cancel").click(function() {
        $("#RequestCard").hide();
    })


var today = new Date();
var year = today.getFullYear().toString();
var month = (today.getMonth() + 1).toString();
var date = today.getDate().toString();
if(date.length == 1) {
    date = '0' + date;
}

if(month.length == 1) {
    month = '0' + month;
}

var TodaysDate = year +"-"+ month +"-"+ date
$("#StartDate").attr('min', TodaysDate);
$("#EndDate").attr('min', TodaysDate);

});


function SubmitForm() {
    var ClientName = document.getElementById('ClientName').value;
    if(ClientName=='') 
    {
        $('#ClientName').after('<span class="error" style="color:red";>*Please Enter client Name</span>');

    }
    var Requirements = document.getElementById('SelectRequirements').value;
    if(Requirements=='') 
    {
        $('#SelectRequirements').after('<span class="error" style="color:red";>*Please Enter the Requirements</span>');

    }
    var Technology = document.getElementById('SelectTechnology').value;
    if(Technology=='') 
    {
        $('#SelectTechnology').after('<span class="error" style="color:red";>*Please Select the Technology</span>');

    }
    var JobDescription = [];
    JobDescription = document.getElementById('JobDescription').value;
    if(JobDescription=='') 
    {
        $('#JobDescription').after('<span class="error" style="color:red";>*Please Enter the Job Description</span>');
    }
    var StartDate = document.getElementById('StartDate').value;
    if(StartDate=='') 
    {
        $('#StartDate').after('<span class="error" style="color:red";>*Please Select the Start Date</span>');
    }
    var EndDate = document.getElementById('EndDate').value;
    if(EndDate=='') 
    {
        $('#EndDate').after('<span class="error" style="color:red";>*Please Select the End Date</span>');
    }
    
    else if(ClientName!='' && Requirements!='' && Technology!='' && JobDescription!=''&& StartDate!=''&&EndDate!='')
    {
        $(location).attr('href','AccountsList.html');
    }
    console.log("Client Name: "+ClientName);
    console.log("Number of Requirements: "+Requirements);
    console.log("Selected Technology: "+Technology);
    console.log("Job Description: " +JobDescription);
    console.log("Start Date: " +StartDate);
    console.log("End Date: " +EndDate);
}


