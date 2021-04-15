// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

//maak een functie die email adres heeft als parameter
// de functie moet kijken wat de index is van @; .indexOf()
// functie moet via substring de waarde na@ teruggeven
// geef deze waarde in console.log




function getEmailDomain(email){
    const indexOfAt = email.indexOf("@")
//console.log(indexOfAt);
    const domain = email.substring(indexOfAt);
    console.log(domain);

}

getEmailDomain("n.eeken@novi-education.nl");

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"
// functie maken met emailadres als input
// functie checkt of emailadres bepaalde waarde heeft; includes() output is true of false
// if statement of checkt true of false en geeft console.log(student / medewerker / extern)
//

function typeOfEmail(email){
    const student = email.includes("@novi-education");
    const medewerker = email.includes("@novi.nl");
    if(student === true){
        console.log("Student")
    }
    else if (medewerker === true){
        console.log("Medewerker");
    }
    else {
        console.log("Extern")
    }

}
typeOfEmail("jaspermarsman@gmaill.com");

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity(emailadres) {
    const emailAt = emailadres.includes("@");
    const emailComma = emailadres.includes(",");
    const emailDotLast = emailadres.includes(".",emailadres.length -1);
    if (emailAt === true && emailComma === false && emailDotLast === false ){
        return true;
    }
    else {
        return false;
    }
}

const result3 = checkEmailValidity("tessmellink@novi,nl");
console.log(result3)