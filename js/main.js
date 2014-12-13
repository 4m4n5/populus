(function () {
    var app = angular.module('subjects', []);
    
    app.controller('display', function(){
        this.subject = people;
        this.DivSize = [1, 2];
    });
    
    var people =[ 
        {
            description: 'I used to work at Prakash before it was called Prakash',
            story: 'I moved to Roorkee back in 1992, when I was very young and you were not even born. Before that I used to wash dishes at the Hotel Delhi Continental. I worked for 7 years at the restaurant that is now called Prakash, back then it was called Savera. Then I worked for a while for your mess, the pots there used to be so big for me that I had to go into one to clean it. Now, I run this canteen and am also establishing shops in the city, I have been working hard all my life and i just want to keep moving ahead even if its slow. I still only sleep four hours a day.',
            image:'subjects/rajiv-canteen.jpg',
            size:'1'
        },

        {
            description: 'I used to work at Prakash before it was called Prakash',
            story: 'I moved to Roorkee back in 1992, when I was very young and you were not even born. Before that I used to wash dishes at the Hotel Delhi Continental. I worked for 7 years at the restaurant that is now called Prakash, back then it was called Savera. Then I worked for a while for your mess, the pots there used to be so big for me that I had to go into one to clean it. Now, I run this canteen and am also establishing shops in the city, I have been working hard all my life and i just want to keep moving ahead even if its slow. I still only sleep four hours a day.',
            image:'subjects/rajiv-canteen.jpg',
            size:'2'
        }   
    ];
})();