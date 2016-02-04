 
    $(document).ready(function () {  
        $(document).on("click", ".classAdd", function () { //
            var rowCount = $('.stud_info').length + 1;  
            var contactdiv = '<tr class="stud_info">' + 
               '<td><input type="text" name="r-number' + rowCount + '" class="form-control r-number01" /></td>' + 
                '<td><input type="text" name="f-name' + rowCount + '" class="form-control f-name01" /></td>' +  
                '<td><input type="text" name="l-name' + rowCount + '" class="form-control l-name01" /></td>' +  
                '<td><input type="text" name="Subject' + rowCount + '" class="form-control sub-01" /></td>' +  
                '<td><button type="button" id="btnAdd" class="btn btn-xs btn-primary classAdd">Add More</button>' +  
                '<button type="button" id="btnDelete" class="deleteContact btn btn btn-danger btn-xs">Remove</button></td>' +    
                '</tr>';  
            $('#maintable').append(contactdiv); // Adding these controls to Main table class  
        });  
    });  
 
$(document).on("click", ".deleteContact", function () {  
            $(this).closest("tr").remove(); // closest used to remove the respective 'tr' in which I have my controls   
});  