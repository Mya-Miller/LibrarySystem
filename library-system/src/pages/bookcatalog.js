

function bookcatalog() {
    return (
      <div className="rowcontainer">
        <div className="thumbnail" title="honeyandspice">
          <a href="honeyandspice.html">
            <img
              src="images/HoneyandSpice.jpg"
              alt="Honey & Spice Book Cover"
              style={{width: 140, height: "auto"}}
              title="honeyandspice"
            />
          </a>
        <p>Honey & Spice</p>
      </div>

      <div className="thumbnail" title="thelioness">
        <a href="thelioness.html">
          <img
            src="images/TheLioness.jpg"
            alt="The Lioness Book Cover"
            style={{width: 140, height: "auto"}}
            title="thelioness"
          />
        </a>
        <p>The Lioness</p>
      </div>

      <div className="thumbnail" title="horse">
        <a href="horse.html">
          <img
            src="images/Horse.jpg"
            alt="Horse Book Cover"
            style={{width: 140, height: "auto"}}
            title="horse"
          />
        </a>
        <p>Horse</p>
      </div>

      <div className="thumbnail" title="anotherfamily">
        <a href="anyotherfamily.html">
          <img
            src="images/AnyOtherFamily.jpg"
            alt="Horse Book Cover"
            style={{width: 140, height: "auto"}}
            title="anotherfamily"
          />
        </a>
        <p>Any Other Family</p>
      </div>

      <div className="thumbnail" title="counterfeit">
        <a href="counterfeit.html">
          <img
            src="images/Counterfeit.jpg"
            alt="Counterfeit Book Cover"
            sstyle={{width: 140, height: "auto"}}
            title="counterfeit"
          />
        </a>
        <p>Counterfeit</p>
      </div>

      <div className="thumbnail" title="cultclassNameic">
        <a href="cultclassNameic.html">
          <img
            src="images/CultclassNameic.jpg"
            alt="CultclassNameic Book Cover"
            style={{width: 140, height: "auto"}}
            title="cultclassNameic"
          />
        </a>
        <p>Cult classNameic</p>
      </div>
    </div> );
}

export default bookcatalog;