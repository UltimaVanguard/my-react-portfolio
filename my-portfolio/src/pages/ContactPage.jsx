import { useState } from 'react';

function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] =useState('');

    return (
        <div className="m-3 p-3">
            <h2 className="text-center">Contact Me</h2>
            {/* <form className="ui form" onSubmit={sendTerm}> */}
            <form className="d-flex flex-row flex-wrap justify-content-center align-items-center"
                  action="https://formspree.io/f/xkndlnvo" method="POST">
                <div className="p-3 col-12 col-lg-4 d-flex justify-content-center">
                    <label className='p-1'>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                    />
                </div>
                <div className="d-flex justify-content-center p-3 col-12 col-lg-4">
                    <label className='p-1'>Email:</label>
                    <input
                        type="text"
                        value={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </div>
                <div className="p-3 col-12 col-lg-10 d-flex align-items-top justify-content-center">
                    <label className='p-1'>Message:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        name="message"
                        placeholder="Message"
                    ></textarea>
                </div>
                <div className="col-12 col-lg-3 d-flex justify-content-center">
                    <button className="btn btn-block py-3" type="submit">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactPage;