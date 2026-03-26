import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#A2D135] text-black p-8 mt-12 w-full flex flex-wrap justify-around items-start">
              <div className="flex-1 min-w-[200px] mb-4">
                <h2 className="text-lg font-bold mb-2">Contact Us</h2>
                <p>Email: info@samasalaatti.com</p>
                <p>Phone: +123 456 7890</p>
              </div>

              <div className="flex-1 min-w-[200px] mb-4">
                <h2 className="text-lg font-bold mb-2">Socials</h2>
                <p><a href="https://ih1.redbubble.net/image.720304502.1422/pp,504x498-pad,600x600,f8f8f8.jpg">Facebook</a></p>
                <p><a href="https://archlinux.org/download/">Instagram</a></p>
                <p><a href="https://emp.jobylon.com/applications/jobs/347814/create/">Get a Job!</a></p>
              </div>

              <div className="flex-1 min-w-[200px] mb-4">
                <h2 className="text-lg font-bold mb-2">Branding</h2>
                <p>No branding</p>
              </div>
        </footer>
    )
}
export default Footer;