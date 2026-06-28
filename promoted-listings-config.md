# FashionHero — Project Config: Promoted Listings Prototype

PROJECT: FashionHero Promoted Listings MVP  
ROLE: Budujesz prototyp funkcji Promoted Listings dla FashionHero — marketplace'u modowego (2.4M kupujących, 4,200 sprzedawców, ~300 tys. zamówień/miesiąc). Model rozliczeniowy: pay-per-sale (seller płaci % od ceny sprzedaży wyłącznie gdy dojdzie do zakupu przez kliknięty promowany listing).

## Cel funkcji

Seller wybiera produkt, ustawia stawkę pay-per-sale i jego listing pojawia się na wyróżnionej pozycji w wynikach wyszukiwania i listingach kategorii oznaczony etykietą „Promowane". Platforma zarabia % od sprzedaży z promowanego miejsca, niezależnie od prowizji transakcyjnej. Cel biznesowy: 0 PLN → 900 tys. PLN/mies. przychodu pozaprowizyjnego do Q4 2026.

## Wytyczne designu

* Czysty, nowoczesny styl marketplace. Think Zalando, nie Allegro.
* Mobile-first responsive design. Większość kupujących przegląda na telefonach.
* Zdjęcia produktów to główna treść — daj im przestrzeń, nie zaśmiecaj wokół.
* Etykieta „Promowane" subtelna ale czytelna — nie może dominować nad produktem.
* Panel sellera: prosty onboarding w ≤3 krokach. Seller widzi natychmiast co robi i ile płaci.
* Używaj istniejących komponentów z aplikacji dla zachowania spójności z resztą designu.

## Styl kodu

* TypeScript strictly — żadnych typów `any`
* Używaj istniejących komponentów i wzorców z codebase zamiast tworzyć nowe od zera

## Reguły domenowe

* Sprzedawcy to niezależne sklepy, nie pracownicy FashionHero
* Opłata reklamowa = stawka sellera (%) × cena sprzedaży produktu — naliczana wyłącznie przy zakupie przez kliknięcie promowanego linku
* Promowany listing NIE zastępuje organicznego — pojawia się na wyróżnionej pozycji ponad organicznymi wynikami
* Docelowy segment: golden sellers (standard tier 20–24% prowizji, niski return rate) — nie trophy sellerzy z negotiated tier
* Średnia wartość zamówienia: ~200 PLN. Przykładowa stawka reklamowa: 3–7% = 6–14 PLN per konwersja
* Dane finansowe sprzedawcy (marże, prowizje) niewidoczne dla kupujących

## Zakres MVP — co budujesz

**Panel sellera:**
- Widok listy produktów sellera z przyciskiem „Promuj"
- Formularz kampanii: wybór produktu + ustawienie stawki pay-per-sale (% od ceny)
- Podgląd szacowanego kosztu per konwersja przy danej stawce
- Dashboard aktywnych kampanii: suma opłat, liczba sprzedaży z promocji, ROAS

**Strona kupującego:**
- Promowane listingi wyróżnione pozycją (top wyników wyszukiwania / top kategorii)
- Etykieta „Promowane" przy każdym promowanym produkcie
- Brak degradacji treści listingu — pełne zdjęcie, cena, seller jak w organicznych wynikach

**Logika:**
- Tracking kliknięcia promowanego linku (click-source)
- Naliczenie opłaty po finalizacji zakupu z promowanego kliknięcia
- Stan kampanii: aktywna / wstrzymana / zakończona (brak budżetu)

## Granice

ALWAYS:
* Dodawaj stany ładowania i błędów dla operacji asynchronicznych
* Pokazuj empty states gdy brakuje danych (np. seller bez aktywnych kampanii)
* Zachowuj istniejącą funkcjonalność przy dodawaniu nowych feature'ów
* Używaj istniejących komponentów UI dla spójności z resztą aplikacji
* Naliczaj opłatę reklamową TYLKO przy zakupie przez kliknięcie promowanego listingu — nigdy przy samym kliknięciu

ASK FIRST:
* Przed zmianą jakiegokolwiek flow checkout/płatności
* Przed modyfikacją autentykacji użytkowników
* Przed dodaniem nowej biblioteki lub zależności
* Przed zmianą struktury bazy danych
* Przed zmianą nawigacji lub layoutu strony

NEVER:
* Nie buduj modelu CPC (cost-per-click) — tylko pay-per-sale
* Nie buduj automatycznej optymalizacji stawek ani aukcji real-time
* Nie buduj wyróżnienia na poziomie profilu sellera — tylko pojedynczy produkt
* Nie wprowadzaj obowiązkowego enrollmentu — funkcja jest w 100% opcjonalna
* Nie obniżaj organicznej widoczności produktów, które nie są promowane
* Nie pokazuj danych finansowych sprzedawcy (marże, prowizje) kupującym
* Nie hardcoduj cen ani logiki biznesowej która powinna być w bazie danych
* Nie usuwaj ani nie modyfikuj istniejących feature'ów chyba że użytkownik o to poprosi

## Źródła kontekstu

* `feature-spec-promoted-listings.md` — pełna specyfikacja funkcji z user flow i kryteriami akceptacji
* `decisions/ost-stream-b.md` — OST: uzasadnienie wyboru R1, testy założeń
* `research/2026-05-17-desk-revenue-diversification.md` — benchmarki (eBay, Allegro, Vinted)
* `analyses/seller_economics.csv` — dane 500 sellerów, segmenty golden vs trophy
