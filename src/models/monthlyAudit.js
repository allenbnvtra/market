import mongoose from "mongoose";

const monthlyAuditSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Monthly bill must belong to a user"],
    },
    currentBill: {
      type: Number,
      default: 0,
    },
    previousBill: {
      type: Number,
      required: true,
      default: 0,
    },
    currentReading: {
      type: Number,
      required: true,
      default: 0,
    },
    previousReading: {
      type: Number,
      required: true,
      default: 0,
    },
    totalConsumption: {
      type: Number,
      default: 0,
    },
    amountPaid: { type: Number, default: 0 },
    remainingBalance: { type: Number, default: 0 },
    billingPeriodFrom: String,
    billingPeriodTo: String,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

monthlyAuditSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name stallNumber",
  });
  next();
});

// monthlyAuditSchema.pre("save", function (next) {
//   if (this.totalConsumption !== undefined) {
//     this.currentBill = this.totalConsumption * 12;
//   }
//   next();
// });

module.exports =
  mongoose.models.MonthlyAudit ||
  mongoose.model("MonthlyAudit", monthlyAuditSchema);
