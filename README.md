Autor: Marcin Bury

Nazwa: Stra� Po�arna - aplikacja SPA informuj�ca o aktualnym wykazie jednostek stra�y po�arnej, po��czeniach mi�dzymiastowych, czasach przejazdu oraz uwagach dotycz�cych czas�w przejazdu.

1. Uruchomienie 

	1.1 Je�li korzystasz z http-serwera node.js:
	- zainstaluj: 
		'npm install -g http-server'
	- po instalacji przejd� do folderu z projektem
		'cd' [folderu projektu] 
	- uruchom:
		'http-server -o'

	1.2 Je�li nie korzystasz z http-serwera node.js:
	- otw�rz plik 'index.html' za pomoc� przegl�darki internetowej

2. Nawigacja

	2.1 Panel "Aplikacja"	
	- "Miasta z jednostk�" - zawiera list� miast posiadaj�cych jednostk� stra�y po�arnej,
	- "Miasta bez jednostki" - zawiera list� miast nie posiadaj�cych jenostki stra�y po�arnej,
	- "Lista po��cze�" - zawiera: 
		- list� po��cze� mi�dzy jednostkami stra�y po�arnej,
		- minimalny czas przejazdu pomi�dzy powy�szymi jednostkami,
		- informacj� czy czas przejazdu pomi�dzy jednostkami mie�ci si� w granicach czasowych narzuconych odg�rnie (dla przyk�adu 10 min): je�li TAK widzimy komunikat "Poprawny", je�li NIE widzimy komunikat "Wymaga usprawnienia".

	2.2 Panel "Zarz�dzanie"
	- Z poziomu okna "Dodaj miasta!" mo�liwe jest dodanie nowych miast bior�cych udzia� w komunikacji mi�dzymiastowej stra�y po�arnej z okre�leniem czy dane miasto posiada jednostk� stra�y po�arnej czy nie,
	- Z poziomu okna "Dodaj po��czenie!" mo�liwe jest dodanie po��czenia pomi�dzy miastami, gdzie:
		a. pierwsze miasto zawiera tylko list� miast posiadaj�cych jednostk� stra�y po�arnej,
		b. drugie miasto zawiera tylko list� miast nie posiadaj�cych jednostki stra�y po�arnej,
	- Okno "Dopuszczalny czas przejazdu!" zawiera informacj� o maksymalnym dopuszczalnym czasie przejazdu pomi�dzy miastami w przypadku akcji stra�ackiej
	- Okno "Lista po��cze� + czas przejazdu" zawiera wykaz po��cze� mi�dzymiastowych, wraz z czasem z minimalnym przejazdu pomi�dzy miastami oraz mo�liwo�ci� usuni�cia wybranych po��cze�, kt�re odbywa si� poprzez zaznaczenie po��czenia i klikni�cia przycisku "Usu�",
	- Okno "Czy spe�nia warunek" zawiera infromacj� czy odg�rnie okre�lony maksymalny czas przejazdu pomi�dzy jednostkami nie zosta� przekroczony (informacja:POPRAWNE) lub zosta� przekroczony (informacja:WYMAGA USPRAWNIENIA).

3. Warunki

	- mo�liwe jest tylko po��czenie: 'miasto posiadaj�ce jednostk�'(rubryka: Pierwsze miasto) -> 'miasto nie posiadaj�ce jednostki'(rubryka: Drugie miasto),
	- uniemo�liwienie wprowadzenia tej samej nazwy miasta (z t� sam� warto�ci� w polu "Czy posiada jednostk�?") wraz z generowaniem odpowiedniego alertu,
	- uniemo�liwienie wprowadzenia tej samej nazwy miasta (dla przeciwnej warto�ci w polu "Czy posiada jednostk�?") wraz z generowaniem odpowiedniego alertu - czas przejazu pomi�dzy A->B = B->A,
	- uniemo�liwienie ponownego wprowadzenia tego samego po��czenia wraz z generowaniem odpowiedniego alertu,
	- uniemo�liwienie wprowadzenia tych samych miast w po��czeniu wraz z generowaniem odpowiedniego alertu.