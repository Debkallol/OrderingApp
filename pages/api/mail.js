//const mail = require('@sendgrid/mail'); 

//mail.setApiKey(process.env.SENDGRID_API_KEY);
import dbConnect from '../../utils/dbConnect';
import giftschema from '../../models/Note';
//import notes from './notes';

dbConnect();

export default async (req, res) => {
 // const body = JSON.parse(req.body);

    const { method } = req;
    switch (method) {
        case 'GET':
            try {
                const notes = await giftschema.find({});
                res.status(200).json({ success: true, data: notes })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST': 
            try {
                const loadformData = JSON.parse(req.body)
                //const  = req.body.formData
                
                const newcommentobj = await giftschema.create({
                
                  Occasion: req.loadformData.occasion,
                  Budget: req.loadformData.Budget,
                  Deliverytime: req.loadformData.deliverytime,
                  Deliverylocation: req.loadformData.deliverylocation,
                  CustomerNameAndNumber: req.loadformData.customerNameAndNumber,
                  Message: req.loadformData.message
                  });
                loadformData.push(newcommentobj)

                //res.status(201).json(newcommentobj)
                res.status(201).json({ success: true, data: newcommentobj })
                
                //res.status(201).json({ success: true, data: note })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
            default:
            res.status(400).json({success: false});
            break;


            }
}


// export default async (req, res) => {
//   const body = JSON.parse(req.body);

// const emailmessage = `
//   Occasion: ${body.occasion}\r\n
//   Budget: ${body.budget}\r\n
//   Deliverytime: ${body.deliverytime}\r\n
//   Deliverylocation: ${body.deliverylocation}\r\n
//   CustomerNameAndNumber: ${body.customerNameAndNumber}\r\n
//   Message: ${body.message},
// `;

// const data = {
//   to = 'kamanashishdeb17@gmail.com',
//   from = 'debkallol71@gmail.com',
//   subject = 'New web form message',
//   text = emailmessage,
//   html = emailmessage.replace(/\r\n/g, '<br>'),
// };

//await mail.send(data);

//   console.log(body);
//   res.status(200).json({ status: 'OK' });
// }
