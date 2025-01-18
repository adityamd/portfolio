import React, { useContext } from "react"
import Heading from "../common/Heading"
import { FieldContext } from "../../context/FieldContext"
import { AddLocationAltOutlined, PhoneIphone, EmailOutlined} from "@mui/icons-material"
export const Contact = () => {

  const { allFields } = useContext(FieldContext)
  const contact = allFields.contact

  return (
    <>
      <div className='contact'>
        <div className='container'>
          <Heading title='Keep in touch' />
          <div className='content flexsb'>
            <div className='right'>
              <form>
                <div className='flex'>
                  <input type='text' placeholder='Name' data-aos='flip-left' />
                  <input type='email' placeholder='Email' data-aos='flip-right' />
                </div>
                <input type='email' placeholder='Subject' data-aos='flip-up' />
                <textarea name='' id='' cols='30' rows='10' data-aos='flip-down'></textarea>
                <button data-aos='zoom-in-up'>Submit</button>
              </form>
            </div>
            <div className='left'>
              <div className='box' data-aos='zoom-in'>
                <i><AddLocationAltOutlined /></i>
                <p>{contact.addr1}</p>
                <p>{contact.addr2}</p>
              </div>
              <div className='box' data-aos='zoom-in'>
                <i><PhoneIphone /></i>
                <p>{contact.phone1}</p>
                <p>{contact.phone2}</p>
              </div>
              <div className='box' data-aos='zoom-in'>
                <i><EmailOutlined /></i>
                <p>{contact.email1}</p>
                <p>{contact.email2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
