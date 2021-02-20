import React from "react";
import "./style.css";

export default function component() {
  return (
    <div>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="600"
            height="440"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=puri%20surya%20jaya&t=k&z=17&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
          <a href="https://yt2.org"></a>
          <br />
        </div>
      </div>
    </div>
  );
}
