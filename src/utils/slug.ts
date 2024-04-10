export const generateSlug = (text: string): string => {
    return text
        .normalize("NFD") // Remove acentos
        .replace(/[\u0300-\u036f]/g, "") // Remove os diacríticos
        .toLowerCase() // Converte para minúsculas
        .replace(/[^\w\s-]/g, "") // Remove caracteres especiais exceto letras, espaços e traços
        .replace(/\s+/g, "-"); // Substitui espaços por traços
};
