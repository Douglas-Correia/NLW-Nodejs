import {
  BadRequest
} from "./chunk-JRO4E4TH.mjs";
import {
  ZodError
} from "./chunk-AG67VYHJ.mjs";

// src/error-handler.ts
var errorHandler = (error, req, res) => {
  const { validation, validationContext } = error;
  if (error instanceof ZodError) {
    return res.status(400).send({
      message: `Error during validation`,
      errors: error.flatten().fieldErrors
    });
  }
  if (error instanceof BadRequest) {
    return res.status(400).send({ message: error.message });
  }
  return res.status(500).send({ message: "Internal server error" });
};

export {
  errorHandler
};
