new Vue(
{
    el: '#simpleApp',
    data: {

         apiData: undefined,
         selectedCountry: undefined,
         showFahfahin: false,
         playerDialog: false,
         selectedPlayer: undefined

    },
    methods: {
      loadApi: function() {
        this.$http.get('Data/data.json').
        then(this.successCallback, this.errorCallback);
      },
      successCallback: function(response) {
        this.apiData = response.data;
        console.log('successCallback this.apiData:' , this.apiData);


      },
      errorCallback: function(response) {
        console.log('error response:' , response);
      },
      selectionChanged: function() {
        console.log('selectionChanged:this.selectedCountry:', this.selectedCountry);
      },
      toggleFahfahin: function() {
        this.showFahfahin = !this.showFahfahin;
      },
      openPlayerDialog: function(player) {
      console.log('openPlayerDialog player:' , player);
      this.selectedPlayer = player;
      this.playerDialog = true;
      drawChart(player);
      }
    }}
);
