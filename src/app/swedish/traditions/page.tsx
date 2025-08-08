"use client";
import Link from "next/link";
import Image from "next/image";

const TradSwe = () => {
    return (
        <div>

            <div className="pam" id="pam-trad">
                <div className="box-pam">
                    <h2>

                        Anonyma Narkomaners tolv traditioner

                    </h2>
                    <p>

                        Vi behåller det vi har endast genom vaksamhet och precis som
                        frihet för individen kommer från de tolv stegen, föds frihet för
                        gruppen ur våra traditioner.<br />

                        Så länge banden som knyter oss samman är starkare än dem
                        som skulle kunna dra oss isär är allt väl.<br /><br />
                    
                        1.  Vår gemensamma välfärd ska komma i första hand; personligt tillfrisknande är beroende av NA:s enighet.<br /><br />

                        2.   För vårt gruppsyfte finns bara en högsta auktoritet – en älskande Gud såsom han kan komma till uttryck i vårt gruppsamvete. Våra ledare är enbart betrodda tjänare, de styr oss inte..<br /><br />

                        3.   Det enda villkoret för medlemskap är en önskan att sluta använda.<br /><br />

                        4.   Varje grupp ska vara självstyrande utom i angelägenheter som berör andra grupper eller NA som helhet.<br /><br />

                        5.   Varje grupp har endast ett huvudsyfte – att föra budskapet vidare till den beroende som fortfarande lider.<br /><br />

                        6.   En NA-grupp bör aldrig stödja, finansiera eller låna NA:s namn till någon besläktad inrättning eller utomstående verksamhet, så att inte problem med pengar, egendom eller prestige avleder oss från vårt huvudsyfte.<br /><br />

                        7.   Varje NA-grupp bör vara helt självförsörjande och avböja bidrag utifrån.<br /><br />

                        8.   Anonyma Narkomaner ska alltid förbli icke-professionellt, men våra servicecentra kan anställa personal för speciella uppgifter.<br /><br />

                        9.   NA som sådant bör aldrig organiseras, men vi kan bilda styrelser eller kommittéer för serviceverksamhet, direkt ansvariga inför dem de tjänar.<br /><br />

                        10.   Anonyma Narkomaner har ingen åsikt i yttre frågor, därför bör NA:s namn aldrig dras in i offentliga tvister.<br /><br />

                        11.   Vår linje i offentliga relationer grundas på attraktion snarare än på marknadsföring. Det är nödvändigt att vi alltid behåller personlig anonymitet när det gäller press, radio och film.<br /><br />

                        12.   Anonymiteten är den andliga grundvalen för alla våra traditioner och påminner oss ständigt om att ställa principer framför personligheter.<br /><br />

                        Förståelse av dessa traditioner kommer långsamt och med
                        tiden. Vi inhämtar information när vi talar med medlemmar och
                        besöker olika grupper. Det är vanligen inte förrän vi blir
                        engagerade i service som någon påpekar att ”personligt
                        tillfrisknande är beroende av NA:s enighet” och att enigheten
                        är avhängig hur väl vi följer våra traditioner. NA:s tolv
                        traditioner är inte förhandlingsbara. De är riktlinjerna som
                        håller vår gemenskap levande och fri.<br /><br />

                        Genom att följa dessa riktlinjer i våra handhavanden med
                        andra och samhället i stort undviker vi många problem. Det
                        innebär inte att våra traditioner eliminerar alla problem. Vi
                        måste fortfarande möta svårigheter allteftersom de uppstår:
                        kommunikationsproblem, skilda åsikter, interna kontroverser
                        och problem med individer och grupper utanför gemenskapen.
                        Men när vi tillämpar dessa principer undviker vi en del av
                        fallgroparna.<br /><br />

                        Många av våra problem liknar dem våra föregångare var
                        tvungna att möta. Deras dyrt förvärvade erfarenhet gav upphov
                        till traditionerna och vår egen erfarenhet har visat att dessa
                        principer är precis lika giltiga idag som de var när dessa
                        traditioner formulerades. Våra traditioner skyddar oss från de
                        inre och yttre krafter som skulle kunna förgöra oss. De är
                        förvisso banden som knyter oss samman. Det är bara genom
                        förståelse och tillämpning som de fungerar.<br /><br /><br />
                    </p>
                </div>
            </div>

            <div>
                <Link href="/swedish">
                    <Image src="/img/left-arrow-black.png" alt="Back" width={40} height={40} className="mx-auto d-block footer fixed-bottom mb-3 hover:scale-110 transition-transform" />
                </Link>
            </div>
        </div>
    );
};
export default TradSwe;