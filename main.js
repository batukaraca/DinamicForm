var evam = angular.module("Evam", []);
evam.controller("FormCtrl", function ($scope) {
    $scope.forms = [];
    $scope.types = [{ code: 1, name: 'string' }, { code: 2, name: 'number' },{ code: 3, name: 'email' }];

    $scope.getdetails = function (value) {
        var field = value;
        
        switch (field) {
            case 1: 
                if ($scope.fn_check == true){
                    $scope.fn_result = true;
                    $scope.first_name = 'İsim';
                    $scope.first_name_type = 'string';
                    $scope.first_name_required = false;
                }
                else{
                    $scope.fn_result = false;
                    $scope.first_name = '';
                } 
                break;
            case 2:
                if ($scope.ln_check == true){
                    $scope.ln_result = true;
                    $scope.last_name = 'Soy İsim';
                    $scope.last_name_type = 'string';
                    $scope.last_name_required = false;
                }    
                else{
                    $scope.ln_result = false;
                    $scope.last_name = '';
                }
                break;
            case 3:
                if ($scope.bd_check == true){
                    $scope.birthdate_result = true;
                    $scope.birthdate = 'Birthdate';
                    $scope.birthdate_type = 'string';
                    $scope.birthdate_required = false;
                }  
                else{
                    $scope.birthdate_result = false;
                    $scope.birthdate = '';
                }        
                break;
            case 4:
                if ($scope.ad_check == true){
                    $scope.address_result = true;
                    $scope.address = 'Address';
                    $scope.address_type = 'string';
                    $scope.address_required = false;
                }
                else{
                    $scope.address_result = false;
                    $scope.address = '';
                }
                break;
            case 5:
                if ($scope.p_check == true){
                    $scope.phone_result = true;
                    $scope.phone = 'Telefon';
                    $scope.phone_type = 'string';
                    $scope.phone_required = false;
                }
                else{
                    $scope.phone_result = false;
                    $scope.phone = '';
                }
                break;
            case 6:
                if ($scope.mail_check == true){
                    $scope.mail_result = true;
                    $scope.mail = 'E-mail';
                    $scope.mail_type = 'string';
                    $scope.mail_required = false;
                }
                else{
                    $scope.mail_result = false;
                    $scope.mail = '';
                }
                break;
        }
    }

    $scope.update = function (value) {
        var field = value;
        switch (field) {
            case 1: $scope.first_name_type = $scope.selectedFN.name;
                break;
            case 2: $scope.last_name_type = $scope.selectedLN.name;
                break;
            case 3: $scope.birthdate_type = $scope.selectedBD.name;
                break;
            case 4: $scope.address_type = $scope.selectedAdres.name;
                break;
            case 5: $scope.phone_type = $scope.selectedP.name;
                break;
            case 6: $scope.mail_type = $scope.selectedMail.name;
                break;
        }
    }
    $scope.goPage = function(value){
        localStorage.setItem('getForm', angular.toJson(value));
        window.location.href = './forms.html';
    }
    $scope.addRow = function () {
        if ($scope.name != null && $scope.description != null) {
            $scope.created_date = new Date();
            $scope.forms.push({
                'name': $scope.name, 'description': $scope.description, 'created_date': $scope.created_date,
                fields: [{ 'first_name': $scope.first_name, 'required': $scope.first_name_required, 'type': $scope.first_name_type },
                { 'last_name': $scope.last_name, 'required': $scope.last_name_required, 'type': $scope.last_name_type },
                { 'birthdate': $scope.birthdate, 'required': $scope.birthdate_required, 'type': $scope.birthdate_type },
                { 'address': $scope.address, 'required': $scope.address_required, 'type': $scope.address_type },
                { 'phone': $scope.phone, 'required': $scope.phone_required, 'type': $scope.phone_type },
                { 'mail': $scope.mail, 'required': $scope.mail_required, 'type': $scope.mail_type },
                ]
            });
            localStorage.setItem('forms', angular.toJson($scope.forms));
        };
    }
    $scope.forms = (localStorage.getItem('forms') !== null) ? JSON.parse(localStorage.getItem('forms')) : [];
});