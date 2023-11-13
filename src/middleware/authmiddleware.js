const { NextResponse } = require("next/server");

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        NextResponse.json(
          {
            success: false,
            message: "You do not have permision to perform this action",
          },
          { status: 403 }
        )
      );
    }
    next();
  };
};
