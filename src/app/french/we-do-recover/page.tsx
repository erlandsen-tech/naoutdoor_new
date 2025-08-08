"use client";
import Link from "next/link";
import Image from "next/image";

const WDRFre = () => {
    return (
        <div>

            <div className="pam" id="pam-vitil">
                <div className="box-pam">
                    <h2>
                        Le rétablissement existe vraiment
                    </h2>
                    <p>
                    Quand, finalement, nous nous apercevons enfin de notre
                    incapacité à fonctionner comme un être humain, avec ou sans
                    drogues, nous sommes tous confrontés au même dilemme.
                    Que nous reste-il à faire ? Il semble qu’il n’y ait qu’une
                    alternative : continuer du mieux que l’on peut jusqu’au triste
                    aboutissement (la prison, l’hôpital ou la morgue) ou trouver une
                    autre façon de vivre. Par le passé, très peu de dépendants ont
                    pu choisir cette dernière possibilité. Aujourd’hui, ils ont plus
                    de chance. Pour la première fois dans l’histoire de l’humanité,
                    une méthode simple s’est révélée efficace dans la vie de
                    nombreux dépendants. Elle est accessible à tous. Il s’agit d’un
                    simple programme spirituel et non pas religieux qui s’appelle
                    Narcotiques Anonymes.<br /><br /><br />
                    </p>
                </div>
            </div>

            <div>
                <Link href="/french">
                    <Image src="/img/left-arrow-black.png" alt="Back" width={40} height={40} className="mx-auto d-block footer fixed-bottom mb-3 hover:scale-110 transition-transform" />
                </Link>
            </div>
        </div>
    );
};
export default WDRFre;
