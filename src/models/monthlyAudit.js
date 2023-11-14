import mongoose from "mongoose";

const monthlyAuditSchema = new mongoose.Schema(
  {
    userId: String,
    currentBalance: Number,
    currentBalanceStatus: {
      type: String,
      enum: ["paid", "unpaid"],
      default: "unpaid",
    },
    previousBalance: Number,
    previousBalanceStatus: {
      type: String,
      enum: ["paid", "unpaid"],
      default: "unpaid",
    },
    currentReading: Number,
    previousReading: Number,
    totalConsumption: Number,
    amountPaid: Number,
    credits: Number,
    creditStatus: {
      type: String,
      enum: ["paid", "unpaid"],
      default: "unpaid",
    },
    billingPeriod: Date,
  },
  {
    timestamps: true,
  }
);

monthlyAuditSchema.pre("save", function (next) {
  if (this.currentReading !== undefined && this.previousReading !== undefined) {
    this.totalConsumption = this.currentReading - this.previousReading;
  }
  next();
});

module.exports =
  mongoose.model.MonthlyAudit ||
  mongoose.model("MonthlyAudit", monthlyAuditSchema);
