"use client";
import Link from "next/link";
import Image from "next/image";

const HowFre = () => {
    return (
        <div>
            <div className="pam" id="pam-hvordan">
                <div className="box-pam">
                    <h2>
                        Comment ça marche?
                    </h2>

                    <p>
                        Si vous désirez ce que nous avons à offrir et voulez faire
                        l’effort pour l’obtenir, vous êtes donc prêts à entreprendre
                        certaines étapes. Voici les principes qui ont rendu possible notre
                        rétablissement.<br /><br />
                        
                        1. Nous avons admis que nous étions impuissants devant notre dépendance, que nous avions perdu la maîtrise de notre vie.<br /><br />
                        
                        2. Nous en sommes venus à croire qu’une puissance supérieure à nous-mêmes pouvait nous rendre la raison.<br /><br />
                        
                        3. Nous avons décidé de confier notre volonté et notre vie aux soins de Dieu <i>tel que nous le concevions</i>.<br /><br />
                        
                        4. Nous avons fait un inventaire moral sans peur et approfondi de nous-mêmes.<br /><br />
                        
                        5. Nous avons avoué à Dieu, à nous-mêmes et à un autre être humain la nature exacte de nos torts.<br /><br />
                        
                        6. Nous avons pleinement consenti à ce que Dieu élimine tous ces défauts de caractère.<br /><br />
                        
                        7. Nous lui avons humblement demandé de nous enlever nos déficiences.<br /><br />
                        
                        8. Nous avons dressé une liste de toutes les personnes que nous avions lésées et avons résolu de leur faire amende honorable.<br /><br />
                        
                        9. Nous avons directement fait amende honorable à ces personnes dans tous les cas où c’était possible, sauf lorsque cela pouvait leur nuire ou faire tort à 
                        d’autres.<br /><br />
                        
                        10. Nous avons poursuivi notre inventaire personnel et avons promptement admis nos torts dès que nous nous en sommes aperçus.<br /><br />
                        
                        11. Nous avons cherché par la prière et la méditation à améliorer notre contact conscient avec Dieu, <i>tel que nous le concevions</i>, le priant 
                        seulement pour connaître sa volonté à notre égard et pour obtenir la force de l’exécuter.<br /><br />
                        
                        12. Ayant connu un éveil spirituel comme résultat de ces étapes, nous avons alors essayé de transmettre ce message aux dépendants et d’appliquer ces 
                        principes à tous les domaines de notre vie.<br /><br />
                        
                        Cela semble considérable et il est certain que nous ne pouvons pas tout accomplir d’un seul 
                        coup. Nous ne sommes pas devenus dépendants en un jour; alors, agissons, mais <i>allons-y doucement !</i><br /><br />
                        
                        Une chose plus que toute autre peut compromettre notre
                        rétablissement, c’est une attitude d’indifférence ou d’intolérance
                        envers les principes spirituels. Trois d’entre eux sont
                        indispensables : l’honnêteté, l’ouverture d’esprit et la bonne
                        volonté. Avec ces principes, nous sommes sur la bonne voie.<br /><br />
                        
                        Nous pensons que notre approche de la maladie de la
                        dépendance est tout à fait réaliste, car la valeur thérapeutique
                        de l’aide apportée par un dépendant à un autre est sans égale.
                        Nous croyons à l’efficacité de notre méthode, parce qu’un
                        dépendant est la personne la mieux placée pour en comprendre
                        et en aider un autre. Selon nous, plus vite nous ferons face à
                        nos problèmes quotidiens au sein de la société, plus vite nous
                        en deviendrons des membres acceptables, responsables et
                        productifs.<br /><br />
                        
                        La seule façon de ne pas retourner à la dépendance active est
                        d’éviter de reprendre de la drogue une première fois. Si vous
                        êtes comme nous, vous savez bien qu’une fois c’est trop et mille
                        fois jamais suffisant. Nous insistons beaucoup sur ce point, car
                        nous savons que lorsque nous consommons de la drogue sous
                        n’importe quelle forme ou que nous en substituons une à une
                        autre, nous redonnons libre cours à notre dépendance. <br /><br />
                        
                        Considérer l’alcool comme différent des autres drogues a
                        conduit un grand nombre de dépendants à la rechute. Avant
                        d’arriver à NA, beaucoup d’entre nous mettaient l’alcool dans
                        une catégorie à part. Nous ne pouvons pas nous permettre
                        d’illusions à ce sujet. L’alcool est une drogue. Nous sommes
                        atteints de la maladie de la dépendance et, pour nous rétablir,
                        nous devons nous abstenir de toute drogue.<br /><br /><br />
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
export default HowFre;