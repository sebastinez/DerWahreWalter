# How it should work

- Die Spieler treten dem Spiel bei.
- Wenn alle beigetreten und sich ready gemeldet haben, beginnt das Spiel.

# Spielmechanik

- Einem Spieler der random ausgewählt wird, wird eine Frage gestellt in der ein Teil mit Walter überschrieben wurde.
- Der Spieler aka Sphinx tippt seine Antwort in ein Textfeld und schickt sie ab.
- Allen anderen teilnehmenden Spielern aka Fälscher wird die selbe Antwort gestellt und sie müssen ihre "gefälschten" Antworten eintippen und abschicken.
- Sobald alle Fälscher ihre Antworten abgeschickt haben werden allen Fälschern die Antworten gezeigt und jeder muss raten welche Antwort die der Sphinx ist.
- Danach werden alle Punkte gezählt die Fälscher die, die Antwort der Sphinx gewählt haben und die Fälscher die von anderen Fälschern gewählt wurden kriegen Punkte.
- Danach kommt die nächste Frage und es beginnt von vorne.

# Stories

- Von einer Datenbank mit allen Walter Fragen wird random eine ausgewählt.
- Der Sphinx Spieler wird random ausgewählt und auf seinem Bildschirm wird eine Frage gestellt
- Die Antwort der Sphinx wird mit der Frage gespeichert.
- Den Fälschern wird die Frage presentiert.
- Alle Antworten der Fälschern werden mit der Frage gespeichert.
- Die Frage zusammen mit allen Antworten werden den Spielern presentiert.
- Alle Fälscher müssen eine Antwort auswählen.
- Es wird der Punktestand berechnet anhand der richtigen Antworten
- Der Punktestand wird in der DB gespeichert.
- Repeat.
