import React from "react";
import "./style.css";

export default function component() {
  return (
    <div className="map-wrapper">
      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2978.6168586610984!2d112.677495!3d-7.269609000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x32f06868e8db1d43!2sCv.luki%20mandiri%20corporation!5e1!3m2!1sen!2sus!4v1614009802105!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
