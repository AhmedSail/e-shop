// Contact.js
import { TextField, Button } from "@mui/material";
import React from "react";
import SimpleMap from "../components/Map";

function Contact() {
  return (
    <div className="container mx-auto my-10">
      <h2 className="font-semibold text-3xl mb-5">Contact Us</h2>
      <div className="flex flex-col md:flex-row space-y-10 md:space-x-10">
        {/* Form Section */}
        <div className="w-full md:w-1/2 flex flex-col space-y-5 mt-10">
          <TextField id="name" label="Name" variant="outlined" fullWidth />
          <TextField id="email" label="Email" variant="outlined" fullWidth />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="message"
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
          />
          <Button variant="contained" color="primary">
            Send Message
          </Button>
        </div>

        {/* Map Section */}
        <div className="w-full md:w-1/2">
          <SimpleMap />
        </div>
      </div>
    </div>
  );
}

export default Contact;
