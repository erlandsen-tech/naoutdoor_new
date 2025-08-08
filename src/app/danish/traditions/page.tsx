"use client";
import Link from "next/link";
import Image from "next/image";

const TradDan = () => {
    return (
        <div>

            <div className="pam" id="pam-trad">
                <div className="box-pam">
                    <h2>

                    Narcotics Anonymous’ Tolv Traditioner

                    </h2>
                    <p>

                        Kun ved årvågenhed kan vi beholde det vi har, og ligesom
                        den enkeltes frihed kommer af de Tolv Trin, således udspringer
                        gruppens frihed af vores traditioner<br />

                        Så længe de bånd, der knytter os sammen, er stærkere end de,
                        der vil adskille os, vil alt være godt.<br /><br />
                        
                        1. Vores fælles velfærd bør komme først, personlig bedring afhænger af NA-sammenhold.<br /><br />

                        2. Angående vores gruppes formål er der kun én ultimativ autoritet – en kærlig Gud, som Han måtte udtrykke sig i vores gruppesamvittighed. Vores ledere er blot betroede tjenere. De bestemmer ikke.<br /><br />

                        3. Den eneste forudsætning for medlemskab er et ønske om at stoppe med at bruge.<br /><br />

                        4. Hver gruppe skal være selvstyrende, undtagen i sager der berører andre grupper eller NA som helhed.<br /><br />

                        5. Hver gruppe har kun ét hovedformål – at bringe budskabet til den addict, der stadig lider.<br /><br />

                        6. En NA-gruppe bør aldrig anbefale, finansiere eller lægge navn til nogen som helst beslægtet facilitet eller udenforstående foretagende, for at problemer med penge, ejendom eller prestige ikke skal a flede os fra vores hovedformål.<br /><br />

                        7. Enhver NA-gruppe bør være fuldstændig selvforsynende og afslå bidrag udefra.<br /><br />

                        8. Narcotics Anonymous skal altid forblive ikke-professionelt, men vores servicecentre kan beskæftige særlig arbejdskraft.<br /><br />

                        9. NA som sådan bør aldrig organiseres, men vi kan nedsætte serviceorganer eller -komitéer, direkte ansvarlige over for dem, de tjener.<br /><br />

                        10. Narcotics Anonymous har ingen holdning til udenforstående spørgsmål. NA’s navn bør derfor aldrig inddrages i offentlige kontroverser.<br /><br />

                        11. Vores forhold til offentligheden er baseret på tiltrækning frem for agitation. Vi er nødt til altid at bevare personlig anonymitet, når det drejer sig om presse, radio og film.<br /><br />

                        12. Anonymitet er det åndelige grundlag for alle vores traditioner, som altid minder os om at sætte principper før personligheder.<br /><br />

                        Forståelsen af disse traditioner kommer langsomt over en vis
                        periode. Vi samler oplysninger, når vi snakker med medlemmer
                        og besøger forskellige grupper. Som regel er det ikke, før vi
                        bliver involveret i service, at en eller anden påpeger, at ”personlig
                        bedring afhænger af NA-sammenhold”, og at dette sammenhold
                        afhænger af, hvor godt vi følger vores traditioner. NA’s Tolv
                        Traditioner er ikke til forhandling. De er de retningslinjer, som
                        holder vores fællesskab i live og uafhængigt. <br /><br />

                        Når vi følger disse retningslinjer i vores omgang med andre
                        mennesker og samfundet i det hele taget, undgår vi mange
                        problemer. Det betyder ikke, at vores traditioner fjerner alle
                        problemer. Vi må stadig se vanskeligheder i øjnene, efterhånden
                        som de opstår. Det være sig kommunikationsproblemer og
                        meningsforskelle, interne kontroverser og problemer med
                        enkeltpersoner og grupper uden for fællesskabet. Når vi alligevel
                        anvender disse principper, undgår vi nogle af faldgruberne.<br /><br />

                        Mange af vores problemer er ligesom dem, vores forgængere
                        måtte se i øjnene. Deres hårdt vundne erfaringer affødte
                        traditionerne, og vores egne erfaringer har vist, at disse principper
                        gælder lige så meget i dag, som dengang disse traditioner blev
                        formuleret. Vores traditioner beskytter os mod interne og eksterne
                        kræfter, der kan ødelægge os. De er i sandhed de bånd, der
                        knytter os sammen. Det er kun gennem forståelse og anvendelse,
                        at de virker.<br /><br /><br />
                    </p>
                </div>
            </div>

            <div>
                <Link href="/danish">
                    <Image src="/img/left-arrow-black.png" alt="Back" width={40} height={40} className="mx-auto d-block footer fixed-bottom mb-3 hover:scale-110 transition-transform" />
                </Link>
            </div>
        </div>
    );
};
export default TradDan;