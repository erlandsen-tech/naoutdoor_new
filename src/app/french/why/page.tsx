"use client";
import Link from "next/link";
import Image from "next/image";

const WhyFre = () => {
    return (
        <div>
            <div className="pam" id="pam-hvorfor">
                <div className="box-pam">
                    <h2>
                        Pourquoi sommes-nous ici?
                    </h2>

                    <p>
                        Avant d’arriver à NA, nous avions perdu tout contrôle sur
                        notre vie. Il nous était devenu impossible de vivre et d’aimer
                        la vie comme tout le monde. Il nous fallait autre chose et nous
                        pensions l’avoir trouvé dans la drogue. Pour nous, la drogue
                        passait avant le bien-être de notre famille, de nos conjoints et
                        de nos enfants. Il nous en fallait à tout prix. Nous avons fait un
                        tort considérable à bien des gens mais surtout à nous-mêmes.
                        Par notre incapacité à assumer nos responsabilités, nous
                        arrivions en fait à créer nos propres problèmes. Nous semblions
                        incapables d’affronter la vie telle qu’elle est.<br /><br />
                    
                        La plupart d’entre nous avons réalisé que, sous l’emprise
                        de notre dépendance, nous étions en train de nous suicider
                        graduellement; la dépendance est cependant une ennemie si
                        insidieuse que nous étions devenus totalement incapables de
                        réagir. Beaucoup d’entre nous se sont retrouvés en prison ou
                        ont cherché une solution dans la médecine, la religion ou la
                        psychiatrie. Aucune de ces méthodes n’a été suffisante. Notre
                        maladie a toujours refait surface ou continué de progresser
                        jusqu’au moment où, en désespoir de cause, nous avons
                        recherché l’aide d’autres dépendants dans Narcotiques
                        Anonymes.<br />
                        
                        Après avoir connu NA, nous avons compris que nous étions
                        atteints d’une maladie actuellement incurable. Par contre,
                        sa progression peut être arrêtée à un certain point et le
                        rétablissement est alors possible.<br /><br />
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
export default WhyFre;