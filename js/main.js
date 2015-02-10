//key:
//size(
//        1 = special-cover
//        2 = fifty-cover
//        3 = sixty-cover
//        4 = forty-cover
//    )
(function () {
    var app = angular.module('subjects', []);
    
    app.controller('display', function(){
        this.subject = people;
    });
    
    var people = [ 
        {
            description: 'I used to work at Prakash before it was called Prakash',
            story: 'I moved to Roorkee back in 1992, when I was very young and you were not even born. Before that I used to wash dishes at the Hotel Delhi Continental. I worked for 7 years at the restaurant that is now called Prakash, back then it was called Savera. Then I worked for a while for your mess, the pots there used to be so big for me that I had to go into one to clean it. Now, I run this canteen and am also establishing shops in the city, I have been working hard all my life and I just want to keep moving ahead even if its slow. I still only sleep four hours a day.',
            image:'subjects/rajiv-canteen.jpg',
            size:'1'
        },

        {
            description: 'Lorem Ipsum',
            story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum neque a elit lobortis, pretium posuere felis molestie. Fusce a mi pellentesque, laoreet nibh quis, lobortis quam. Integer id semper orci. Nulla eget rhoncus metus, et blandit ex. In tincidunt egestas est, nec interdum nisi egestas a.',
            image:'subjects/smithy-shop-2.jpg',
            size:'2'
        },
        
        {
            description: 'I have been been sellling fruits here since the last 4 decades',
            story: 'It has been 40 years since I have been selling fruits in this campus, I have been doing it since I was a boy just like my father and his father before him. Earlier most of the campus was just woods and we used to sell fruits door to door in baskets, it used to be a lot more adventerous back then. The fruits were cheap though. We considered a student buying 1/- Re worth of fruits to be coming from a rich background. In service this long, and I have never had a kid misbehaving with me. All of you are lovely kids.',
            image:'subjects/juice-vendor.jpg',
            size:'2'
        }
    ];
})();