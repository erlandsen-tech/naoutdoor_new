"use client";
import Link from "next/link";
import Image from "next/image";

const WDRFin = () => {
    return (
        <div>

            <div className="pam" id="pam-vitil">
                <div className="box-pam">
                    <h2>
                        Me todella toivumme
                    </h2>

                    <p>
                        Kun tämän tien päässä huomaamme, ettemme enää kykene,
                        huumeiden avulla tai ilman niitä, toimimaan inhimillisesti, silloin
                        kohtaamme kaikki saman pulmatilanteen. Mitä voimme enää
                        tehdä? Ainoaksi vaihtoehdoksi näyttää jäävän, että jatkamme
                        kuten parhaiten osaamme katkeraan loppuun asti; vankilaan,
                        laitokseen tai kuolemaan – tai löydämme uuden tavan
                        elää. Entisinä aikoina on hyvin harvoilla addikteilla ollut tätä
                        jälkimmäistä vaihtoehtoa. Nykyään addiktit ovat onnekkaampia.
                        Ensimmäistä kertaa koko ihmiskunnan historian aikana on
                        meidän kaikkien ulottuvilla yksinkertainen menetelmä, joka on
                        osoittautunut monille addikteille toimivaksi. Tämän yksinkertaisen
                        hengellisen – ei uskonnollisen – ohjelman nimi on Nimettömät
                        Narkomaanit.<br /><br />
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
export default WDRFin;
