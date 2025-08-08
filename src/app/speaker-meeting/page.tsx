"use client";
import Link from "next/link";
import Image from "next/image";

export default function SpeakerMeeting() {
  return (
    <div>
      <div className="pam" id="pam-speaker">
        <div className="box-pam">
          <h2>Speaker Meeting Format</h2>
          <p>
        <strong>Leader:</strong>
        <br />
        <br />
        <i>
          Select people before the meeting to read the following reading cards in any
          language they like.
        </i>
        <br />
        <br />
        a) Who Is an Addict?
        <br />
        b) What Is the NA Program?
        <br />
        c) Why Are We Here?
        <br />
        d) How it Works
        <br />
        e) The Twelve Traditions
        <br />
        f) Just for Today
        <br />
        g) We Do Recover
        <br />
        <br />
        <i>Welcome members to the meeting and introduce yourself.</i>
        <br />
        <br />
        Hello, my name is______, and I am an addict. Welcome to this Ski & Recovery
        meeting of the NA Outdoor Group of Narcotics Anonymous.
        <br />
        <br />
        Before we start the meeting, I would like to remind us that this gathering of
        people from all over the world would not be possible without the seventh
        tradition and our contributions.
        <br />
        <br />
        I’d like to open this meeting with a moment of silence for the addict who still
        suffers. (15 to 20 seconds)
        <br />
        <br />
        We like to extend a special welcome to newcomers. If anyone here is attending
        their first NA meeting, would you care to introduce yourself? We ask this not to
        embarrass you, but to get to know you better.
        <br />
        <br />
        This is an “open” Narcotics Anonymous meeting. We’d like to welcome any
        nonaddict visitors and thank you for your interest in Narcotics Anonymous. We
        ask that you respect the primary purpose of this meeting, which is to provide a
        place where addicts can share their recovery with one another.
        <br />
        <br />
        <strong>Leader:</strong>
        <br />
        <br />
        For the protection of our group as well as the meeting facility, we ask that you
        have no drugs or paraphernalia on your person at the meeting. If you have any
        now, please leave, dispose of them, and return as quickly as possible.
        <br />
        <br />
        <strong>Leader:</strong>
        <br />
        <br />
        <i>Pick someone or do it yourself:</i>
        <br />
        <br />
        Recognize those with various periods of clean time— thirty, sixty, ninety days,
        six months, nine months, one year, eighteen months, and multiple years. Keytags,
        chips, or medallions may be given out.
        <br />
        <br />
        <strong>Leader:</strong>
        <br />
        <br />
        Now let&#39;s read the cards from our Basic Text:
        <br />
        <br />
        a) Who Is an Addict?
        <br />
        b) What Is the NA Program?
        <br />
        c) Why Are We Here?
        <br />
        d) How it Works
        <br />
        e) The Twelve Traditions
        <br />
        f) Just for Today
        <br />
        g) We Do Recover
        <br />
        <br />
        <strong>Leader:</strong>
        <br />
        <br />
        <i>Announce the type of meeting:</i>
        <br />
        <br />
        This is a speaker meeting and we have the privilege of having a speaker today. So
        can I get a round of applause for_______.
        <br />
        <br />
        <strong>Leader:</strong>
        <br />
        <br />
        <i>About ten minutes before the meeting is scheduled to close, announce:</i>
        <br />
        <br />
        That’s all the time we have. I’d like to thank you for attending.
        <br />
        <br />
        <strong>Leader:</strong>
        <br />
        <br />
        <i>Begin passing the helmet around, announcing:</i>
        <br />
        <br />
        The helmet being passed around is one way of practicing our Seventh Tradition,
        which says, “Every NA group ought to be fully self-supporting, declining outside
        contributions.” The money we collect pays for rent, literature, and refreshments.
        Through contributions from this group to various NA service committees, it also
        helps carry the NA message of recovery in our area and around the world.
        <br />
        <br />
        I’d like once again to thank our nonaddict guests for the interest they’ve shown
        in Narcotics Anonymous. Because of NA’s tradition of selfsupport, this group asks
        that you not contribute any money when the basket passes your way.
        <br />
        <br />
        <strong>Leader:</strong>
        <br />
        <br />
        <i>After the basket has come back around:</i>
        <br />
        <br />
        Again, thanks for coming tonight. I ask those attending to respect the anonymity
        of others they’ve seen and heard there.
        <br />
        <br />
        Would all those who care to, join in a circle to close with the Serenity Prayer
        ending with &quot;Keep coming back. It works!&quot;
        <br />
        <br />
          </p>
        </div>
      </div>
      <div>
        <Link href="/readings">
          <Image
            src="/img/left-arrow-black.png"
            alt="Back"
            width={40}
            height={40}
            className="mx-auto d-block footer fixed-bottom mb-3 hover:scale-110 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
}


