
//employeeForm gets translated into employee-form in efTemplate.html etc
angularFormsApp.directive('employeeForm',
    function () {

        return {
            restrict: 'E',              // E means we only want to use this as an element
            templateUrl: 'app/EmployeeForm/efTemplate.html'
        }
    });