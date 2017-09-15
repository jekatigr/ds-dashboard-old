<script>
  import axios from 'axios';
  import ECharts from 'vue-echarts/components/ECharts.vue'
  import 'echarts/lib/chart/pie'
  import 'echarts/lib/component/tooltip'
  import 'echarts/lib/component/legend'
  import 'echarts/lib/component/visualMap'

  export default {
    name: 'dashboard',
    components: {
      chart: ECharts
    },
    data () {
      return {
        updated: this.getCurrentTime(),
        assets: [
          { id: "bitcoin", name: "Bitcoin", amount: 7.1037 + 1, share: 28.54 + 4.02 },
          { id: "ethereum", name: "Ethereum", amount: 41.036, share: 11.88 },
          { id: "ethereum-classic", name: "Ethereum Classic", amount: 274.6, share: 4.08 },
          { id: "ripple", name: "Ripple", amount: 20295, share: 4.08 },
          { id: "monero", name: "Monero", amount: 150, share: 16.27 },
          { id: "iota", name: "Iota", amount: 39632, share: 19.47 },
          { id: "neo", name: "Neo", amount: 366, share: 7.62 },
          { id: "augur", name: "Augur", amount: 201.7, share: 4.05 },
        ],
        fields: {
          name: {
            label: "Currency",
            class: "text-center"
          },
          amount: {
            label: "Amount",
            class: "text-center"
          },
          share: {
            label: "%",
            class: "text-center"
          },
          price_btc: {
            label: "Price BTC",
            class: "text-center"
          },
          price_usd: {
            label: "Price USD",
            class: "text-center"
          }
        },
        pie: {
          tooltip: {
            trigger: 'item',
            formatter: '{b} : {c}%'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: []
          },
          series: [
            {
              name: 'Portfolio',
              type: 'pie',
              radius: '70%',
              center: ['70%', '50%'],
              data: [],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
      }
    },
    methods: {
      getTableRows(tableContext, callback) {
        let self = this;
        axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=40')
          .then(function (response) {
            let data = self.mapData(response.data, self.assets);
            callback(data);
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      mapData(responseData, assets) {
        let ids = assets.map((a)=>{return a.id;})
        let result = [...assets];
        let self = this;
        responseData.forEach((obj)=>{
          if (ids.includes(obj.id)) {
            self.setAssetInfo(obj, result);
          }
        })
        result.sort(function (v1, v2) {
          return v1.share < v2.share;
        });
        result.push({
          name: "Total",
          amount: null,
          share: (this.getTotal(result, "share").toFixed(0)),
          price_usd: +((this.getTotal(result, "price_usd")).toFixed(2)),
          price_btc: +((this.getTotal(result, "price_btc")).toFixed(4)),
          _rowVariant: 'warning'
        })
        return result;
      },
      setAssetInfo(obj, assets) {
        assets.forEach((asset)=>{
          if(asset.id === obj.id) {
            asset.price_usd = +((+(obj.price_usd) * asset.amount).toFixed(2));
            asset.price_btc = +((+(obj.price_btc) * asset.amount).toFixed(4));
          }
        })
      },
      getTotal(assets, field) {
        let result = 0;
        assets.forEach((asset)=>{
          result += asset[field];
        });
        return result;
      },
      getCurrentTime() {
        let d = new Date(),
        h = (d.getHours()<10?'0':'') + d.getHours(),
        m = (d.getMinutes()<10?'0':'') + d.getMinutes();
        return h + ':' + m;
      }
    },
    computed: {
      pieData() {
        let assets = this.assets;
        assets.sort(function (v1, v2) {
          return v1.share < v2.share;
        });
        this.pie.legend.data = assets.map(function(a) {return a.name;});
        this.pie.series[0].data = assets.map(function(a) {return { name: a.name, value: a.share };});
        return this.pie;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer {
    width: 100%;
    font-size: 12px;
  }
  .updated {
    text-align: right;
    float:right;
  }
  .cap {
    float:left;
  }
  .piechart {
    margin: 40px auto 20px auto;
  }
</style>

<template>
  <b-container>
    <h1>Digital silk portfolio</h1>
    <div class="row">
      <div class="piechart">
        <figure><chart :width="800" :height="600" :options="pieData" auto-resize></chart></figure>
      </div>
      <b-table striped hover bordered show-empty :items="getTableRows" :fields="fields"></b-table>
      <div class="footer">
        <div class="updated">
          <p>Updated: {{updated}}</p>
        </div>
        <div class="cap">Prices calculated according to <a href="https://coinmarketcap.com">CoinMarketCap</a>.</div>
      </div>
    </div>
  </b-container>
</template>

