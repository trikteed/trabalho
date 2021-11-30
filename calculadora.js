//Aceite a entrada do usuário do valor da conta e, em seguida, divida-o por quatro.
   //Dê esse valor para allowedPerTrade
//Aceita a entrada do usuário do preço de entrada desejado para uma negociação de ações
   //Dê esse valor para sharesPerTrade
//Calcule os preços de entrada e saída com base na entrada do usuário
//Com base nesses pontos, possíveis lucros e possíveis perdas são configurados e exibidos

$( document ).ready(function() {
  $('#outputSection').hide();
    var possibleProfit;
    var possibleLoss;
   $('#enter').on('click', function calculation(){
     $('#outputSection').show();
     //Calcule o valor permitido por negociação com base no saldo da conta
     var userAccount = $("#userAccount").val();
     var allowedPerTrade = userAccount / 4;
     $("#allowedPerTrade").html(function(){
       allowedPerTrade = Math.floor(allowedPerTrade);
       return allowedPerTrade;
     });

     //Calcule a quantidade de ações que podem ser negociadas com allowedPerTrade
     var entryPrice = $("#entryPrice").val();
     var sharesPerTrade = allowedPerTrade / entryPrice;
     $("#sharesPerTrade").html(function(){
       sharesPerTrade = Math.floor(sharesPerTrade);
       return sharesPerTrade;
     });

     //Calcule o preço limite de saída 3% acima da entrada
     var limit = (userAccount * .03) / sharesPerTrade;
     var targetLimit = Number.parseFloat(limit) + Number.parseInt(entryPrice);
     $("#targetLimit").html(function(){
       //targetLimit = targetLimit.toFixed(2);
       return targetLimit;
     });

    //Calcule o preço de saída de parada 1% abaixo da entrada
     var stop = (userAccount * .01) / sharesPerTrade;
     var targetStop = Number.parseInt(entryPrice) - Number.parseFloat(stop);
     $("#targetStop").html(function(){
       //targetStop = targetStop.toFixed(2);
       return targetStop;
     });

     //Calcule a quantidade de lucro da negociação
     var possibleProfit = limit * sharesPerTrade;
     $('#possibleProfit').html(function(){
       possibleProfit = possibleProfit.toFixed(2);
       return possibleProfit;
     });

     //Calcule o valor da possível perda da negociação
     var possibleLoss = stop * sharesPerTrade;
     $('#possibleLoss').html(function(){
       possibleLoss = possibleLoss.toFixed(2);
       return possibleLoss;
     });
     return false;
   });
 });
