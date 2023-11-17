import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    bill: {
      type: mongoose.Schema.ObjectId,
      ref: "MonthlyAudit",
      required: [true, "A payment should have bill"],
    },
    recieptNo: {
      type: String,
      required: true,
    },
    paymentAmount: {
      type: Number,
      required: true,
    },
    balance: {
      type: Number,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

paymentSchema.pre("save", async function (next) {
  try {
    // Fetch the associated MonthlyAudit document
    const monthlyAudit = await mongoose
      .model("MonthlyAudit")
      .findById(this.bill);

    // Ensure that the monthlyAudit and remainingBalance are available
    if (monthlyAudit && monthlyAudit.remainingBalance !== undefined) {
      // Subtract the paymentAmount from the remainingBalance
      monthlyAudit.remainingBalance -= this.paymentAmount;
      monthlyAudit.remainingBalance = Math.max(
        0,
        monthlyAudit.remainingBalance
      );
      await monthlyAudit.save();

      // Set the paymentAmount of the current Payment document
      this.balance = monthlyAudit.remainingBalance;
      next(); // Call next to proceed with the save operation
    } else {
      throw new Error(
        "MonthlyAudit not found or remainingBalance not available."
      );
    }
  } catch (error) {
    next(error); // Call next with the error to propagate it
  }
});

paymentSchema.pre(/^find/, function (next) {
  this.populate({
    path: "bill",
    select: "remainingBalance",
  });
  next();
});

const Payment =
  mongoose.models.Payment || mongoose.model("Payment", paymentSchema);

export default Payment;
