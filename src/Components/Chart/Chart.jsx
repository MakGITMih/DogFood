import { useEffect, useState } from 'react';
import * as echarts from 'echarts';


export function Chart () {

  useEffect (() => {
    const option = {
      title: {
        text: 'World Population'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
      },
      series: [
        {
          name: '2011',
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
          name: '2012',
          type: 'bar',
          data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
      ]
    };
    const chartDom = document.getElementById('chartsId');
    const myChart = echarts.init(chartDom);
    option && myChart.setOption(option);
    
  },[] );

   

  //   const [option, setOpt] = useState(null);
  //   let base = +new Date(1968, 9, 3);
  //   let oneDay = 24 * 3600 * 1000;
  //   let date = [];
  //   let data = [Math.random() * 300];

  //   useEffect(() =>{
  //       let options = {
  //         tooltip: {
  //           trigger: 'axis',
  //           position: function (pt) {
  //             return [pt[0], '10%'];
  //           }
  //         },
  //         title: {
  //           left: 'center',
  //           text: 'Large Area Chart'
  //         },
  //         toolbox: {
  //           feature: {
  //             dataZoom: {
  //               yAxisIndex: 'none'
  //             },
  //             restore: {},
  //             saveAsImage: {}
  //           }
  //         },
  //         xAxis: {
  //           type: 'category',
  //           boundaryGap: false,
  //           data: date
  //         },
  //         yAxis: {
  //           type: 'value',
  //           boundaryGap: [0, '100%']
  //         },
  //         dataZoom: [
  //           {
  //             type: 'inside',
  //             start: 0,
  //             end: 10
  //           },
  //           {
  //             start: 0,
  //             end: 10
  //           }
  //         ],
  //         series: [
  //           {
  //             name: 'Fake Data',
  //             type: 'line',
  //             symbol: 'none',
  //             sampling: 'lttb',
  //             itemStyle: {
  //               color: 'rgb(255, 70, 131)'
  //             },
  //             areaStyle: {
  //               color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  //                 {
  //                   offset: 0,
  //                   color: 
  //                   'rgb(255, 158, 68)'
  //                 },
  //                 {
  //                   offset: 1,
  //                   color: 'rgb(255, 70, 131)'
  //                 }
  //               ])
  //             },
  //             data: data
  //           }
  //         ]
  //       };
  //       setOpt(options);
  // }, []);

  //       useEffect(() =>{
  //           for (let i = 1; i < 20000; i++) {
  //             let now = new Date((base += oneDay));
  //             date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
  //             data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
  //           }
            
  //           const chartDom = document.getElementById('chartsId');
  //           const myChart = echarts.init(chartDom);
  //           option && myChart.setOption(option);
  //         }, [option]);
    
    return (
        <>
          <div
           className='chart _container' 
          style={{ width: '500px', height: '500px', }} 
          id='chartsId'></div>
        </>
      );
    };