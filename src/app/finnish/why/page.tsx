"use client";
import Link from "next/link";
import Image from "next/image";

const WhyFin = () => {
    return (
        <div>
            <div className="pam" id="pam-hvorfor">
                <div className="box-pam">
                    <h2>
                        Miksi olemme täällä?
                    </h2>

                    <p>
                        Ennen NA:n toveriseuraan tuloamme emme kyenneet hallitsemaan elämäämme. 
                        Emme kyenneet elämään ja nauttimaan elämästä muiden ihmisten tapaan. 
                        Meillä oli oltava jotain erilaista ja luulimme löytäneemme sen huumeista. 
                        Asetimme huumeiden käyttämisen perheidemme, puolisomme ja lastemme hyvinvoinnin 
                        edelle. Meidän oli saatava huumeita mihin hintaan hyvänsä. Vahingoitimme monia 
                        ihmisiä, mutta kaikkein eniten vahingoitimme itseämme. Koska emme kyenneet 
                        ottamaan vastuuta omista asioistamme, aiheutimme todellisuudessa itse omat 
                        ongelmamme. Olimme ilmeisen kyvyttömiä kohtaamaan elämän sen omilla ehdoilla.<br /><br />

                        Useimmat meistä huomasivat tekevänsä addiktiossaan hidasta itsemurhaa, 
                        mutta addiktio on niin ovela elämän vihollinen, että olimme menettäneet 
                        kyvyn tehdä asialle mitään. Monet meistä päätyivät vankilaan tai etsivät 
                        apua lääketieteestä, uskonnosta ja psykiatriasta. Mikään näistä menetelmistä 
                        ei riittänyt meille. Sairautemme puhkesi aina uudestaan tai paheni jatkuvasti, 
                        kunnes epätoivoisina haimme apua toinen toisiltamme Nimettömissä Narkomaaneissa.<br />
                    
                        Tultuamme NA:han huomasimme olevamme sairaita ihmisiä. Kärsimme sairaudesta, johon 
                        ei ole mitään tunnettua parannuskeinoa. Sen eteneminen voidaan kuitenkin pysäyttää, 
                        ja silloin toipuminen on mahdollista.<br /><br />
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
export default WhyFin;