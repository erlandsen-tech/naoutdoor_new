"use client";
import Link from "next/link";
import Image from "next/image";

const WhatFin = () => {
    return (
        <div>
            <div className="pam" id="pam-hva">
                <div className="box-pam">
                    <h2>
                        Mikä on Nimettömien Narkomaanien ohjelma?
                    </h2>
                    <p>
                        NA on hyötyä tavoittelematon miesten ja naisten toveriseura niille, joille huumeista on muodostunut ensisijainen ongelma. Olemme toipuvia addikteja ja kokoonnumme säännöllisesti auttaaksemme toisiamme pysymään puhtaana. Tämä on ohjelma, jossa pidättäydytään täysin kaikista huumeista. Jäsenyydelle on vain yksi edellytys: halu lopettaa käyttäminen. Ehdotamme, että suhtaudut asiaan ennakkoluulottomasti ja annat itsellesi mahdollisuuden. Ohjelmamme koostuu niin yksinkertaisista periaatteista, että voimme noudattaa niitä jokapäiväisessä elämässämme. Tärkeintä niissä on, että ne toimivat.<br /><br />

                        NA:han ei liity mitään ehtoja. Emme kuulu mihinkään muihin järjestöihin, meillä ei ole liittymis- eikä jäsenmaksuja, emme tee emmekä allekirjoita huumeettomuus- tai muita lupauksia. Emme ole sidoksissa mihinkään poliittisiin tai uskonnollisiin ryhmiin emmekä viranomaisiin, eikä meitä valvota millään tavoin. Kuka tahansa voi liittyä meihin ikään, rotuun, sukupuoli-identiteettiin, vakaumukseen, uskontoon tai sen puuttumiseen katsomatta.<br /><br />

                        Emme ole kiinnostuneita siitä, mitä tai miten paljon olet käyttänyt emmekä siitä, mitä yhteyksiä sinulla on ollut. Meitä ei kiinnosta sekään, mitä olet aiemmin tehnyt eikä se, miten varakas tai köyhä olet. Meitä kiinnostaa vain se, mitä haluat tehdä ongelmallesi ja miten me voimme auttaa. Tulokas on ryhmän tärkein henkilö, koska voimme säilyttää sen, mitä meillä on, vain antamalla sen pois. Ryhmäkokemuksesta olemme oppineet, että ne, jotka säännöllisesti tulevat NA-kokouksiin, pysyvät puhtaana.<br /><br /><br />
                    </p>
                </div>
            </div>

            <div>
                <Link href="/finnish">
                    <Image src="/img/left-arrow-black.png" alt="Back" width={40} height={40} className="mx-auto d-block footer fixed-bottom mb-3 hover:scale-110 transition-transform" />
                </Link>
            </div>
        </div>
    );
};
export default WhatFin;