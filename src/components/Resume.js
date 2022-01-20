import React from 'react';

export default function Resume(props) {

    if (props.data) {
        var skillmessage = props.data.skillmessage;
        var education = props.data.education.map(function (education) {
            return <div key={education.school}><h3>{education.school}</h3>
                <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
                <p><strong>Conentration - </strong>{education.concentration} <strong>GPA : </strong>{education.gpa}<br/>
                <strong>Honors & Awards: </strong>{education.description}</p></div>
        })
        var work = props.data.work.map(function (work) {
            return <div key={work.company}><h3>{work.company}</h3>
                <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                <ul><li><span>&bull;</span> {work.description1}</li><li><span>&bull;</span> {work.description2}</li><li><span>&bull;</span> {work.description3}</li></ul>
            </div>
        })

        var skills = props.data.skills.map((skills) => {
            var className = 'bar-expand ' + skills.language.toLowerCase();
            return (
                <ul key={skills.language}>
                <li>
                    <strong>Languages: </strong><em>{skills.language}</em>
                </li>
                <li>
                    <strong>Frontend: </strong><em>{skills.frontend}</em>
                </li>
                <li>
                    <strong>Backend/Database/Cloud: </strong><em>{skills.backend}</em>
                </li>
                 <li>
                    <strong>Tools: </strong><em>{skills.tools}</em>
                </li>
                 <li>
                    <strong>Coursework: </strong><em>{skills.coursework}</em>
                </li>
                </ul>
            )
        })
    }

    return (
        <section id="resume">
            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            {education}
                        </div>
                    </div>
                </div>
            </div>


            <div className="row work">
                <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                </div>
                <div className="nine columns main-col">
                    {work}
                </div>
            </div>



            <div className="row skill">
                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>

                <div className="nine columns main-col">
                    <p>{skillmessage}
                    </p>
                    {skills}
                </div>
            </div>
        </section>
    );
}
