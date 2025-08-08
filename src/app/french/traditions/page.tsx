"use client";
import Link from "next/link";
import Image from "next/image";

const TradFre = () => {
    return (
        <div>

            <div className="pam" id="pam-trad">
                <div className="box-pam">
                    <h2>

                        Les douze traditions de Narcotiques Anonymes

                    </h2>
                    
                    <p>

                        Ce n’est qu’avec vigilance que nous conservons ce que nous avons et, tout comme la liberté individuelle provient des douze étapes, celle des groupes émane des traditions.<br />

                        Aussi longtemps que les liens qui nous unissent sont plus forts que ceux qui pourraient nous diviser, tout ira bien.<br /><br />
                        
                        1. Notre bien-être commun devrait passer en premier; le rétablissement personnel dépend de l’unité de NA.<br /><br />

                        2. Dans la poursuite de notre objectif commun, il n’existe qu’une autorité ultime: un Dieu d’amour tel qu’il peut se manifester dans la conscience de notre groupe. Nos dirigeants ne sont que des serviteurs en qui nous avons placé notre confiance; ils ne gouvernent pas.<br /><br />

                        3. La seule condition requise pour devenir membre de NA est le désir d’arrêter de consommer.<br /><br />

                        4. Chaque groupe devrait être autonome, sauf sur des sujets affectant d’autres groupes ou NA dans son ensemble.<br /><br />

                        5. Chaque groupe n’a qu’un but primordial: transmettre le message au dépendant qui souffre encore.<br /><br />

                        6. Un groupe de NA ne devrait jamais cautionner, financer ou prêter le nom de NA à des organismes connexes ou à des organisations extérieures, de peur que des problèmes d’argent, de propriété ou de prestige ne nous éloignent de notre but primordial.<br /><br />

                        7. Chaque groupe de NA devrait subvenir entièrement à ses besoins et refuser toute contribution de l’extérieur.<br /><br />

                        8. NA devrait toujours demeurer non professionnel, mais nos centres de service peuvent engager des employés spécialisés.<br /><br />

                        9. NA comme tel ne devrait jamais être organisé ; cependant, nous pouvons constituer des conseils de service ou créer des comités directement responsables envers ceux qu’ils servent.<br /><br />

                        10. NA n’a aucune opinion sur des sujets extérieurs; c’est pourquoi le nom de NA ne devrait jamais être mêlé à des controverses publiques.<br /><br />

                        11. La politique de nos relations publiques est basée sur l’attrait plutôt que sur la réclame; nous devons toujours garder l’anonymat personnel au niveau des médias.<br /><br />

                        12. L’anonymat est la base spirituelle de toutes nos traditions, nous rappelant sans cesse de placer les principes au-dessus des personnalités.<br /><br />

                        La compréhension de ces traditions nous vient lentement avec le
                        temps. Nous nous informons petit à petit en discutant avec d’autres
                        membres et en rendant visite à différents groupes. En général, tant
                        que nous n’avons pas pris du service, personne ne nous signale
                        que « le rétablissement personnel dépend de l’unité de NA », et
                        que cette unité dépend de notre fidélité aux traditions. Les douze
                        traditions de NA ne sont pas négociables. Ce sont les lignes de
                        conduite qui assurent à notre fraternité la vie et la liberté.<br /><br />

                        En suivant ces lignes de conduite dans nos relations avec les
                        autres et avec la société en général, nous évitons beaucoup de
                        problèmes. Ceci ne veut pas dire que nos traditions les éliminent
                        tous. Nous devons néanmoins faire face aux difficultés au fur et
                        à mesure qu’elles se présentent: problèmes de communication,
                        divergences d’opinions, controverses internes et difficultés avec
                        des individus et des groupes qui ne font pas partie de la fraternité.
                        Toutefois, en appliquant ces principes nous évitons certains pièges.<br /><br />

                        Nombre de nos problèmes ressemblent à ceux auxquels nos
                        prédécesseurs ont dû faire face. Cette expérience, durement
                        acquise, a donné naissance aux traditions, et notre propre
                        expérience nous a montré que ces principes sont aussi valables
                        de nos jours que lorsque ces traditions ont été formulées. Nos
                        traditions nous protègent contre les forces internes et externes qui
                        pourraient nous détruire. Elles sont les liens véritables qui nous
                        unissent, et ne fonctionnent que si nous les comprenons et les
                        appliquons.<br /><br /><br />
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
export default TradFre;