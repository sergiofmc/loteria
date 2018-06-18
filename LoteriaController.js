var ang = angular.module('Loteria', []);
ang.controller('LoteriaController', LoteriaController);
LoteriaController.$inject = ['$scope','$rootScope','$http','$filter','$interval','$timeout'];

function LoteriaController($scope,$rootScope, $http,$filter,$interval,$timeout){

    $scope.listaNumerosPendientes;
    $scope.ultimoNumero;
    $scope.listaNumerosElegidos;
    $scope.indice = 0;

    $scope.iniciarJuego = function(){
        var total = 90;
        for(var i=0; i<90; ++i){
            var nuevoNumero = new NumeroLoteria(Math.random(),i);
            while($scope.listaNumerosPendientes[nuevoNumero.posicion]!=undefined){
                nuevoNumero = new NumeroLoteria(i);
            }
            $scope.listaNumerosPendientes[nuevoNumero.posicion] = nuevoNumero;
        }
        $scope.listaNumerosElegidos = [];
    };
    $scope.sacarNumero = funtion(){
        var sacado = $scope.indice++;
        $scope.ultimoNumero = $scope.listaNumerosPendientes[sacado].numero;
        $scope.listaNumerosPendientes[sacado].elegido = true;
        $scope.listaNumerosElegidos.push($scope.ultimoNumero);
    };
};
    
function NumeroLoteria(aleatorio, numero){
    this.posicion = aleatorio * 90;
    this.numero = numero;
    this.elegido = false;
    
} 