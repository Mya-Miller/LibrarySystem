import 'style.css';

function bookcatalog(){
    return (
<div class="rowcontainer">
      <div class="thumbnail" title="honeyandspice">
        <a href="honeyandspice.html">
          <img
            src="images/HoneyandSpice.jpg"
            alt="Honey & Spice Book Cover"
            style="width: 140px; height: auto"
            title="honeyandspice"
          />
        </a>
        <p>Honey & Spice</p>
      </div>

      <div class="thumbnail" title="thelioness">
        <a href="thelioness.html">
          <img
            src="images/TheLioness.jpg"
            alt="The Lioness Book Cover"
            style="width: 140px; height: auto"
            title="thelioness"
          />
        </a>
        <p>The Lioness</p>
      </div>

      <div class="thumbnail" title="horse">
        <a href="horse.html">
          <img
            src="images/Horse.jpg"
            alt="Horse Book Cover"
            style="width: 140px; height: auto"
            title="horse"
          />
        </a>
        <p>Horse</p>
      </div>

      <div class="thumbnail" title="anotherfamily">
        <a href="anyotherfamily.html">
          <img
            src="images/AnyOtherFamily.jpg"
            alt="Horse Book Cover"
            style="width: 140px; height: auto"
            title="anotherfamily"
          />
        </a>
        <p>Any Other Family</p>
      </div>

      <div class="thumbnail" title="counterfeit">
        <a href="counterfeit.html">
          <img
            src="images/Counterfeit.jpg"
            alt="Counterfeit Book Cover"
            style="width: 140px; height: auto"
            title="counterfeit"
          />
        </a>
        <p>Counterfeit</p>
      </div>

      <div class="thumbnail" title="cultclassic">
        <a href="cultclassic.html">
          <img
            src="images/CultClassic.jpg"
            alt="CultClassic Book Cover"
            style="width: 140px; height: auto"
            title="cultclassic"
          />
        </a>
        <p>Cult Classic</p>
      </div>
    </div> );
}

export default bookcatalog;