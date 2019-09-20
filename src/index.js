function SubmitForm() {
    var Requirements = document.getElementById('InputRequirementSelect').value;
    var Technology = document.getElementById('InputTechnologySelect').value;
    var JobDescription = [];
    JobDescription = document.getElementById('JobDescription').value;
    var StartDate = document.getElementById('InputStartDate').value;
    var EndDate = document.getElementById('InputEndDate').value;
    console.log("Number of Requirements: "+Requirements);
    console.log("Selected Technology: "+Technology);
    console.log("Job Description: " +JobDescription);
    console.log("Start Date: " +StartDate);
    console.log("End Date: " +EndDate);


}