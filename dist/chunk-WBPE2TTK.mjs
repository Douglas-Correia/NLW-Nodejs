// src/utils/slug.ts
var generateSlug = (text) => {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
};

export {
  generateSlug
};
