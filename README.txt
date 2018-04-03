Autor: Marcin Bury

Nazwa: Stra¿ Po¿arna - aplikacja SPA informuj¹ca o aktualnym wykazie jednostek stra¿y po¿arnej, po³¹czeniach miêdzymiastowych, czasach przejazdu oraz uwagach dotycz¹cych czasów przejazdu.

1. Uruchomienie 

	1.1 Jeœli korzystasz z http-serwera node.js:
	- zainstaluj: 
		'npm install -g http-server'
	- po instalacji przejdŸ do folderu z projektem
		'cd' [folderu projektu] 
	- uruchom:
		'http-server -o'

	1.2 Jeœli nie korzystasz z http-serwera node.js:
	- otwórz plik 'index.html' za pomoc¹ przegl¹darki internetowej

2. Nawigacja

	2.1 Panel "Aplikacja"	
	- "Miasta z jednostk¹" - zawiera listê miast posiadaj¹cych jednostkê stra¿y po¿arnej,
	- "Miasta bez jednostki" - zawiera listê miast nie posiadaj¹cych jenostki stra¿y po¿arnej,
	- "Lista po³¹czeñ" - zawiera: 
		- listê po³¹czeñ miêdzy jednostkami stra¿y po¿arnej,
		- minimalny czas przejazdu pomiêdzy powy¿szymi jednostkami,
		- informacjê czy czas przejazdu pomiêdzy jednostkami mieœci siê w granicach czasowych narzuconych odgórnie (dla przyk³adu 10 min): jeœli TAK widzimy komunikat "Poprawny", jeœli NIE widzimy komunikat "Wymaga usprawnienia".

	2.2 Panel "Zarz¹dzanie"
	- Z poziomu okna "Dodaj miasta!" mo¿liwe jest dodanie nowych miast bior¹cych udzia³ w komunikacji miêdzymiastowej stra¿y po¿arnej z okreœleniem czy dane miasto posiada jednostkê stra¿y po¿arnej czy nie,
	- Z poziomu okna "Dodaj po³¹czenie!" mo¿liwe jest dodanie po³¹czenia pomiêdzy miastami, gdzie:
		a. pierwsze miasto zawiera tylko listê miast posiadaj¹cych jednostkê stra¿y po¿arnej,
		b. drugie miasto zawiera tylko listê miast nie posiadaj¹cych jednostki stra¿y po¿arnej,
	- Okno "Dopuszczalny czas przejazdu!" zawiera informacjê o maksymalnym dopuszczalnym czasie przejazdu pomiêdzy miastami w przypadku akcji stra¿ackiej
	- Okno "Lista po³¹czeñ + czas przejazdu" zawiera wykaz po³¹czeñ miêdzymiastowych, wraz z czasem z minimalnym przejazdu pomiêdzy miastami oraz mo¿liwoœci¹ usuniêcia wybranych po³¹czeñ, które odbywa siê poprzez zaznaczenie po³¹czenia i klikniêcia przycisku "Usuñ",
	- Okno "Czy spe³nia warunek" zawiera infromacjê czy odgórnie okreœlony maksymalny czas przejazdu pomiêdzy jednostkami nie zosta³ przekroczony (informacja:POPRAWNE) lub zosta³ przekroczony (informacja:WYMAGA USPRAWNIENIA).

3. Warunki

	- mo¿liwe jest tylko po³¹czenie: 'miasto posiadaj¹ce jednostkê'(rubryka: Pierwsze miasto) -> 'miasto nie posiadaj¹ce jednostki'(rubryka: Drugie miasto),
	- uniemo¿liwienie wprowadzenia tej samej nazwy miasta (z t¹ sam¹ wartoœci¹ w polu "Czy posiada jednostkê?") wraz z generowaniem odpowiedniego alertu,
	- uniemo¿liwienie wprowadzenia tej samej nazwy miasta (dla przeciwnej wartoœci w polu "Czy posiada jednostkê?") wraz z generowaniem odpowiedniego alertu - czas przejazu pomiêdzy A->B = B->A,
	- uniemo¿liwienie ponownego wprowadzenia tego samego po³¹czenia wraz z generowaniem odpowiedniego alertu,
	- uniemo¿liwienie wprowadzenia tych samych miast w po³¹czeniu wraz z generowaniem odpowiedniego alertu.