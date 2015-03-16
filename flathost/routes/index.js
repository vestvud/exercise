var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index.html', {
        title : 'Flathost',
        menu : [
            { name : 'home' },
            { name : 'features' },
            { name : 'testimonials' },
            { name : 'pricing' },
            { name : 'contact' }
        ],
        post: {
            title: "Managed Hosting vs Dedicated Hosting",
            date: "17 Jul 2013",
            comments: "16 comments",
            author: "Surjith SM",
            image: "/images/article.jpg",
            text: [
                { par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis pulvinar, tempor odio sed, adipiscing dolor. Donec nisi velit, malesuada id dolor non, elementum auctor arcu. Cras consectetur sapien et purus posuere, ac hendrerit nunc luctus. Etiam adipiscing et sapien a accumsan. Integer gravida vestibulum eros at elementum. Maecenas a velit hendrerit, tristique tortor lacinia, vehicula sapien. Cras cursus sodales posuere. Sed viverra mi mauris, at dapibus orci varius non."},
                { par: "Sed adipiscing faucibus quam, at mollis sapien imperdiet at. Curabitur fringilla eget augue id ullamcorper. Pellentesque et pretium nisl, sit amet condimentum diam. Sed tempor scelerisque magna ut volutpat. Duis laoreet tellus non ipsum vestibulum bibendum. Duis ac leo urna. Suspendisse accumsan erat sed ligula pellentesque tristique. Maecenas volutpat felis libero, eget pretium ipsum condimentum sit amet. Aenean nec fermentum metus. Integer laoreet lectus adipiscing ante molestie, a viverra enim vulputate. Donec ut porta elit. Vestibulum tristique pellentesque quam in euismod. Duis facilisis feugiat rhoncus. Nulla quis diam congue, vulputate nibh et, placerat erat. Proin et enim eleifend, pharetra sem in, adipiscing sapien."},
                { par: "Sed ultricies ullamcorper risus non interdum. Nam sapien quam, ultricies vitae erat id, pretium pellentesque risus. Sed blandit quam sed ante elementum malesuada. Ut placerat sem augue, a sollicitudin ligula suscipit id. Praesent fringilla metus ac quam suscipit, hendrerit viverra arcu ornare. Nunc fringilla, odio non consequat molestie, mi magna egestas magna, et tincidunt urna ante ut leo. Vivamus arcu mauris, vulputate sed varius posuere, volutpat ut nisl. Quisque vitae risus sem. Duis eget facilisis arcu, a gravida dolor."},
                { par: "Donec fringilla massa in imperdiet pretium. Etiam vel ligula sagittis, consectetur est at, mattis nibh. Aliquam dignissim consequat sapien id eleifend. Integer tincidunt vitae sapien vel semper. Mauris vitae suscipit sapien. Etiam imperdiet tempus eros in facilisis. Cras quis dolor ultrices, vehicula mi vel, sollicitudin orci. Nunc a elementum lectus, sed blandit elit. Phasellus sapien arcu, luctus sed nibh eget, pharetra ullamcorper dui. Maecenas eget massa ut felis lobortis cursus et id lacus. Nullam laoreet metus ac leo elementum semper. Ut laoreet arcu vel tellus vehicula convallis. Phasellus augue elit, tincidunt sit amet dolor eu, gravida egestas nibh. Sed velit ipsum, accumsan"}
            ]
        },
        categories: [
            { name : 'Dedicated Servers' },
            { name : 'Managed Hosting' },
            { name : 'News and Updates' },
            { name : 'New Features' },
            { name : 'Domian Registration' },
            { name : 'Server Locations' }
        ],
        text_widgets: [
            { name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis pulvinar, tempor odio sed, adipiscing dolor. " },
            { name: "Donec nisi velit, malesuada id dolor non, elementum auctor arcu. Cras consectetur sapien et purus posuere, ac hendrerit."}
        ],
        archives: [
            { name: "May 2013" },
            { name: "April 2013" },
            { name: "March 2013" },
            { name: "February 2013" },
            { name: "January 2013" },
            { name: "December 2012" },
            { name: "November 2012" },
            { name: "October 2012" },
            { name: "September 2012" },
            { name: "August 2012" }
        ],
        phones: [
            { txt: "+1 4528 254 247"},
            { txt: "+1 4002 188 355"},
        ],
        follows: [
            { txt: "Follow on Twitter"},
            {txt: "Like us on Facebook"},
            {  txt: " Join on Linkedin" }
        ],
        emails: [
            { txt: "support@flathost.com" },
            { txt: "sales@flathost.com" }
        ],
        company: [
            { txt: "About us" },
            { txt: "Latest from Blog" },
            { txt: "Our Team" }
        ],
        legal_terms: [
            { txt: "Terms of us" },
            { txt: "Privacy policy" }
        ],
        comments: {
            count: "110",
            items: [
                {   id: "comment1",
                    author: "Michael",
                    text: "Donec fringilla massa in imperdiet pretium. Etiam vel ligula sagittis, consectetur est at, mattis nibh. Aliquam dignissim consequat sapien id eleifend. Integer tincidunt vitae sapien vel semper. Mauris vitae suscipit sapien. Etiam imperdiet tempus eros in facilisis. Cras quis dolor ultrices, vehicula mi vel, sollicitudin orci. ",
                    time: "10",
                    image: "",
                    responses: [
                        {
                            id: "comment2",
                            author: "Sara",
                            text: "Donec fringilla massa in imperdiet pretium. Etiam vel ligula sagittis, consectetur est at, mattis nibh. Aliquam dignissim consequat sapien id eleifend. Integer tincidunt vitae sapien vel semper. Mauris vitae suscipit sapien. Etiam imperdiet tempus eros in facilisis. Cras quis dolor ultrices, vehicula mi vel, sollicitudin orci. ",
                            time: "10",
                            image: ""
                        },
                        {
                            id: "comment2",
                            author: "Michael",
                            text: "Donec fringilla massa in imperdiet pretium. Etiam vel ligula sagittis, consectetur est at, mattis nibh. Aliquam dignissim consequat sapien id eleifend. Integer tincidunt vitae sapien vel semper. Mauris vitae suscipit sapien. Etiam imperdiet tempus eros in facilisis. Cras quis dolor ultrices, vehicula mi vel, sollicitudin orci. ",
                            time: "10",
                            image: ""
                        }
                    ]
                }
            ]
        }
    });
});

module.exports = router;
