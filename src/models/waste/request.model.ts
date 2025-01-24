import mongoose from 'mongoose';
import { IRequest } from '../../types/models/waste';

const requestSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
      required: true
    },
    status: {
      type: String,
      enum: ['requested', 'accepted', 'rejected'],
      default: 'requested'
    },
    wasteType: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    address1: {
      type: String,
      required: true
    },
    address2: {
      type: String
      //   required: true
    },
    pickupDateTime: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Waste = mongoose.model<IRequest>('RequestWaste', requestSchema);
export default Waste;
