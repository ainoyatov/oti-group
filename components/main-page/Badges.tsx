import React from "react";

function Badges() {
  return (
    <div className="flex items-center gap-6 flex-wrap mt-4">
      <a
        id="COCBadgeURL"
        href="https://www.chamberofcommerce.com/business-directory/texas/dallas/real-estate-consultant/2030244278-ot-home-buyers?source=memberwebsite"
        target="_tab"
      >
        <img
          style={{
            width: "auto",
            height: "130px",
            maxWidth: "100%",
            maxHeight: "130px",
          }}
          alt="Chamber of Commerce Badge"
          id="COCBadgeIMG"
          src="https://coc.codes/images/badge/2030244278"
        />
      </a>

      <a
        href="https://www.whatsyourhours.com/united-states/dallas/real-estate-property/ot-home-buyers?from=badge"
        title="Find me on WhatsYourHours.com"
        target="_blank"
      >
        <img
          src="https://www.whatsyourhours.com/images/wyh-member-badge.jpg"
          style={{
            border: "none",
            height: "90px",
          }}
          alt="Find us on WhatsYourHours.com"
        />
      </a>

      <a
        href="https://www.bark.com/en/us/company/ot-home-buyers/AVkpJE/"
        target="_blank"
        className="bark-widget"
        data-type="reviews"
        data-id="AVkpJE"
        data-image="medium-navy"
        data-version="3.0"
      >
        OT HOME BUYERS
      </a>

      <script
        type="text/javascript"
        src="https://www.bark.com/assets/js/frontend-v2/widgets-v2.24a197bed6.v2.js"
        defer
      ></script>
    </div>
  );
}

export default Badges;
