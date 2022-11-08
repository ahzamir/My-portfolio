import React from 'react';
import contactSvg from '../../assets/svgs/contact-page.svg';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const Contact = () => {
    const ValidationTextField = styled(TextField)({
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'var(--quaternary-color)',
            },
            '&:hover fieldset': {
                borderColor: 'var(--tertiary-color)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'var(--secondary-color)',
                boxShadow: '0 0 6px 0 var(--secondary-color)',
            },
        },
        '& .MuiFormHelperText-root': {
            color: 'var(--quaternary-color)',
        },
        '& input:valid + fieldset': {
            borderColor: 'green',
            borderWidth: 2,
            boxShadow: '0 0 8px green',
        },
        '& input': {
            color: 'var(--quaternary-color)',
        },
        '& label': {
            color: 'var(--quaternary-color)',
            opacity: '0.7',
        },
        '& label.Mui-focused': {
            color: 'var(--secondary-color)',
            opacity: '1',
        },
    });

    return (
        <section id="contact" className="row m-0 mt-md-5 mb-md-5">
            <div className="col-md-8">
                <div className="d-flex mb-4">
                    <h2 className="secondary-color mb-3 fw-bold fs-4">Contact Me</h2>
                    <hr className="ms-3 w-25" />
                </div>
                <div>
                    <p className="tertiary-color mb-3 fw-bold fs-6">I'm always interested in hearing about new projects, so if you'd like to chat
                        please get in touch.</p>
                    <form action="https://formspree.io/f/xayvdjzb" method="post" autoComplete="off">
                        <ValidationTextField
                            label="Name"
                            variant="outlined"
                            className="mb-3"
                            fullWidth
                            required
                            helperText="Please enter your name"
                            name="name"
                            type="text"
                        />
                        <ValidationTextField
                            label="Email"
                            variant="outlined"
                            className="mb-3"
                            fullWidth
                            required
                            helperText="Please enter your email"
                            name="email"
                            type="email"
                        />
                        <ValidationTextField
                            label="Message"
                            variant="outlined"
                            className="mb-3"
                            fullWidth
                            required
                            helperText="Please enter your message"
                            multiline
                            rows={4}
                            name="message"
                            type="text"
                            InputProps={{
                                style: {
                                    color: 'var(--quaternary-color)',
                                },
                            }}
                        />
                        <button type="submit" value="send" className="btn bg-main border-white secondary-color mt-3">Submit</button>
                    </form>
                </div>
            </div>
            <div className="col-md-4 d-none d-md-flex justify-content-center align-items-center">
                <img src={contactSvg} alt="Home" className="img-fluid" />
            </div>
        </section >
    );
}

export default Contact;
