import React from "react";

export default function Location() {
  // 47.919739675383596, 106.90968388221269
  return (
    <div className="flex items-center justify-center mb-200px">
      <div className="w-full max-w-screen-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d634.8781415037028!2d106.90985147379304!3d47.91965537118402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693a4479572a5%3A0xd93a31b9096102ab!2sNox%20karaoke!5e1!3m2!1smn!2smn!4v1717744507436!5m2!1smn!2smn"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
