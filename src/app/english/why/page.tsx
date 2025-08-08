"use client";
import Link from "next/link";
import Image from "next/image";

const WhyEng = () => {
    return (
        <div>
            <div className="pam" id="pam-hvorfor">
                <div className="box-pam">
                    <h2>
                        Why Are We Here?
                    </h2>
                    <p>
                        Before coming to the Fellowship of NA, we could not
                        manage our own lives. We could not live and enjoy life as other
                        people do. We had to have something different and we thought
                        we had found it in drugs. We placed their use ahead of the
                        welfare of our families, our wives, husbands, and our children.
                        We had to have drugs at all costs. We did many people great
                        harm but most of all we harmed ourselves. Through our
                        inability to accept personal responsibilities we were actually
                        creating our own problems. We seemed to be incapable of
                        facing life on its own terms.<br /><br />
                    
                        Most of us realized that in our addiction we were slowly
                        committing suicide, but addiction is such a cunning enemy of
                        life that we had lost the power to do anything about it. Many of
                        us ended up in jail or sought help through medicine, religion,
                        and psychiatry. None of these methods was sufficient for us.
                        Our disease always resurfaced or continued to progress until
                        in desperation we sought help from each other in Narcotics
                        Anonymous.<br />
                    
                        After coming to NA, we realized we were sick people. We
                        suffered from a disease from which there is no known cure. It
                        can, however, be arrested at some point and recovery is then
                        possible.<br /><br />
                    </p>
                </div>
            </div>
            <div>
                <Link href="/english">
                    <Image src="/img/left-arrow-black.png" alt="Back" width={40} height={40} className="mx-auto d-block footer fixed-bottom mb-3 hover:scale-110 transition-transform" />
                </Link>
            </div>
        </div>
    );
};
export default WhyEng;