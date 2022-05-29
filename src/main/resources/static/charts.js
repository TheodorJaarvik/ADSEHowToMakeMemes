
const data = {
    labels: [
        'Will Smith',
        'Ukraine War',
        'Unrelated'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [4, 10, 36],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

const config = {
    type: 'doughnut',
    data: data,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Will smith & Ukraine war in top 50'
            }
        }
    }

};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);


const data2 = {
    labels: [
        'Will Smith',
        'Ukraine War',
        'Unrelated'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [348841, 660153, 2338987],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

const config2 = {
    type: 'doughnut',
    data: data2,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Will smith & Ukraine war in top 50(Amount of likes)'
            }
        }
    }

};

const myChart2 = new Chart(
    document.getElementById('myChart2'),
    config2
);



const data3 = {
    labels: [
        '01.03.2022',
        '07.03.2022',
        '14.03.2022',
        '21.03.2022',
        '28.03.2022',
        '04.04.2022'
    ],
    datasets: [{
        label: 'Sum of likes',
        data: [0,1542722, 3547226,2969464,3480969,1900486],
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
    }]
};

const config3 = {
    type: 'line',
    data: data3,
    options: {
        plugins: {
            title:{
                display: true,
                text: 'Sum of likes for every week',
                size: 18,
            legend: {
                labels: {
                    font: {
                        size: 18,
                        color:'rgb(255,255,255)',
                    }
                }
            }
           }
        }
    }
};

const myChart3 = new Chart(
    document.getElementById('myChart3'),
    config3
);