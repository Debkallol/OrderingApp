import dbConnect from '../../../utils/dbConnect';
import Giftnote from '../../../models/Giftnote';

dbConnect();

export default async (req, res) => {
    
        const { method } = req;
        switch (method) {
            // case 'GET':
            //     try {
            //         const note = await Note.find({});
            //         res.status(200).json({ success: true, data: note })
            //     } catch (error) {
            //         res.status(400).json({ success: false });
            //     }
            //     break;
            case 'POST': 
                try {
                    //body: JSON.parse(req.body)
                   // const notes = await JSON.parse(req.body);
                    const notessave = await Giftnote.create(req.body);
                    // const newdata = {
                    //     id: Date.now(),
                    //     text: occasion,
                    //     text: budget,
                    //     text: deliverytime,
                    //     text: deliverylocation,
                    //     text: customerNameAndNumber,
                    //     text: message
                    // }
                    // notessave.push(newdata)
                    res.status(201).json({ success: true, data: notessave })
                } catch (error) {
                    res.status(400).json({ success: false });
                    console.log(error)
                }
                break;
                default:
                res.status(400).json({success: false});
                break;
    
    
                }
    
    
    // export default function handler (req, res){
    //     const body = req.body
    //     if (!body.name){
    //         return res.status(400).json({success: false});
    //     }
        
    //     const notes =  Note.create(req.body);
    //     res.status(200).json({ success: true, CustomerData: notes })
    // }
    // occasion: req.body,
    //                     budget: req.body,
    //                     deliverytime: req.body,
    //                     deliverylocation: req.body,
    //                     customerNameAndNumber: req.body,
    //                     message: req.body

}
    


