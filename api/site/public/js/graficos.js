const labels = [
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
];
const data = {
    labels: labels,
    datasets: [
    {
        label:'Cadastros',
        backgroundColor: '#77b855',
        borderColor: '#77b855',
        data: [10, 20, 15, 18, 25, 20],
    }
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {}

};

/*--------------------------------------------------------------------------*/ 

const labels2 = [];

const data2 = {
    labels: labels2,
    datasets: [{
        label: 'Feminino',
        backgroundColor: '#ef6c7a',
        borderColor: '#ef6c7a',
        data: [60],
    },
    {
        label: 'Masculino',
        backgroundColor: '#7d95a6',
        borderColor: '#7d95a6',
        data: [40],
    },
    {
        label: 'Outros',
        backgroundColor: '#9168ff',
        borderColor: '#9168ff',
        data: [22],
    }
    ]
};

const configChart2 = {
    type: 'bar',
    data: data2,
    options: {
        scales:{
            xAxes: [{
                categoryPercentage: 1.0,
                barPercentage: 0.4
            }]
        }
    }
};

/*--------------------------------------------------------------------------*/ 

    const labels3 = ['10 - 25','26 - 50',' 51 - 75 ','76 - 100'];

    const data3 = {
    labels : labels3,
    datasets: [{
    data: [20,30,20,10],
    backgroundColor: [
    '#e9821c',
    '#d66b75',
    '#54b098',
    '#679fe4'
    ]}]
    };

const configChart3 = {
    type: 'doughnut',
    data: data3,
    options: {
        cutout: 0
    },
};

/*--------------------------------------------------------------------------*/ 

//     const data4 = {
//     labels: [
//         'AC',
//         'AL',
//         'AP',
//         'AM',
//         'BA',
//         'CE',
//         'DF',
//         'ES',
//         'GO',
//         'MA',
//         'MT',
//         'MS',
//         'MG',
//         'PA',
//         'PB',
//         'PR',
//         'PE',
//         'PI',
//         'RJ',
//         'RN',
//         'RS',
//         'RO',
//         'RR',
//         'SC',
//         'SP',
//         'SE',
//         'TO',
//     ],
//     datasets: [{
//     label: 'bar',
//     data: [10, 5, 5, 0,10, 5, 5, 0,10, 5, 5, 0,10, 5, 5, 0,10, 5, 5, 0,10, 5, 5, 0,10, 5, 5],
//     backgroundColor: [
//         '#efb665', '#FF914D', '#FF3131', '#58c758',
//         '#7d34ff', '#ffa64d', '#00bcd4', '#4caf50',
//         '#ff5081', '#536dfe', '#8d6e63', '#cddc39',
//         '#9c97b0', '#2196f3', '#ff9900', '#795548',
//         '#607d8b', '#f44336', '#e98e63', '#03a984',
//         '#673ab7', '#ffc187', '#009688', '#ff5722',
//         '#8bc34a', '#00rcd4', '#4caf50', '#ffeb3b',
//     ]}]
// };

// const configChart4 = {
//     type: 'bar',
//     data: data4,
//     options: {}
// };

/*--------------------------------------------------------------------------*/ 



const myChart = new Chart(
    document.getElementById('graficoLinha'),
    config
);

const myChart2 = new Chart(
    document.getElementById('graficoBarra'),
    configChart2
);

const myChart3 = new Chart(
document.getElementById('graficoDonnut'),
    configChart3
);

// const myChart4 = new Chart(
//     document.getElementById('graficoDonnut2'),
//     configChart4
// );







