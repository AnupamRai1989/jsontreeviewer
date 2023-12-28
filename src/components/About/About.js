import './About.scss';

function About() {
  return (
    <div className="about-content">
      <p>
        <b>JSON Tree Viewer</b> is quick and easy tool to view your JSON text in
        a DOM tree.
      </p>
      <label>Features:</label>
      <ul>
        <li>Validate your JSON by entering or pasting JSON text.</li>
        <li>Prettify your JSON.</li>
        <li>
          Transform/Preview your JSON text into collapsible/expandable DOM tree.
        </li>
        <li>
          Right panel which lists selected/clicked object's property in sorted
          fashion.
        </li>
      </ul>
    </div>
  );
}

export default About;
