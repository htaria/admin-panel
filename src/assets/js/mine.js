if (innerWidth >= 992) {
    $('.main').addClass('main-toggle');
    $('.sidebar').addClass('sidebar-toggle');
    $('.item-box').siblings('ul').slideUp();
}

if (innerWidth <= 576) {
    $('.bi-justify').on('click', function () {
        $(this).hide();
    });

    $('.bi-x').on('click', function () {
        $('.bi-justify').show();
    });

    $('.item-box').on('click', function () {
        $('.bi-justify').hide();
    });
}

jQuery(function () {
    $('.sidebar-btn').on('click', function () {
        $('.main').toggleClass('main-toggle');
        $('.sidebar').toggleClass('sidebar-toggle');
        $('.item-box').siblings('ul').slideUp();


    });

    $('.item-box').on('click', function () {
        $('.main').addClass('main-toggle');
        $('.sidebar').addClass('sidebar-toggle');
        //----------
        $('.item-box').addClass('close');
        $(this).removeClass('close');

        $('.item-box.close').siblings('ul').slideUp();
        let sidebarClass = document.getElementsByClassName('sidebar-toggle');
        $('.item-box').parents('li').removeClass('active')
        $(this).parents('li').addClass('active');
        if (sidebarClass.length > 0) {
            $(this).siblings('ul').slideToggle();
        } else {
            $('.item-box').siblings('ul').slideUp();
        }
    });
});
//====================================
new PureCounter();
//====================================
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        datasets: [
            {
                label: 'بازدید',
                data: [7, 12, 16, 18, 22, 25, 28, 30, 35, 42, 45, 50, 55, 61, 56, 50, 79, 63, 58, 68, 71, 80, 85, 95, 60, 32, 23, 46, 52, 60],


                borderWidth: 1,
                fill: {
                    target: 'origin',
                    above: 'rgb(87, 202, 235, 0.1)',   // Area will be red above the origin
                    below: 'rgb(0, 0, 255,0.1)'    // And blue below the origin
                }
            },
            {
                label: 'بازدید کننده',
                data: [5, 10, 13, 15, 19, 21, 24, 20, 25, 35, 37, 42, 47, 55, 50, 43, 71, 58, 53, 60, 59, 72, 78, 86, 47, 27, 18, 38, 45, 52],


                borderWidth: 1,
                fill: {
                    target: 'origin',
                    above: 'rgb(255, 121, 118,0.3)',   // Area will be red above the origin
                    below: 'rgb(0, 0, 255,0.1)'    // And blue below the origin
                }
            }
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 14,
                        family: "Vazir-Medium-FD-WOL"
                    }
                }
            }
        }
    }
});
//-------------------------------

const ctx_2 = document.getElementById('support-chart');
new Chart(ctx_2, {
    type: 'doughnut',
    data: {
        labels: ["تیکت های پاسخ داده شده", "تیکت های پاسخ داده نشده", "چت های فعال"],
        datasets: [
            {
                label: 'تیکت',
                data: [30, 30, 20],


                // borderWidth: 1,
            },
        ],
    },

    options: {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 14,
                        family: "Vazir-Medium-FD-WOL"
                    }
                }
            }
        }
    }
});