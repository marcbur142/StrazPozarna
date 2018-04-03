var app = angular.module("app", []);
    app.controller('Ctrl', ['$scope', 'con','city',  function ($scope, con, city) {
        //Zakładki
        var tabClasses;
        function initTabs() {
          tabClasses = ["",""];
        }
        $scope.getTabClass = function (tabNum) {
          return tabClasses[tabNum];
        };
        $scope.getTabPaneClass = function (tabNum) {
          return "tab-pane " + tabClasses[tabNum];
        }
        $scope.setActiveTab = function (tabNum) {
          initTabs();
          tabClasses[tabNum] = "active";
        };
        //Inicjalizacja zakładek
        initTabs();
        $scope.setActiveTab(1);
        
        //Zakładka 'zarządzanie'
        $scope.toggleJson = false;
        $scope.min = [1, 2, 3, 4, 5,6, 7, 8, 9, 10, 11, 12, 13, 14, 15,'>15'];
        $scope.maks = 10;
        $scope.able = ['Tak', 'Nie'];
        $scope.miastoA = ['Katowice','Sosnowiec'];
        $scope.miastoB = ['Koszutka','Zawodzie'];
        $scope.polaczenie = ['Katowice - Zawodzie','Sosnowiec - Koszutka'];
        $scope.formData = {able: $scope.able[0], miastoA: $scope.miastoA[0], miastoB: $scope.miastoB[0], polaczenie: $scope.polaczenie[0],  min: $scope.min[0], maks: $scope.maks};
        $scope.con = con;
        $scope.city = city;

        //Dodawanie nowego miasta
        $scope.addCity = function () {
            var fnie=$scope.miastoB.indexOf($scope.formData.newTodo);
            var ftak=$scope.miastoA.indexOf($scope.formData.newTodo);

            if($scope.formData.able==='Nie' && ftak===-1 && fnie===-1){
                let noweNiema = document.getElementById("niema");
                noweNiema.appendChild(document.createTextNode($scope.formData.newTodo+", "));
                $scope.miastoB.push($scope.formData.newTodo);
                $scope.city.push({ 'miasto':{'nazwa': $scope.formData.newTodo , 'ma_jednostke': $scope.formData.able}});
            }
            else if($scope.formData.able==='Tak' && ftak===-1 && fnie===-1){
                let noweMa = document.getElementById("ma");
                noweMa.appendChild(document.createTextNode($scope.formData.newTodo+", "));
                $scope.miastoA.push($scope.formData.newTodo); 
                $scope.city.push({ 'miasto':{'nazwa': $scope.formData.newTodo , 'ma_jednostke': $scope.formData.able}});
            }
            else if(($scope.formData.able==='Nie' && ftak!==-1) || ($scope.formData.able==='Tak' && fnie!==-1)) {
                alert("Czas przejazdu A->B jest równy czasowi przejazdu B->A!");
            }
            else{
                alert("Miasto zostało już wprowadzone!");
            };
            $scope.formData.newTodo = '';
        };
        //Dodawanie nowego połączenia
        $scope.addConnection = function () {
            var miastaa=[$scope.formData.miastoA+' - '+$scope.formData.miastoB];
            var ans,state;

            if(minim=$scope.formData.min <= $scope.formData.maks){
                ans="POPRAWNE";
            }
            else{
                ans="WYMAGA USPRAWNIENIA";
            };

        //Czy połączenie już istnieje       
        $scope.polaczenie.forEach(function(value, index, ar){
            if (value.toString() === miastaa.toString()){
                state=true;
            }
        });

        //Sprawdzanie poprawności wprowadzonych połączeń
            if(($scope.formData.miastoA!==$scope.formData.miastoB) && (state!==true)) {
                $scope.con.push({ drogi:{ 'polaczenie': miastaa.toString(),  'czas_przejazdu': $scope.formData.min},  maks_czas:{'spelniony': ans }});
                $scope.polaczenie.push(miastaa.toString());
            }
            else if (state===true){
                alert("Błędne połączenie: powiązanie już istnieje!");
             }
            else{
                alert("Błędne połączenie: takie same jednostki!");
             }
        };

        //Usuwanie połączeń
        $scope.deleteCompleted = function () {
            $scope.con = $scope.con.filter(function (item) {
                return !item.done;
            });
        };

    }]);

    app.factory('con', function () {
        return [
            {
                'drogi': { 'polaczenie': 'Katowice - Zawodzie', 'czas_przejazdu': 11 }, 'maks_czas':{'spelniony': "WYMAGA USPRAWNIENIA" }
            },
            {
                'drogi': { 'polaczenie': 'Sosnowiec - Koszutka', 'czas_przejazdu': 7 }, 'maks_czas':{'spelniony': "POPRAWNE"}
            }
        ];
    });

    app.factory('city', function () {
        return [
            {
                'miasto': { 'nazwa': 'Katowice', 'ma_jednostke': "Tak" }
            },
            {
                'miasto': { 'nazwa': 'Sosonowiec', 'ma_jednostke': "Tak" }
            }
        ];
    });