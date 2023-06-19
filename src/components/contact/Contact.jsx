import React from 'react'
import './contact.css'
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = () => {

    }

  return (
    <div className='contact' id='contact'>
        <div className="contact__container">
            <h1 className="contact__container-heading main-heading">
                CONTACT
            </h1>
            <form action="" className='form' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-field">
                    <label form="name">Name <span>*</span></label>
                    <input 
                        type="text" 
                        className={`name text-field ${errors.name && 'input-field-error'}`}
                        name='name'
                        placeholder='Your name'
                        {...register("name", {required: true})}
                    />
                    {errors.name && <p className='text-field-error'>This field is required.</p>}
                </div>
                <div className="form-field">
                    <label form="email">Email <span>*</span></label>
                    <input 
                        type="email" 
                        className={`email text-field ${errors.name && 'input-field-error'}`}
                        placeholder='youremail@email.com'
                        name="email"
                        {...register("email", {required: true})} 
                        
                     />
                     {errors.email && <p className='text-field-error'>This field is required.</p>}
                </div>
                <div className="form-field">
                    <label form="subject">Subject <span>*</span></label>
                    <input 
                        type="text" 
                        className={`subject text-field ${errors.name && 'input-field-error'}`} 
                        name='subject' 
                        placeholder='The topic of your message' 
                        {...register("subject", {required: true})} 
                    />
                    {errors.subject && <p className='text-field-error'>This field is required.</p>}
                </div>
                <div className="form-field">
                    <label form="message">Message <span>*</span></label>
                    <textarea name="message" id="message" className='text-area text-field message' cols="30" rows="10"></textarea>
                </div>
                <div className="form-field">
                    <button type="submit" className='send-btn'>Send</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact