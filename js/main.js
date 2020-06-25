/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 *
 by.
 _
 ___(_)_     _
 / __| | \   / |
 \__ \ |  \_/  |
 |___/_|_|\_/|_|

 Version : 1.5.0
 Author  : SeonBeom Sim
 Website : https://github.com/simseonbeom

 - KindTiger -


 */
$(document).ready(function () {
    Logic();



    $('#fullpage').fullpage({

        anchors: ['page01', 'page02', 'page03', 'page04'],

        normalScrollElements: '',
        navigation: true,
        navigationTooltips: ['page01', 'page02', 'page03', 'page04'],

        afterLoad: function (anchorLink, index) {

            if (index == 1) {// 01 = true

                $('#section01 .text').addClass('on');

            } else { // 01 = false

            }
            if (index == 2) {// 02 = true

                $('#section02 .pic').addClass('on');

            } else {//02 = false

            }
            if (index == 3) {// 03 = true

                $('#section03 .title').addClass('on');

            } else {//03 = false

            }
            if (index == 4) {// 04 = true

                $('#footer .text').addClass('on');
                $('#footer .text_02').addClass('on');

            } else {//04 = false

            }

        },

        onLeave: function (index, destination, direction) {
            var leavingSection = this;

            if (index == 1 && direction == 'down') {//01 - >02

            }

            if (index == 2 && direction == 'down') {//02 -> 03

            } else if (index == 2 && direction == 'up') {//02 -> 01

            }

            if (index == 3 && direction == 'down') {//03 -> 04

            } else if (index == 3 && direction == 'up') {//03 -> 02

            }
            if (index == 4 && direction == 'down') {//04 -> 05

            } else if (index == 4 && direction == 'up') {//04 -> 03

            }

        }
    });



});




