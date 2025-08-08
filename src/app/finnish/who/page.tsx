"use client";
import Link from "next/link";
import Image from "next/image";

const WhoFin = () => {
    return (
        <div>
            <div className="pam" id="pam-hvem">
                <div className="box-pam">
                    <h2>
                        Kuka on addikti?
                    </h2>
                    
                    <p>
                        
                        Useimpien meistä ei tarvitse ajatella kahdesti tätä kysymystä. ME TIEDÄMME KYLLÄ! Huumeet muodossa tai toisessa olivat koko elämämme ja ajattelumme keskipiste. Hankimme huumeita, käytimme niitä ja koetimme keksiä, miten saisimme niitä lisää. Elimme käyttääksemme ja käytimme elääksemme. Yksinkertaisesti sanottuna addikti on mies tai nainen, jonka elämää huumeet hallitsevat. Olemme ihmisiä, jotka kärsivät parantumattomasta ja pahenevasta sairaudesta, jonka lopputulos on aina sama: vankilat, laitokset ja kuolema.
                    
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
export default WhoFin;