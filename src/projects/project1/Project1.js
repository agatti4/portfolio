import './CSS/index.scss';
import me from './images/me.png';


export default function Project1() {
    return (
        <div className="project1">
            <div id="head">
                <img id="me" src={me} alt="me"/>
                <div id="text">
                    <h1>Home Page</h1>
                    <h3>Anthony Gatti</h3>
                    <h3>Comp 212 Web Development</h3>
                </div>
            </div>
            <br/>
            <br/>
            <div class="buttons">
                <ul>
                    <li><a href="studentBooks.html">Student Books</a></li>
                    <li><a href="cookiesFinal.html">Cookies Final</a></li>
                </ul>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div id="info">
                <h3 class="underline">About Me</h3>
                <p>Hey my name's Anthony and I'm majoring in Computer Science and Math-Economics. I run track and cross country in my free time. I'm planning to use my degree to become a full-stack devoloper or become a software engineer.</p>
            </div>
        </div>
    )
}