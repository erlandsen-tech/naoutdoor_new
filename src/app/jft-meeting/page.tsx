"use client";
import Link from "next/link";
import Image from "next/image";

export default function JFTMeeting() {
  return (
    <div>
      <div className="pam" id="pam-jft-meeting">
        <div className="box-pam">
          <h2>Meeting format JFT/SPAD</h2>

          <p>
            <strong>Leader:</strong>
            <br />
            <br />
            <i>
              Before the meeting begins select someone to read todays text from the book.
            </i>
            <br />
            <br />
            Hello, my name is______, and I am an addict. Welcome to this Ski & Recovery
            meeting of the NA Outdoor Group of Narcotics Anonymous. I’d like to open this
            meeting with a moment of silence for the addict who still suffers.(15 to 20 seconds)
            <br />
            <br />
            We like to extend a special welcome to newcomers. If anyone here is attending
            their first NA meeting, would you care to introduce yourself? We ask this not to
            embarrass you, but to get to know you better.
            <br />
            <br />
            This is an “open” Narcotics Anonymous meeting. We’d like to welcome any
            nonaddict visitors and thank you for your interest in Narcotics Anonymous. We ask
            that you respect the primary purpose of this meeting, which is to provide a place
            where addicts can share their recovery with one another.
            <br />
            <br />
            For the protection of our group as well as the meeting facility, we ask that you
            have no drugs or paraphernalia on your person at the meeting. If you have any now,
            please leave, dispose of them, and return as quickly as possible.
            <br />
            <br />
            <i>Morning meeting is Just For Today and Lunch meeting is SPAD</i>
            <br />
            <br />
            This is a_______theme meeting and______will read todays text from the book.
            <br />
            <br />
            The Meeting is now open for sharing.
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
            The helmet being passed around is one way of practicing our Seventh Tradition,
            which says, “Every NA group ought to be fully self-supporting, declining outside
            contributions.” The money we collect pays for, rent, literature, and refreshments,
            it also helps carry the NA message of recovery in our area and around the world.
            <br />
            <br />
            <i>After the basket has come back around:</i>
            <br />
            <br />
            Again, thanks for coming tonight. Would all those who care to, join in a circle to
            close with the the Serenity Prayer followed by: "Keep coming back. It works"
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


