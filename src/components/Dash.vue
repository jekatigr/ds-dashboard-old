<script>
  import axios from 'axios';

  export default {
    name: 'dashboard',
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
        result.push({
          id: "Total",
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
</style>

<template>
  <b-container>
    <h1>Digital silk portfolio</h1><br><br>
    <div class="row">
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

