"use client";
import Link from "next/link";
import Image from "next/image";

const WDRDan = () => {
    return (
        <div>

            <div className="pam" id="pam-vitil">
                <div className="box-pam">
                    <h2>
                        Vi kommer i bedring
                    </h2>
                    <p>
                        Når vi ved vejs ende erkender, at vi ikke længere kan fungere
                        som menneske med eller uden stoffer, står vi alle over for det
                        samme dilemma. Hvad er der tilbage at gøre? Der synes at
                        være dette valg: Enten at fortsætte så godt vi kan til den bitre
                        ende – fængsler, institutioner eller død – eller at
                        finde en ny
                        måde at leve på. Tidligere har meget få addicts haft denne
                        anden valgmulighed. De, der er addicterede i dag, er mere
                        heldige. For første gang i menneskehedens samlede historie
                        har en simpel måde vist sig at virke i mange addicts’ liv. Den er
                        tilgængelig for os alle. Det er et enkelt åndeligt – ikke et religiøst
                        – program, kendt som Narcotics Anonymous. <br /><br /><br />
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
export default WDRDan;
