import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downloads-by-time',
  templateUrl: './downloads-by-time.component.html',
  styleUrls: ['./downloads-by-time.component.css',
    '../home/home.component.css']
})
export class DownloadsByTimeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public chartData = {
    tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'category',
        data : ['周一','周二','周三','周四','周五','周六','周日']
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [

      {
        name:'搜索引擎',
        type:'bar',
        data:[862, 1018, 964, 1026, 1679, 1600, 1570],
        markLine : {
          lineStyle: {
            normal: {
              type: 'dashed'
            }
          },
          data : [
            [{type : 'min'}, {type : 'max'}]
          ]
        }
      }
    ]
  };

}
