import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faClock, faEnvelope, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useForm, Controller } from "react-hook-form";

const ContactField = () => {
    return (
        <div className='bg-white px-4 xl:px-24 py-20'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-16'>
                <div className='w-full lg:w-1/2 rounded-[30px] h-[380px] md:h-[600px]'>
                    <img className='rounded-[40px] w-full h-full object-cover' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/contact-us-img.jpg" alt="" />
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='flex items-center gap-2'>
                        <span><FontAwesomeIcon icon={faCircleCheck} className='text-[#0E384C]' /></span>
                        <p className='text-[#0E384C]'>CONTACT NOW</p>
                    </div>
                    <div className='mt-1'>
                        <h1 className='text-3xl md:text-5xl mt-3 font-bold text-[#0E384C]'>
                            <span className='text-[#1E84B5]'>Get </span> In Touch With Us
                        </h1>
                    </div>
                    <div>
                        {/* <div className='flex items-center justify-center gap-2 md:gap-8'>
                            <Input className='w-full h-14 mt-5 md:mt-10' placeholder='Enter Name' />
                            <Input className='w-full h-14 mt-5 md:mt-10' placeholder='Enter Email' />
                        </div>
                        <div className='flex items-center justify-center gap-2 md:gap-8'>
                            <Input className='w-full h-14 mt-5 md:mt-10' placeholder='Phone Number' />
                            <Input className='w-full h-14 mt-5 md:mt-10' placeholder='Subject' />
                        </div>
                        <div>
                            <Textarea className='w-full mt-5 md:mt-10' placeholder='Enter Message' />
                        </div>
                        <div>
                            <Button variant="Default" className='w-full text-white bg-[#1E84B5] mt-5 md:mt-10'>Send Message</Button>
                        </div> */}

                        <ContactFrom />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactField




export const ContactFrom = () => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm({
        mode: "onTouched",
        defaultValues: {
          Username: '',
          email: '',
          Number: '',
          Subject: '',
          Message: '',
        },
      });

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <div className='w-full'>
        <form
          className="mt-5 md:mt-10 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='flex items-center justify-center gap-5 w-full'>
            <div className='h-24 w-full'>
              <Controller
                name="Username"
                rules={{
                  required: "Username is Required",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters required",
                  },
                }}
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    className="w-full h-14"
                    size="lg"
                    placeholder="Enter Name"
                    error={Boolean(errors?.Username?.message)}
                  />
                )}
              />
              {errors?.Username?.message && (
                <span className="text-red-600 text-sm">{errors?.Username?.message}</span>
              )}
            </div>
            <div className='h-24 w-full'>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email ID is Required",
                  pattern: {
                    value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                    message: "Email ID is invalid",
                  },
                }}
                render={({ field }) => (
                  <Input
                    type="email"
                    className="w-full h-14"
                    size="lg"
                    {...field}
                    placeholder="Email ID"
                    error={Boolean(errors?.email?.message)}
                  />
                )}
              />
              {errors?.email?.message && (
                <span className="text-red-600 text-sm">{errors?.email?.message}</span>
              )}
            </div>
          </div>
          <div className='flex items-center justify-center gap-5 w-full'>
            <div className='h-24 w-full'>
              <Controller
                name="Number"
                rules={{
                  required: "Phone Number is Required",
                  minLength: {
                    value: 10,
                    message: "Minimum 10 characters required",
                  },
                }}
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    size="lg"
                    className="w-full h-14"
                    placeholder="Phone Number"
                    error={Boolean(errors?.Number?.message)}
                  />
                )}
              />
              {errors?.Number?.message && (
                <span className="text-red-600 text-sm">{errors?.Number?.message}</span>
              )}
            </div>
            <div className='h-24 w-full'>
              <Controller
                name="Subject"
                rules={{
                  required: "Subject is Required",
                  minLength: {
                    value: 5,
                    message: "Minimum 5 characters required",
                  },
                }}
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    size="lg"
                    className="w-full h-14"
                    placeholder="Subject"
                    error={Boolean(errors?.Subject?.message)}
                  />
                )}
              />
              {errors?.Subject?.message && (
                <span className="text-red-600 text-sm">{errors?.Subject?.message}</span>
              )}
            </div>
          </div>
          <div>
            <Controller
              name="Message"
              control={control}
              render={({ field }) => (
                <Textarea
                  {...field}
                  size="lg"
                  className="w-full h-14"
                  placeholder="Enter Message"
                />
              )}
            />
          </div>
          <div className="flex items-center justify-center mt-5 md:mt-10 gap-5">
            <Button variant="Default" type="reset" className="w-full border-2 border-[#1E84B5] bg-white text-[#1E84B5]" onClick={() => reset()}>
              Reset
            </Button>
            <Button variant="Default" type="submit" className='w-full text-white bg-[#1E84B5]'>
              Send Message
            </Button>
          </div>
        </form>
      </div>
        </>
    )
}