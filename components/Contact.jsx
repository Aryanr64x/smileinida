
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import client from "../sanity/client";




const Contact = () => {

  const [clinicName, setClinicName] = useState('');
  const [cityName, setCityName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [dialog, setDialog] = useState(false);

  const submitMessage = () => {
    if (clinicName.length != 0 && cityName.length != 0 && message.length != 0) {
      setLoading(true);
      const doc = {
        _type: 'message',
        clinicName,
        cityName,
        email,
        message,
        

      }
      client.create(doc).then((res) => {
        console.log("That works");
        setLoading(false);
        setEmail('');
        setClinicName('');
        setCityName('');
        setMessage('');
        setDialog(true);

      }).catch((e) => {

      });
    }
  }


  return (
    <section
      className="relative bg-gradient-to-r from-blue-500 to-green-400  px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-8" id="contact">
      <div className="text-center text-4xl font-bold text-white title">
        Contact Now
      </div>
      <div className="flex flex-col md:flex-row mt-4">
        <div className="md:basis-1/2">
          <input type="text" className="p-2 w-full rounded-sm mt-4" placeholder="Enter Your Clinic Name " onChange={(e) => { setClinicName(e.target.value) }} value={ clinicName } />
          <input type="text" className="p-2 w-full rounded-sm mt-2" placeholder="Enter Your City " onChange={(e) => { setCityName(e.target.value) }} value={ cityName } />
          <input type="text" className="p-2 w-full rounded-sm mt-2" placeholder="Provide your email  " onChange={(e) => { setEmail(e.target.value) }} value = { email  } />

          <textarea name="Message" id="" className="p-2 w-full rounded-sm mt-4" placeholder="Your query or message to us ." onChange={(e) => { setMessage(e.target.value) }} value={ message } />

          <div className="flex  justify-center md:justify-end">
            {
              (loading) ? (<CircularProgress className="mt-8" />) : (<button className="px-8 py-2 shadow-sm rounded inline-block mt-8 font-semibold hover:bg-blue-500 bg-blue-600 text-white " onClick={submitMessage}>
              SUBMIT
            </button>)
            }
          </div>
        </div>
        <div className="md:basis-1/2 flex flex-col justify-center mt-4">
          <div className="text-center text-white text-3xl font-bold">
            (+91) 6290341107
          </div>
          <div className="text-center  mt-4 text-white text-3xl font-bold">
            smilemarketing@gmail.com
          </div>
        </div>
      </div>
      <Dialog
                open={dialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"

            >
                <DialogTitle id="alert-dialog-title" className="bg-dark text-primary fw-bold">
                    Thanks for contacting !
                </DialogTitle>
                <DialogContent className="bg-dark font-bold ">
                    <DialogContentText id="alert-dialog-description " className="text-primary font-bold">
                       You will be reached soon on the email you provided, We will try our best to reach you  😊😊
                    </DialogContentText>
                </DialogContent>
                <DialogActions className="bg-dark text-primary">
                    <button className=" text-primary px-4 py-2 rounded-md mt-4 font-semibold" onClick={() => { setDialog(false) }}> NOICE !! </button>
                </DialogActions>
            </Dialog>
    </section>
  )
}
export default Contact;