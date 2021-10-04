import React from 'react'
import Member from './Member'
import './contactUs.css'
export default function ContactUs() {
    return (
        <div className="contactContainer">
            <h1>Meet out planet loving , tree carring team !</h1>
            <ul className="contactList">
                <Member githublink="https://github.com/qw-erty" img="https://avatars.githubusercontent.com/u/75481411?v=4" name="qw-erty"/>
                <Member githublink="https://github.com/Chetana16032002" img="https://avatars.githubusercontent.com/u/91176005?v=4" name="Chetana16032002"/>
                <Member githublink="https://github.com/dazzlerkumar" img="https://avatars.githubusercontent.com/u/18586611?v=4"name="dazzlerkumar"/>
                <Member githublink="https://github.com/greenchul" img="https://avatars.githubusercontent.com/u/64639517?v=4"name="greenchul"/>
                <Member githublink="https://github.com/Swatigupta-droid" img="https://avatars.githubusercontent.com/u/64798478?v=4"name="Swatigupta-droid"/>
            </ul>
        </div>
    )
}
