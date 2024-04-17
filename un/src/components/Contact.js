function Contact() {
  return (
    <div className="contact">
      <div className="con-1">
        <div className="left">
          We would love to learn more about your project and how we can help.
          Please complete our inquiry and click "Send Message". A member of our
          team will be in contact with you within the next 24 hours.
        </div>
        <div className="right">
          <h1>CONTACT US</h1>
          <p>hello@palmerkaydesign.com</p>
          <p>770.487.4455</p>
          <div>
            <h1>OUR STUDIO</h1>
            <p>Monday - Friday / 10am - 5pm</p>
            <p>2004 Commerce Drive North, Suite 100</p>
            <p>Peachtree City, GA 30269</p>
          </div>
        </div>
      </div>
      <div className="con-2">
        <div className="inputs">
          <div className="row row-1">
            <input placeholder="Name" />
            <input placeholder="Email" />
          </div>
          <div className="row row-2">
            <input placeholder="Phone" />
            <input placeholder="Project Address" />
          </div>
          <div className="row row-3">
            <input placeholder="Desired Start Date" type="date" />
            <select placeholder="Investment">
              <option value="">Investment</option>
              <option value="1">$25k-$50k</option>
              <option value="2">$50k-$75k</option>
              <option value="3">$75k-$100k</option>
              <option value="4">$100k+</option>
            </select>
          </div>
          <div className="row row-4">
            <div>
              <p>Project Type</p>
              <div>
                <input type="radio" value="full" name="project" />
                <label for="full">Full Service Home Furnishings</label>
              </div>
              <div>
                <input type="radio" value="custom" name="project" />
                <label for="custom">Custom Home Build</label>
              </div>
              <div>
                <input type="radio" value="large" name="project" />
                <label for="large">Large Scale Remodel</label>
              </div>
              <div>
                <input type="radio" value="build" name="project" />
                <label for="build">Custom Home Builder Services</label>
              </div>
              <div>
                <input type="radio" value="other" name="project" />
                <label for="other">Other</label>
              </div>
              <input placeholder="How did you hear about us?"/>
            </div>
            <textarea placeholder="Message" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
