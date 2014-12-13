(function(){
    var app = angular.module('subjects', []);
    
    app.controller('display', function(){
        this.subject = people;
    });
    
    var people =[ 
        {
            description: '',
            story: '',
            image:'',
            size:''
        },

        {

        }   
    ];
})();