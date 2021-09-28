import React, { useState} from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
// import Footer from "./components/Footer";

function App() {
  // const [projects] = useState([
  //   {
  //     name: "Email Regex",
  //     description:
  //       "An individual that possesses an on-line account know the importance of having their email address validated for access to accounts that may contain sensitive information. Thus, this is an important expression that a developer is required to build into the application, in order to protect their user personal contact information and financial information. As well as to ensure that communication with their users are being accessed by the appropriate individual.  Regex is an acronym for regular expressions. Regular expression is a string of characters that allows developer to establish patterns that assist in matching, locating and managing data. The regular expression that we will be evaluating in this tutorial is Email validation (/^([a-z0-9_.- ]+)@([da-z.-]+).([a-z.]{2,6})$/ ).",
  //   },
  //   {
  //     name: "QKP",
  //     description:
  //       "The QKP is the social network web application backend. The app allows users to share their thoughts, react to friends thoughts, and create a friend list.",
  //   },
  //   {
  //     name: "P3S Corp Budget Tracker",
  //     description:
  //       "Backend Design: The PS Corp Budget Tracker application allows Users offline access and functionality to track their budget. The User will be able to add expenses and deposits to their budget with or without a connection. The Users budget tracker will be updated with transactions entered offline, the total will be updated when the User is goes online.",
  //   },
  //   {
  //     name: "Mobile Drive in Theater",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
  //   },
  //   {
  //     name: "Stack Underflows",
  //     description:
  //       "The Stack-Underflow app is a diversified resource center where fledgling coders go to expand their knowledge to the next level. It provides coders with resources to ignite their light about a subject matter. The application provides references to websites, books, coding puzzles, and answer to questions submitted.",
  //   },
  // ]);

  // const [currentProject, setCurrentProject] = useState(projects[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        // Projects={projects}
        // setCurrentProject={setCurrentProject}
        // currentProject={currentProject}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}>
      </Nav>
      <main>
        {!contactSelected? (
          <>
          {/* <Portfolio currentProject={currentProject}></Portfolio> */}
          <About></About>
          <Resume></Resume>
          </>
        ):(
        <ContactForm></ContactForm>
        )}     
      </main>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
