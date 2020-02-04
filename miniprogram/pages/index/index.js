import instruments from '../../assets/utils/utils'

Page({
  data: {
    imgSrc: ['/assets/image/banner-1.png', '/assets/image/banner-2.png', '/assets/image/banner-3.png'],
    activeKey: 0,
    activeType: 0,
    instruments: [
    //   {
    //   title: '高周波行业专用仪表',
    //   types: [
    //     '100S系列', '80S系列', '44C2系列'
    //   ]
    // }, {
    //   title: '超声波行业专用仪表',
    //   types: [
    //     '670系列', '85系列'
    //   ]
    // }, {
    //   title: 'CH-120HL上下限报警表',
    //   types: [
    //     'CH-120HL上下限报警表'
    //   ]
    // }, {
    //   title: '广角表/船用表',
    //   types: [
    //     '交直流电流电压表',
    //     '带报警功能交直流仪表',
    //     '轻速表、压力表、夜光表',
    //     '频率表',
    //     '功率因数表',
    //     '功率表',
    //     '带隔离电量变送输出功率表',
    //     '带逆功率继电器功能的功率表',
    //     '带并车指令S同步表',
    //     '相序表（96*96、72*71',
    //     '双指针（双机构）电压表、频率',
    //     '三相电子式多功能电能表',
    //     '舵角表',
    //     'Pt100热电偶温度表、压力表'
    //   ]
    // }, {
    //   title: '数显表系列',
    //   types: [
    //     'RA-AA、DA系列数显单相电流表',
    //     'RA-3AA系列数显三相电流表',
    //     'RA-AV、DV系列数显单相电压表',
    //     'RA-3AV系列数显三相电压表',
    //     'RA-F系列数显频率表',
    //     'RA-P、Q系列数显功率表',
    //     'RA-H系列数显功率因数表',
    //     'RA系列数显组合表',
    //     '温湿度控制器',
    //     '多功能监控仪表',
    //     '电量变送器',
    //     '出口型电流电压频率表'
    //   ]
    // }, {
    //   title: '出口表系列',
    //   types: ['暂无']
    // }
  ],
    currentInstruments: {
      // title: '高周波行业专用仪表',
      // types: [
      //   '100S系列', '80S系列', '44C2系列'
      // ]
    },
    currentInstrument: {},
    show: false,
    actions: [
      {
        name: '选项'
      },
      {
        name: '选项'
      },
      {
        name: '选项',
        subname: '副文本',
        openType: 'share'
      }
    ]
  },

  onLoad() {
    this.setData({
      instruments,
    })
  },
  onReady() {
    const currentInstruments = instruments[0]
    this.setData({
      currentInstruments
    })
    console.log(this.data.currentInstruments);
    
  },
  onClose() {
    this.setData({ show: false });
  },

  onSelect(event) {
    console.log(event.detail);
  },
  openDetail(event){
    console.log(event.target.dataset.detail)
    const currentInstrument = event.target.dataset.detail;
    this.setData({
      show: true,
      currentInstrument
    })
  },
  onChange(event) {
    const currentInstruments = this.data.instruments[event.detail];
    this.setData({
      active: event.detail,
      currentInstruments
    });
  },
  changeType(event) {
    console.log(event);
    wx.showToast({
      title: `切换到 ${event.detail.title}`,
      icon: 'none'
    });
  }
});

//Page Object
// Page({
//   data: {
    
//   },
//   //options(Object)
//   onLoad: function(options){
    
//   },
//   onReady: function(){
    
//   },
//   onShow: function(){
    
//   },
//   onHide: function(){

//   },
//   onUnload: function(){

//   },
//   onPullDownRefresh: function(){

//   },
//   onReachBottom: function(){

//   },
//   onShareAppMessage: function(){

//   },
//   onPageScroll: function(){

//   },
//   //item(index,pagePath,text)
//   onTabItemTap:function(item){

//   }
// });