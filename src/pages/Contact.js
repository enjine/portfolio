import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as Icon from 'react-feather'
import Sectiontitle from '../components/Sectiontitle'
import Layout from '../components/Layout'
import SafeMailToLink from '../components/SafeMailToLink'

const Contact = () => {
  const [phoneNumbers, setPhoneNumbers] = useState([])
  const [emailAddress, setEmailAddress] = useState([])
  const [linkedInUrl, setLinkedInUrl] = useState([])
  const [address, setAddress] = useState([])
  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  const submitHandler = event => {
    event.preventDefault()
    if (!formdata.name) {
      setError(true)
      setMessage('Name is required')
    } else if (!formdata.email) {
      setError(true)
      setMessage('Email is required')
    } else if (!formdata.subject) {
      setError(true)
      setMessage('Subject is required')
    } else if (!formdata.message) {
      setError(true)
      setMessage('Message is required')
    } else {
      setError(false)
      setMessage('Your message has been sent.')
    }
  }
  const handleChange = event => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  // https://learnersbucket.com/examples/javascript/how-to-format-phone-number-in-javascript/
  const formatPhone = str => {
    let cleaned = ('' + str).replace(/\D/g, '')
    let match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)

    if (match) {
      let intlCode = match[1] ? '+1 ' : ''
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
    }

    return ''
  }

  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>
    } else if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>
    } else {
      return null
    }
  }

  useEffect(() => {
    axios.get('/api/contactinfo').then(response => {
      setPhoneNumbers(response.data.phoneNumbers)
      setEmailAddress(response.data.emailAddress)
      setLinkedInUrl(response.data.linkedIn)
      setAddress(response.data.address)
    })
  }, [])

  return (
    <Layout>
      <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Get In Touch" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-contact-formwrapper">
                <h4>Send me a message</h4>
                <form
                  action="#"
                  className="mi-form mi-contact-form"
                  onSubmit={submitHandler}
                >
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-name">Enter your name*</label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="name"
                      id="contact-form-name"
                      value={formdata.name}
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-email">
                      Enter your email*
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="email"
                      id="contact-form-email"
                      value={formdata.email}
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-subject">
                      Enter your subject*
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="subject"
                      id="contact-form-subject"
                      value={formdata.subject}
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-message">
                      Enter your Message*
                    </label>
                    <textarea
                      onChange={handleChange}
                      name="message"
                      id="contact-form-message"
                      cols="30"
                      rows="6"
                      value={formdata.message}
                    ></textarea>
                  </div>
                  <div className="mi-form-field">
                    <button className="mi-button" type="submit">
                      Send Mail
                    </button>
                  </div>
                </form>
                {handleAlerts()}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-contact-info">
                {!phoneNumbers || phoneNumbers.length < 1 ? null : (
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.Phone />
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>Phone</h6>
                      {phoneNumbers.map(phoneNumber => (
                        <p key={phoneNumber}>
                          <a href={`tel:${formatPhone(phoneNumber)}`}>
                            {formatPhone(phoneNumber)}
                          </a>
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                {!emailAddress ? null : (
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.Mail />
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>Email</h6>
                      {emailAddress.map(email => (
                        <p key={email}>
                          <SafeMailToLink>{email}</SafeMailToLink>
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                {!linkedInUrl ? null : (
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.Linkedin />
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>LinkedIn</h6>
                      <p key={linkedInUrl}>
                        <a
                          href={linkedInUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {linkedInUrl}
                        </a>
                      </p>
                    </div>
                  </div>
                )}
                {!address ? null : (
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.MapPin />
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>Address</h6>
                      <p>{address}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
