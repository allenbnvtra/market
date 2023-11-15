import mongoose from "mongoose";

const monthlyAuditSchema = new mongoose.Schema(
  {
    userId: String,
    currentBill: { type: Number, default: 0 },
    previousBill: { type: Number, default: 0 },
    currentReading: { type: Number, default: 0 },
    previousReading: { type: Number, default: 0 },
    totalConsumption: { type: Number, default: 0 },
    amountPaid: { type: Number, default: 0 },
    remainingBalance: { type: Number, default: 0 },
    billingPeriodFrom: Date,
    billingPeriodTo: Date,
  },
  {
    timestamps: true,
  }
);

monthlyAuditSchema.pre("save", function (next) {
  if (this.totalConsumption !== undefined) {
    this.currentBill = this.totalConsumption * 12;
  }
  next();
});

monthlyAuditSchema.pre("save", function (next) {
  if (this.currentReading !== undefined && this.previousReading !== undefined) {
    this.totalConsumption = this.currentReading - this.previousReading;
  }
  next();
});

module.exports =
  mongoose.model.MonthlyAudit ||
  mongoose.model("MonthlyAudit", monthlyAuditSchema);
